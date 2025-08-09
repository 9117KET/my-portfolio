export default function PhilEthics() {
  return (
    <div className="font-mono mb-4 max-w-none">
      {/* Introduction */}
      <section className="mb-8">
        <p className="mb-6">
          During my time at Constructor University, one of the most impactful
          courses I took was Fundamentals of Philosophical Ethics. This course
          not only challenged my thinking but also provided frameworks for
          addressing complex moral dilemmas in both personal and professional
          contexts.
        </p>
      </section>

      {/* Major Ethical Theories */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-400">
          Major Ethical Theories
        </h2>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">1. Utilitarianism</h3>
          <p>
            Developed by philosophers like Jeremy Bentham and John Stuart Mill,
            utilitarianism focuses on maximizing happiness or well-being for the
            greatest number of people. This approach evaluates the morality of
            actions based on their consequences rather than the actions
            themselves.
          </p>
          <p className="mt-2 italic">
            Modern Application: Public health policies during the COVID-19
            pandemic, where decisions were made to benefit the majority while
            potentially inconveniencing individuals.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">2. Kantian Ethics</h3>
          <p>
            Immanuel Kant's categorical imperative emphasizes duty-based actions
            and universal moral laws. It suggests that moral rules should be
            applicable universally, regardless of consequences.
          </p>
          <p className="mt-2 italic">
            Modern Application: Human rights declarations and the principle of
            informed consent in medical ethics.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">3. Virtue Ethics</h3>
          <p>
            Dating back to Aristotle, virtue ethics focuses on the character of
            the moral agent rather than rules or consequences. It emphasizes
            developing good character traits like courage, temperance, and
            justice.
          </p>
          <p className="mt-2 italic">
            Modern Application: Professional codes of conduct and character
            education in schools.
          </p>
        </div>
      </section>

      {/* Contemporary Ethical Challenges */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-400">
          Contemporary Ethical Challenges
        </h2>
        <ul className="list-disc pl-6 space-y-3">
          <li>
            <strong>AI and Automation:</strong> Questions about responsibility,
            bias, and the displacement of human workers
          </li>
          <li>
            <strong>Environmental Ethics:</strong> Balancing economic growth
            with environmental sustainability
          </li>
          <li>
            <strong>Bioethics:</strong> Genetic engineering, end-of-life care,
            and healthcare resource allocation
          </li>
          <li>
            <strong>Digital Privacy:</strong> Balancing security with individual
            privacy rights
          </li>
        </ul>
      </section>

      {/* Practical Decision-Making Framework */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-400">
          A Practical Framework for Ethical Decision-Making
        </h2>
        <ol className="list-decimal pl-6 space-y-3">
          <li>
            <strong>Identify the ethical issue:</strong> What are the moral
            dimensions of the problem?
          </li>
          <li>
            <strong>Gather relevant information:</strong> What facts do we need
            to make an informed decision?
          </li>
          <li>
            <strong>Consider stakeholders:</strong> Who will be affected by this
            decision?
          </li>
          <li>
            <strong>Analyze using ethical frameworks:</strong> How would
            different ethical theories approach this?
          </li>
          <li>
            <strong>Make and implement the decision:</strong> Choose the most
            ethically justified course of action
          </li>
          <li>
            <strong>Reflect and learn:</strong> What can we learn from the
            outcome?
          </li>
        </ol>
      </section>

      {/* Personal Reflection */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-400">
          Personal Reflection
        </h2>
        <p>
          Studying philosophical ethics has profoundly influenced my approach to
          decision-making, both in personal life and in technology development.
          It has taught me that ethical considerations should be at the
          forefront of innovation, not an afterthought. As we continue to
          develop new technologies and face unprecedented challenges, these
          fundamental ethical principles become increasingly relevant.
        </p>
      </section>

      {/* Conclusion */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-400">
          Conclusion
        </h2>
        <p>
          The study of philosophical ethics provides us with valuable tools for
          navigating complex moral decisions. While no ethical framework is
          perfect, understanding these different approaches helps us make more
          thoughtful and justified decisions. As we face new challenges in
          technology, environment, and society, these philosophical foundations
          remain crucial guides for ethical decision-making.
        </p>
      </section>
    </div>
  );
}
