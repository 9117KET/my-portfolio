/**
 * Neo4j Generative AI Workshop – breakdown for portfolio blog.
 * Covers Graph RAG, knowledge graph construction, and retrieval (vector, vector+Cypher, text-to-Cypher).
 * Key parts only; industry-focused. Links and simple diagrams included.
 */

export default function Neo4jGenAIWorkshop() {
  return (
    <div className="font-mono mb-4 max-w-none">
      {/* Overview & links */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-400">
          Overview
        </h2>
        <p className="mb-4">
          This breakdown summarizes the Neo4j Generative AI Workshop (Knowledge
          Graphs, Graph RAG, and Retrieval), part of the Road to Node series. It
          focuses on concepts and practices that matter for building
          production-ready, graph-powered RAG and AI applications.
        </p>
        <div className="rounded-lg border border-gray-300 dark:border-gray-600 p-4 bg-gray-50 dark:bg-gray-800/50 mb-4">
          <h3 className="text-lg font-semibold mb-2 dark:text-gray-200">
            Official resources
          </h3>
          <ul className="list-disc pl-6 space-y-1 text-sm">
            <li>
              <a
                href="https://dev.neo4j.com/workshop-genai-notes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 underline"
              >
                Workshop notes (dev.neo4j.com/workshop-genai-notes)
              </a>{" "}
              – All links, setup, and API keys for the workshop.
            </li>
            <li>
              <a
                href="https://graphacademy.neo4j.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 underline"
              >
                Graph Academy (graphacademy.neo4j.com)
              </a>{" "}
              – Sign up and enroll in the Generative AI Workshop course.
            </li>
            <li>
              <a
                href="https://graphacademy.neo4j.com/courses/workshop-genai/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 underline"
              >
                Workshop course (Graph RAG, Knowledge Graphs & Retrieval)
              </a>
              .
            </li>
            <li>
              <a
                href="https://github.com/neo4j/graphrag-python"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 underline"
              >
                Neo4j Graph RAG for Python
              </a>{" "}
              – Package used in the hands-on (KG construction, retrievers).
            </li>
            <li>
              Microsoft research: search &quot;Microsoft Research Paper Graph
              RAG&quot; for the original Graph RAG benefits and methodology.
            </li>
          </ul>
        </div>
      </section>

      {/* What is Gen AI */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-400">
          What is Generative AI (in this context)
        </h2>
        <p className="mb-4">
          Gen AI here means models that generate new content (e.g. text) from
          training data. LLMs are statistical; they do not &quot;understand&quot;
          in a human sense and can hallucinate. Supplying <strong>context</strong> in
          the prompt (e.g. from a retriever) improves accuracy and reduces
          hallucination. That is the core motivation for RAG and Graph RAG.
        </p>
      </section>

      {/* RAG and Graph RAG */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-400">
          RAG and Graph RAG
        </h2>
        <p className="mb-4">
          In RAG (Retrieval Augmented Generation), the user question is sent to a
          retriever, which fetches relevant context from a data store (documents,
          APIs, or a graph). The LLM receives the question plus this context and
          produces a better, grounded answer.
        </p>
        <pre className="mb-4 p-4 rounded-lg bg-gray-100 dark:bg-gray-800 text-sm overflow-x-auto border border-gray-300 dark:border-gray-600">
{`  User question
       │
       ▼
  ┌─────────────┐     context      ┌─────┐
  │  Retriever  │ ───────────────► │ LLM │ ──► Answer
  └─────────────┘                  └─────┘
       │
       ▼
  (documents / graph / API)`}
        </pre>
        <p className="mb-4">
          <strong>Graph RAG</strong> (term from Microsoft research) combines RAG
          with a graph: you use both vector search and graph structure (e.g.
          traversals, patterns) to gather context. Benefits: richer context,
          better accuracy, explainability, and support for flexible, relationship-based
          queries.
        </p>
        <pre className="mb-4 p-4 rounded-lg bg-gray-100 dark:bg-gray-800 text-sm overflow-x-auto border border-gray-300 dark:border-gray-600">
{`  User question
       │
       ▼
  ┌─────────────────────────┐
  │ Vector + Graph Retriever │
  │  • Vector index (chunks) │
  │  • Graph traversal       │
  └────────────┬────────────┘
               │ context
               ▼
          ┌─────┐
          │ LLM │ ──► Answer
          └─────┘`}
        </pre>
      </section>

      {/* Knowledge graph construction */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-400">
          Knowledge graph construction
        </h2>
        <p className="mb-4">
          To build a knowledge graph from unstructured text you typically: load
          text, chunk it, create embeddings (for vector search), send chunks to an
          LLM to extract entities and relationships, then write nodes and
          relationships into the graph. The Neo4j Graph RAG Python package
          provides a &quot;Simple KG pipeline&quot; that does this.
        </p>
        <pre className="mb-4 p-4 rounded-lg bg-gray-100 dark:bg-gray-800 text-sm overflow-x-auto border border-gray-300 dark:border-gray-600">
{`  Unstructured text
       │
       ▼
  Chunk ──► Embed ──► LLM (extract entities & relationships)
       │                    │
       │                    ▼
       │              Write to graph (nodes, relationships)
       │
       └──► Chunk nodes + embeddings (for vector index later)`}
        </pre>
        <p className="mb-4">
          <strong>Chunk size</strong> matters: larger chunks give the LLM more
          context but can produce fewer, coarser entities; smaller chunks (e.g.
          500 characters) often yield more granular, useful graphs. Defining a
          <strong> schema</strong> (node labels, relationship types, and optionally
          patterns) constrains what the LLM extracts and makes the graph more
          consistent and queryable (e.g. &quot;Technology&quot;, &quot;Concept&quot;,
          &quot;RELATED_TO&quot;, &quot;PART_OF&quot;).
        </p>
        <p className="mb-4">
          You can combine <strong>structured data</strong> (e.g. CSV with
          lesson, module, course, URL) with the graph: link document/chunk nodes
          to metadata nodes so you can query things like &quot;which lessons
          mention technology X?&quot; or &quot;what concepts and technologies
          appear in this lesson?&quot;
        </p>
      </section>

      {/* Retrieval: vector, vector+Cypher, text-to-Cypher */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-400">
          Retrieval in practice
        </h2>
        <p className="mb-4">
          <strong>Vector retriever:</strong> Create a vector index on chunk
          embeddings (e.g. OpenAI, 1536 dimensions, cosine similarity). Turn the
          user question into an embedding and run a similarity search; return the
          top-k chunks as context for the LLM.
        </p>
        <p className="mb-4">
          <strong>Vector + Cypher retriever:</strong> Same vector search, but the
          retrieval query can also traverse the graph and return not only chunk
          text but also related entities (e.g. technologies, concepts, lesson
          URLs). That gives the LLM both passage content and graph-derived facts,
          improving answers and traceability.
        </p>
        <p className="mb-4">
          <strong>Text-to-Cypher retriever:</strong> The user question is
          converted by an LLM into a Cypher query; that query runs on the graph
          and the results are passed as context to the answer LLM. Best for
          precise, structured questions (e.g. &quot;How many technologies are
          in the graph?&quot;, &quot;How does Neo4j relate to other
          technologies?&quot;). For large or complex graphs, constraining
          text-to-Cypher to a subgraph or schema improves reliability.
        </p>
      </section>

      {/* Key takeaways */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-400">
          Key takeaways for industry use
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Context is king: supplying minimal, relevant context (via RAG/Graph
            RAG) reduces hallucination and improves LLM accuracy.
          </li>
          <li>
            Knowledge graphs give you structured, connected context; combining
            vector search with graph traversal (or text-to-Cypher) yields more
            concise and explainable retrieval than vector-only RAG.
          </li>
          <li>
            KG construction: chunk size and a clear schema (nodes, relationships,
            patterns) are levers for quality; iterate on a sample before scaling.
          </li>
          <li>
            Adding structured metadata (e.g. lesson, course, URL) to the graph
            enables richer queries and better retrieval (e.g. &quot;lessons
            covering X&quot;, &quot;concepts in lesson Y&quot;).
          </li>
          <li>
            Use vector + Cypher for semantic + relational context; use
            text-to-Cypher for precise, countable or relationship-focused
            questions. Both can feed the same RAG pipeline or agent.
          </li>
        </ul>
      </section>

      {/* Links */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-400">
          Links
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <a
              href="https://dev.neo4j.com/workshop-genai-notes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 underline"
            >
              Workshop notes
            </a>
          </li>
          <li>
            <a
              href="https://graphacademy.neo4j.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 underline"
            >
              Graph Academy
            </a>
          </li>
          <li>
            <a
              href="https://graphacademy.neo4j.com/courses/workshop-genai/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 underline"
            >
              Neo4j Generative AI Workshop course
            </a>
          </li>
          <li>
            <a
              href="https://github.com/neo4j/graphrag-python"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 underline"
            >
              Neo4j Graph RAG for Python
            </a>
          </li>
          <li>
            Microsoft Graph RAG research (search: &quot;Microsoft Research Paper
            Graph RAG&quot;).
          </li>
        </ul>
      </section>
    </div>
  );
}
