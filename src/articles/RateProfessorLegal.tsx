/**
 * RateProfessorLegal - A component displaying a blog article about the Rate My Professor project and legal issues faced
 *
 * This component presents a detailed narrative about the development of a Rate My Professor website,
 * the challenges faced with European GDPR regulations, and the lessons learned from the experience.
 * The content is formatted in a readable, engaging way with proper spacing and structural elements.
 */
export default function RateProfessorLegal() {
  return (
    <div className="font-mono mb-4 max-w-none">
      {/* Main Article Content */}
      <article className="space-y-6">
        <p className="text-xl font-semibold mb-6">
          An AI project I developed almost got me into legal trouble in Europe.
        </p>

        <p>
          For the past 3+ months, I have been developing a Rate My Professor
          website that helps students in my university anonymously rate
          professors and share their experiences through this platform within
          seconds and at any time (which by the way is visible to everyone)
        </p>

        <p>
          My motivation for building this started when I got really frustrated
          by the manual process required to submit professor reviews, usually at
          the end of every semester. Also, given that I started my studies two
          semesters late, I couldn't find a reliable source of information
          regarding different teaching methods and professors on campus from
          real student experiences, especially for courses with multiple
          professors (which didn't make a lot of sense to me). So, I decided to
          build one.
        </p>

        <p>
          After going through the process of planning and developing this
          platform tailored to my uni, I decided to launch a beta test with
          about 25 students, and their feedback were extremely useful. Based on
          their feedback, I improved the platform and decided to take it to the
          entire student community.
        </p>

        <p>
          Now, the problem is that there's a data privacy law in Europe (General
          Data Protection Regulation - GDPR), which I totally didn't research
          beforehand (lesson 1 learned). During my meeting with the student
          government, regarding taking this to the school authorities for
          approval and potential distribution, that's actually when I learned
          about it.
        </p>

        <p>
          Secondly, my intention of making this platform anonymous was totally
          not the best idea because this means students or even non-students can
          submit reviews or say things that might not be true regarding their
          experience. Though, I thought about this possibilty and developed a
          content moderation system to handle some of the gibberish or
          non-relevant information that could be shared on this platform.
          (Second lesson learned)
        </p>

        <p>
          Unfortunately, I can't share this platform publicly as of now, but the
          lessons learned through developing it will definitely go a long way in
          guiding me on future projects.
        </p>

        <p>
          Currently, I'm thinking of pivoting this idea to still permit students
          to use because this platform really got accepted by the laws and they
          were really exited to roast some professors (lol), but no one is above
          the law and I really don't want to get into any trouble now.
        </p>

        <p>
          I'll be sharing the technical development process of this platform in
          subsiquent post and also giving a shoutout to those who helped by
          either providing feedback or testing.
        </p>

        <p className="italic">
          btw, the interface above is how the platform looks with some slight
          modifications using Ai for better visibilty.
        </p>

        <div className="mt-4 font-mono text-sm">
          <span className="text-blue-600">#Kinlo</span>{" "}
          <span className="text-blue-600">#KET</span>{" "}
          <span className="text-blue-600">#AI</span>
        </div>
      </article>
    </div>
  );
}
