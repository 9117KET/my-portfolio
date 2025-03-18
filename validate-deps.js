#!/usr/bin/env node

console.log("Checking ESLint plugins...");

// List of required plugins
const requiredPlugins = [
  "eslint-plugin-react-refresh",
  "eslint-plugin-security",
  "eslint-plugin-jsx-a11y",
];

const { execSync } = require("child_process");

// Check each plugin and install if missing
let missingPlugins = [];

for (const plugin of requiredPlugins) {
  try {
    require.resolve(plugin);
    console.log(`✅ ${plugin} is installed`);
  } catch (error) {
    console.log(`❌ ${plugin} is missing`);
    missingPlugins.push(plugin);
  }
}

// Install missing plugins
if (missingPlugins.length > 0) {
  console.log(`Installing missing plugins: ${missingPlugins.join(", ")}`);

  try {
    execSync(`npm install --save-dev ${missingPlugins.join(" ")}`, {
      stdio: "inherit",
    });
    console.log("All plugins installed successfully!");
  } catch (error) {
    console.error("Failed to install plugins:", error.message);
    process.exit(1);
  }
} else {
  console.log("All required plugins are installed!");
}

// Verify the installations
console.log("\nVerifying installations...");
let allInstalled = true;

for (const plugin of requiredPlugins) {
  try {
    require.resolve(plugin);
    console.log(`✅ ${plugin} is verified`);
  } catch (error) {
    console.log(`❌ ${plugin} is still missing`);
    allInstalled = false;
  }
}

if (allInstalled) {
  console.log("\nAll plugins are successfully installed and verified!");
} else {
  console.error(
    "\nThere are still missing plugins. Please try installing them manually."
  );
  process.exit(1);
}
