export default function AIEthics() {
  return (
    <div className="font-sans mb-4 text-lg prose prose-lg dark:prose-invert max-w-none">
      {/* Introduction */}
      <section className="mb-8">
        <p className="mb-6">
          As artificial intelligence continues to reshape our world, the ethical
          implications of AI systems have become increasingly critical. This
          article explores real-world scenarios that highlight the importance of
          responsible AI development and deployment.
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
            In 2015, Amazon discovered that their AI recruiting tool showed bias
            against women. The system, trained on historical hiring data,
            penalized resumes containing words like "women's" and downgraded
            graduates from women's colleges. This led to Amazon abandoning the
            tool and highlights how historical biases can be perpetuated through
            AI.
          </p>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">
            Facial Recognition Disparities
          </h3>
          <p>
            Studies have shown that commercial facial recognition systems have
            higher error rates for minorities and women, leading to potential
            discrimination in law enforcement and security applications. For
            example, the NIST study in 2019 found that some facial recognition
            algorithms were up to 100 times more likely to misidentify people of
            color.
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
            In 2020, a healthcare algorithm used by many U.S. hospitals was
            found to systematically discriminate against Black patients. The
            system used healthcare costs as a proxy for health needs, but due to
            historical disparities in healthcare access, this led to Black
            patients receiving less care than equally sick white patients.
          </p>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">
            COMPAS Recidivism Prediction
          </h3>
          <p>
            The COMPAS system, used in criminal justice to predict recidivism
            rates, was found to be twice as likely to falsely label Black
            defendants as future criminals compared to white defendants. This
            case highlights the need for transparency in AI systems making
            high-stakes decisions.
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
            The Cambridge Analytica scandal revealed how AI systems could be
            used to analyze personal data from millions of Facebook users
            without their consent, influencing political campaigns. This case
            led to major changes in data protection regulations and highlighted
            the importance of user privacy.
          </p>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">
            Smart Home Privacy Issues
          </h3>
          <p>
            Recent incidents with smart home devices accidentally recording
            private conversations and sending them to random contacts
            demonstrate the privacy risks of AI-powered systems in our homes.
            This raises questions about the balance between convenience and
            privacy.
          </p>
        </div>
      </section>

      {/* Future Considerations */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-400">
          4. Looking Forward: Responsible AI Development
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Regular algorithmic audits for bias and fairness</li>
          <li>
            Transparent documentation of AI system limitations and potential
            risks
          </li>
          <li>Diverse development teams to catch potential biases early</li>
          <li>Clear accountability frameworks for AI decisions</li>
          <li>Strong data protection measures and user privacy controls</li>
        </ul>
      </section>

      {/* Conclusion */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-400">
          Conclusion
        </h2>
        <p>
          As AI continues to evolve and impact more aspects of our lives,
          addressing ethical considerations becomes increasingly crucial.
          Organizations must prioritize responsible AI development that
          considers fairness, transparency, and privacy while actively working
          to prevent and address potential harmful impacts on society.
        </p>
      </section>
    </div>
  );
}
