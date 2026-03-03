export default function DeepblockJourney() {
  return (
    <div className="font-mono mb-4 max-w-none">
      {/* Motivation and Origin Story */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-400">
          Why I Built Deepblock
        </h2>
        <p className="mb-4">
          Deepblock is not my first productivity system. It&apos;s what I built
          after almost everything else failed. For more than three years, I
          lived inside productivity apps. Notion was my favorite: flexible
          pages, nested databases, drag-and-drop, and templates for everything.
          I used it for university, side projects, learning plans, and
          reflections.
        </p>
        <p>
          But the more I tried to personalize Notion around how I actually live
          my days, the clearer one thing became: most tools are great at{" "}
          <span className="italic">storing</span> tasks, but not great at{" "}
          <span className="italic">shaping a day</span>. I wanted something that could hold me inside a
          deep-work rhythm. That&apos;s where Deepblock started.
        </p>
      </section>

      {/* Four-Block Day Model */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-400">
          The Four-Block Day Model
        </h2>
        <p className="mb-4">
          The core idea behind Deepblock comes from a research-backed model and
          a video I watched about structuring a day into four distinct time
          blocks. Instead of treating a day as one long, blurry stream of hours,
          you divide it into intentional segments with clear purposes:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            <strong>5 a.m. – 9 a.m. — Personal Deep Work:</strong> Focused on
            personal development: working out, learning, reading, or building
            side projects. This is the block where you invest in yourself before
            the world starts asking for your attention.
          </li>
          <li>
            <strong>9 a.m. – 5 p.m. — Work / Main Responsibilities:</strong>{" "}
            Dedicated to your primary commitments: job, startup, or academic
            work. This is where you execute on your core responsibilities.
          </li>
          <li>
            <strong>5 p.m. – 9 p.m. — Life and Relationships:</strong> Time for
            family, friends, hobbies, and sports. This block protects the part
            of life that doesn&apos;t show up on a resume but matters the most.
          </li>
          <li>
            <strong>9 p.m. – 5 a.m. — Sleep and Recovery:</strong> A protected
            block for rest. Instead of treating sleep as leftover time, this
            model treats it as a first-class citizen in your schedule.
          </li>
        </ol>
        <p className="mt-4">
          I loved this model because it forces you to
          think about who you are in each block: learner, builder, worker,
          human, sleeper. Deepblock is my attempt to turn this abstract model
          into a concrete, usable daily planner.
        </p>
      </section>

      {/* Friction with Existing Tools */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-400">
          When Generic Tools Weren&apos;t Enough
        </h2>
        <p className="mb-4">
          I tried to implement this four-block model inside Notion. I created
          pages for each block, database views for different time windows, and
          used tags, filters, and formulas to simulate time-aware tasks. It
          looked good on paper, but in practice I was spending more time{" "}
          planning the system than actually using it.
        </p>
        <p className="mb-4">
          There was no native way to reflect the blocks in the interface, no
          automatic highlighting when I moved from morning deep work to daytime
          execution. Copying yesterday&apos;s plan into today was manual. It was
          a lot of overhead for something that I wanted to feel natural and
          fast.
        </p>
        <p>
          Then, about two weeks before I started coding Deepblock, I opened
          Notion and saw a message: I had used all my free blocks and needed to
          upgrade to continue. As a CS student just graduating with a Computer
          Science degree, a Data Science minor, and a focus on AI/ML, I realized
          this was the perfect moment to stop fighting generic tools and build
          something that truly matched how I work.
        </p>
      </section>

      {/* From User to Builder */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-400">
          From User of Tools to Builder of Tools
        </h2>
        <p className="mb-4">
          My background in Computer Science and Data Science, with
          specializations in AI and machine learning, meant I had enough
          technical foundation to build my own productivity system. For years,
          I&apos;d been on the consumer side of tools. Deepblock is me stepping
          decisively into the builder side.
        </p>
        <p>
          From the beginning, I set a few constraints: the four-block model
          should be at the core but not forced on everyone; planning should be
          fast, not a separate job; the app should be local-first, with data
          stored in the browser; and it should be built with a modern, familiar
          stack: React, TypeScript, Vite, Tailwind CSS, and{" "}
          <code>localStorage</code>. Those constraints shaped every design
          decision that followed.
        </p>
      </section>

      {/* Designing the Daily Planner */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-400">
          Designing Days Around Deep Work
        </h2>
        <p className="mb-4">
          If you visit{" "}
          <a
            href="https://ket-deepwork.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 underline"
          >
            the live Deepblock app
          </a>
          , the layout is intentionally opinionated but still flexible. Instead
          of one giant list, your day is split into meaningful sections:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>3 must-dos for the day</li>
          <li>Morning routine</li>
          <li>High, Medium, and Low priority tasks</li>
          <li>Night routine</li>
        </ul>
        <p>
          These sections map naturally onto the four-block model. The 5–9 a.m.
          block holds routines and deep personal work. The 9–5 block is where
          most high-priority execution lives. The 5–9 p.m. block is reserved for
          life, relationships, and hobbies. The 9 p.m.–5 a.m. block is protected
          for sleep. Deepblock reminds you who you&apos;re trying to be in each part of the day.
        </p>
      </section>

      {/* Reducing Planning Overhead */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-400">
          Planning Once, Reusing Often
        </h2>
        <p className="mb-4">
          One of the biggest lies in productivity is that planning more always
          leads to doing more. In reality, a lot of us burn our best energy
          planning instead of executing. I&apos;ve been there and spending 30–40
          minutes making the perfect plan, then having nothing left for the
          actual work.
        </p>
        <p className="mb-4">
          Deepblock is intentionally designed to be hostile to over-planning. It
          gives you two powerful shortcuts:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Copy from yesterday:</strong> If today looks like
            yesterday, you don&apos;t rebuild your entire plan. You reuse it and
            adjust what&apos;s different.
          </li>
          <li>
            <strong>Copy from last same weekday:</strong> If your Thursdays
            follow a pattern, you can copy last Thursday&apos;s structure
            instead of starting from a blank page.
          </li>
        </ul>
        <p className="mt-4">
          After years of planning in Notion, I realized most days are
          variations on a theme, not brand-new compositions. Deepblock encodes
          that insight directly into the UI so you spend less time planning and
          more time doing.
        </p>
      </section>

      {/* Time-Blocked Tasks and Focus */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-400">
          Time-Blocked Tasks and Gentle Focus
        </h2>
        <p className="mb-4">
          Deepblock treats tasks as promises to your future self, not just text
          on a screen. For each task, you can set a start time in 24-hour
          format, optionally add a duration, and let the system highlight tasks
          when they&apos;re in their active window. Tasks stay highlighted until
          you complete them or the time window elapses.
        </p>
        <p className="mb-4">
          To gently guide focus, each task&apos;s allocated time is supported by
          three beeps: one at the start, one at the midpoint, and one at the
          end. They are small nudges
          that say: &quot;Start now,&quot; &quot;You&apos;re halfway
          through,&quot; and &quot;Wrap up.&quot;
        </p>
        <p>
          This ties directly into basic productivity psychology. Simple rules
          like the 2-minute or 5-minute rule teach us that quick wins create a
          dopamine spike in the brain, making it easier to keep going. By making
          it trivial to start a focused block and actually finish something,
          Deepblock helps you enter that loop more often.
        </p>
      </section>

      {/* Weekly Overview and Deep-Work Timer */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-400">
          Weekly Overview and Deep-Work Timer
        </h2>
        <p className="mb-4">
          Productivity is about patterns
          over weeks and months. Deepblock includes a weekly overview that shows
          the percentage of tasks you completed and a visual bar for your
          progress across the week. Over time, this becomes a mirror where you
          can see the weeks you were consistent and the weeks where life got in
          the way.
        </p>
        <p className="mb-4">
          To support focused execution, Deepblock also includes a deep-work
          timer with presets like 25, 45, and 60 minutes. You pick a task, start
          a timer, and commit to a single block of focused work. It&apos;s a
          simple structure, but it&apos;s often all you need to break through
          resistance and get started.
        </p>
        <p>
          Alongside this, a motivation card surfaces short quotes inside the
          app. They&apos;re small, but they reflect a big belief: productivity
          is also about state of mind.
          Sometimes, one line at the right moment is enough to push you into
          the next block.
        </p>
      </section>

      {/* Why Open Source */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-400">
          Why I Open-Sourced Deepblock
        </h2>
        <p className="mb-4">
          Deepblock is fully open source on GitHub at{" "}
          <a
            href="https://github.com/9117KET/ket_deepwork"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 underline"
          >
            github.com/9117KET/ket_deepwork
          </a>
          . I chose to open-source it for three main reasons.
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            <strong>Accountability and Craft:</strong> Knowing that other
            developers can read the code naturally pushes me toward cleaner
            architecture, clearer state management, and more thoughtful
            decisions instead of quick hacks.
          </li>
          <li>
            <strong>Learning in Public:</strong> With my background in AI, Data
            Science, and full-stack development, I still learn something new on
            every project. By exposing the code, I invite feedback on
            implementation details, discussions about better patterns, and
            contributions for features I may not have considered.
          </li>
          <li>
            <strong>Future Collaborators and Users:</strong> My long-term
            vision is to add optional authentication, let users configure how
            many blocks they want in a day, and integrate AI to suggest daily
            plans based on historical behavior. Open-sourcing Deepblock means
            anyone who resonates with this model can fork it, adapt it, and
            build their own version instead of starting from zero.
          </li>
        </ol>
      </section>

      {/* What Deepblock Means to Me */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-400">
          What Deepblock Means to Me
        </h2>
        <p className="mb-4">
          Deepblock is the result of my three years
          of friction with generic productivity tools, combined with research on
          time, psychology, and deep work. It is a translation of an abstract
          time-blocking model into something concrete that I use every day.
        </p>
        <p className="mb-4">
          Today, I use Deepblock to structure job applications, language
          practice(German), learning, side projects, and rest. For the first time, my
          daily planner feels like it actually understands how I want my days to
          feel. It&apos;s not finished, and that&apos;s the whole point. It&apos;s a
          living experiment that I&apos;m iterating on in public.
        </p>
        <p>
          That&apos;s why I built Deepblock. That&apos;s why I use it every day.
          And that&apos;s why I&apos;ve open-sourced it; for anyone who wants a
          planner that doesn&apos;t just track tasks, but helps you design a day
          around deep, meaningful work.
        </p>
      </section>
    </div>
  );
}

