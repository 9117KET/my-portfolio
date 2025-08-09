export default function AIEthics() {
  return (
    <div className="font-mono mb-4 max-w-none">
      {/* Introduction */}
      <section className="mb-8">
        <p className="mb-6">
          As artificial intelligence continues to reshape our world at an
          unprecedented pace, the ethical implications of these powerful systems
          have become increasingly critical to address. This article explores
          compelling real-world scenarios that highlight the importance of
          responsible AI development and deployment, examining the challenges we
          face in creating AI that serves humanity ethically and equitably.
        </p>
      </section>

      {/* Bias in AI Systems */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-400">
          1. Bias in AI Systems: Real-World Impact
        </h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">
            Amazon's Recruiting Tool
          </h3>
          <p>
            In 2015, Amazon discovered that their AI recruiting tool
            systematically discriminated against women candidates. The system,
            trained on historical hiring data predominantly from male
            applicants, penalized resumes containing terms like "women's" and
            downgraded graduates from women's colleges. This troubling discovery
            led Amazon to abandon the tool entirely, highlighting how historical
            biases can be inadvertently amplified and perpetuated through AI
            systems when training data reflects existing inequities.
          </p>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">
            Facial Recognition Disparities
          </h3>
          <p>
            Extensive research has demonstrated that commercial facial
            recognition systems often exhibit significantly higher error rates
            for minorities and women, creating potential discrimination risks in
            law enforcement and security applications. The landmark NIST study
            in 2019 revealed that some facial recognition algorithms were up to
            100 times more likely to misidentify people of color compared to
            white individuals, raising serious concerns about deploying such
            technologies in high-stakes contexts without addressing these
            disparities.
          </p>
        </div>
      </section>

      {/* Transparency and Accountability */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-400">
          2. Transparency and Accountability
        </h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">
            Healthcare AI Decisions
          </h3>
          <p>
            In 2020, researchers uncovered that a healthcare algorithm widely
            used across U.S. hospitals systematically discriminated against
            Black patients. The system used historical healthcare costs as a
            proxy for medical needs, but due to longstanding disparities in
            healthcare access and utilization, this approach resulted in Black
            patients receiving significantly less care than equally ill white
            patients. This case exemplifies how seemingly neutral design choices
            can perpetuate systemic inequalities when the underlying societal
            context isn't properly considered.
          </p>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">
            COMPAS Recidivism Prediction
          </h3>
          <p>
            The COMPAS system, deployed in criminal justice settings to predict
            recidivism rates, was found to be twice as likely to falsely
            classify Black defendants as future criminals compared to white
            defendants with similar backgrounds. This troubling disparity
            highlights the critical need for transparency and fairness audits in
            AI systems making high-stakes decisions that significantly impact
            people's lives and freedoms. Without proper oversight, algorithmic
            injustice can become encoded into our social institutions.
          </p>
        </div>
      </section>

      {/* Privacy Concerns */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-400">
          3. Privacy and Data Protection
        </h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">
            Cambridge Analytica Scandal
          </h3>
          <p>
            The Cambridge Analytica scandal revealed the alarming potential for
            AI systems to analyze personal data from millions of Facebook users
            without their informed consent, subsequently using these insights to
            influence political campaigns through targeted messaging. This
            watershed case triggered major reforms in data protection
            regulations worldwide and underscored the fundamental importance of
            robust user privacy protections in AI systems that process personal
            information at scale.
          </p>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">
            Smart Home Privacy Issues
          </h3>
          <p>
            Recent incidents involving smart home devices accidentally recording
            private conversations and inadvertently sending them to random
            contacts have highlighted the significant privacy vulnerabilities
            inherent in AI-powered systems operating within our most intimate
            spaces. These concerning breaches raise profound questions about the
            appropriate balance between technological convenience and personal
            privacy, especially as AI becomes increasingly embedded in our
            domestic environments.
          </p>
        </div>
      </section>

      {/* Future Considerations */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-400">
          4. Looking Forward: Responsible AI Development
        </h2>
        <p className="mb-4">
          To address these ethical challenges effectively, organizations
          developing and deploying AI systems should consider implementing the
          following best practices:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Conducting regular algorithmic audits for bias and fairness across
            diverse demographic groups
          </li>
          <li>
            Creating transparent documentation of AI system limitations,
            potential risks, and appropriate use cases
          </li>
          <li>
            Forming diverse development teams to identify and mitigate potential
            biases early in the design process
          </li>
          <li>
            Establishing clear accountability frameworks that specify
            responsibility for AI-driven decisions
          </li>
          <li>
            Implementing robust data protection measures and comprehensive user
            privacy controls
          </li>
        </ul>
      </section>

      {/* Conclusion */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-400">
          Conclusion
        </h2>
        <p>
          As artificial intelligence continues to evolve and permeate more
          aspects of our society, addressing ethical considerations becomes not
          just important but essential for responsible innovation. Organizations
          must prioritize ethical AI development practices that emphasize
          fairness, transparency, and privacy protection while proactively
          working to identify and mitigate potential harmful impacts. By
          approaching AI development with ethical principles at the forefront,
          we can harness the transformative potential of these technologies
          while ensuring they benefit humanity equitably.
        </p>
      </section>
    </div>
  );
}
