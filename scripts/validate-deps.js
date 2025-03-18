#!/usr/bin/env node

/**
 * This script validates that all required ESLint plugins are installed.
 * Run it with: node scripts/validate-deps.js
 */

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

console.log("Starting dependency validation...");

// Read the ESLint configuration to extract plugin dependencies
const eslintConfigPath = path.join(__dirname, "..", ".eslintrc.cjs");
console.log(`ESLint config path: ${eslintConfigPath}`);

try {
  const eslintConfig = require(eslintConfigPath);
  console.log("ESLint config loaded successfully");

  // Extract plugins from the configuration
  const requiredPlugins = eslintConfig.plugins || [];
  const extendsConfig = eslintConfig.extends || [];

  console.log(`Found plugins in config: ${JSON.stringify(requiredPlugins)}`);
  console.log(`Found extends in config: ${JSON.stringify(extendsConfig)}`);

  // Also extract plugins from extends (e.g., plugin:security/recommended)
  extendsConfig.forEach((ext) => {
    if (ext.startsWith("plugin:")) {
      const pluginName = ext.split(":")[1].split("/")[0];
      if (!requiredPlugins.includes(pluginName)) {
        requiredPlugins.push(pluginName);
      }
    }
  });

  console.log(
    `Final list of plugins to check: ${JSON.stringify(requiredPlugins)}`
  );
  console.log("Validating ESLint plugins...");

  // Check if each plugin package is installed
  const missingPlugins = [];
  for (const plugin of requiredPlugins) {
    const packageName = `eslint-plugin-${plugin}`;
    try {
      // Try to resolve the package
      require.resolve(packageName);
      console.log(`✅ ${packageName} is installed`);
    } catch (error) {
      console.log(`❌ ${packageName} is missing`);
      missingPlugins.push(packageName);
    }
  }

  // Install missing plugins if any
  if (missingPlugins.length > 0) {
    console.log(
      `\nInstalling missing ESLint plugins: ${missingPlugins.join(", ")}`
    );

    try {
      execSync(`npm install --save-dev ${missingPlugins.join(" ")}`, {
        stdio: "inherit",
      });
      console.log("\nAll missing plugins have been installed!");
    } catch (error) {
      console.error("\nFailed to install missing plugins:", error.message);
      process.exit(1);
    }
  } else {
    console.log("\nAll ESLint plugins are correctly installed!");
  }

  // Validate package.json scripts
  const packageJsonPath = path.join(__dirname, "..", "package.json");
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));

  // Check if prepare script is set up for husky
  if (!packageJson.scripts.prepare?.includes("husky")) {
    console.log(
      `\n⚠️ The prepare script for husky is not set up correctly in package.json.`
    );
  }

  console.log("\nDependency validation complete!");
} catch (error) {
  console.error("Error during validation:", error);
  process.exit(1);
}
