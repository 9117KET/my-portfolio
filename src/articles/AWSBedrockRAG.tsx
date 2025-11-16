export default function AWSBedrockRAG() {
  return (
    <div className="font-mono mb-4 max-w-none">
      {/* Introduction */}
      <section className="mb-8">
        <p className="mb-6">
          In today's data-driven world, organizations struggle with information
          accessibility. Employees spend countless hours searching through
          thousands of documents, PDFs, and knowledge bases to find specific
          information. This challenge becomes even more pronounced during
          onboarding, where new team members need quick access to company
          knowledge.
        </p>
        <p className="mb-6">
          As part of my AWS Nanodegree program, I developed a production-ready{" "}
          <strong>Document Query Platform</strong> that leverages{" "}
          <strong>Retrieval-Augmented Generation (RAG)</strong> and{" "}
          <strong>Amazon Bedrock</strong> to transform how organizations access
          and interact with their internal documentation. This project
          demonstrates the power of combining AWS managed services with modern
          AI capabilities to solve real-world business challenges.
        </p>
      </section>

      {/* The Problem */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-400">
          The Problem
        </h2>
        <p className="mb-4">
          Traditional document management systems present several challenges:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>
            <strong>Information Overload:</strong> Employees must navigate
            through thousands of documents to find relevant information
          </li>
          <li>
            <strong>Time Consumption:</strong> Manual searching through PDFs and
            documentation is time-intensive
          </li>
          <li>
            <strong>Knowledge Silos:</strong> Information is scattered across
            different systems and formats
          </li>
          <li>
            <strong>Onboarding Friction:</strong> New employees struggle to find
            answers to common questions
          </li>
          <li>
            <strong>Inconsistent Access:</strong> Different teams may have
            different levels of access to information
          </li>
        </ul>
        <p>
          These challenges result in decreased productivity, slower
          decision-making, and increased training time for new team members.
        </p>
      </section>

      {/* The Solution */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-400">
          The Solution: RAG-Powered Document Query Platform
        </h2>
        <p className="mb-4">
          I built a comprehensive solution that uses{" "}
          <strong>Retrieval-Augmented Generation (RAG)</strong> to enable
          natural language queries over company documents. The system allows
          users to ask questions in plain English and receive accurate,
          context-aware answers based on the organization's internal
          documentation.
        </p>

        <h3 className="text-xl font-semibold mb-2">How RAG Works</h3>
        <p className="mb-4">RAG combines two powerful techniques:</p>
        <ol className="list-decimal pl-6 space-y-2 mb-4">
          <li>
            <strong>Retrieval:</strong> The system searches through document
            embeddings to find the most relevant information
          </li>
          <li>
            <strong>Augmented Generation:</strong> A Large Language Model (LLM)
            generates responses using the retrieved context
          </li>
        </ol>
        <p className="mb-4">This approach ensures that responses are:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Accurate:</strong> Based on actual company documents
          </li>
          <li>
            <strong>Contextual:</strong> Relevant to the specific query
          </li>
          <li>
            <strong>Traceable:</strong> Can reference source documents
          </li>
          <li>
            <strong>Up-to-date:</strong> Reflects the latest information in the
            knowledge base
          </li>
        </ul>
      </section>

      {/* Architecture Overview */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-400">
          Architecture Overview
        </h2>
        <p className="mb-4">
          The solution follows a modular, cloud-native architecture built
          entirely on AWS:
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4 font-mono text-sm">
          <div className="mb-2">
            ┌─────────────────────────────────────────────────────────────┐
          </div>
          <div className="mb-2">│ User Interface Layer │</div>
          <div className="mb-2">│ Streamlit Chat Application │</div>
          <div className="mb-2">
            └───────────────────────┬─────────────────────────────────────┘
          </div>
          <div className="mb-2">│</div>
          <div className="mb-2">▼</div>
          <div className="mb-2">
            ┌─────────────────────────────────────────────────────────────┐
          </div>
          <div className="mb-2">│ Application Layer │</div>
          <div className="mb-2">
            │ • Prompt Validation (Category Filtering) │
          </div>
          <div className="mb-2">│ • Knowledge Base Query Interface │</div>
          <div className="mb-2">
            │ • Response Generation with Claude Models │
          </div>
          <div className="mb-2">
            └───────────────────────┬─────────────────────────────────────┘
          </div>
          <div className="mb-2">│</div>
          <div className="mb-2">▼</div>
          <div className="mb-2">
            ┌─────────────────────────────────────────────────────────────┐
          </div>
          <div className="mb-2">│ AI Services Layer │</div>
          <div className="mb-2">│ • Amazon Bedrock Knowledge Base │</div>
          <div className="mb-2">
            │ • Amazon Bedrock Titan Embeddings (1536 dimensions) │
          </div>
          <div className="mb-2">│ • Anthropic Claude 3 (Haiku & Sonnet) │</div>
          <div className="mb-2">
            └───────────────────────┬─────────────────────────────────────┘
          </div>
          <div className="mb-2">┌───────────────┴───────────────┐</div>
          <div className="mb-2">│ │</div>
          <div className="mb-2">▼ ▼</div>
          <div className="mb-2">┌──────────────────┐ ┌──────────────────┐</div>
          <div className="mb-2">│ Data Storage │ │ Vector Database │</div>
          <div className="mb-2">│ Amazon S3 │ │ Aurora Serverless│</div>
          <div className="mb-2">│ (PDF Documents) │ │ PostgreSQL │</div>
          <div className="mb-2">│ │ │ + pgvector │</div>
          <div className="mb-2">└──────────────────┘ └──────────────────┘</div>
        </div>

        <h3 className="text-xl font-semibold mb-2">Data Flow</h3>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            <strong>Document Ingestion:</strong> PDF files are uploaded to an S3
            bucket
          </li>
          <li>
            <strong>Automatic Processing:</strong> Bedrock Knowledge Base
            automatically syncs and processes documents
          </li>
          <li>
            <strong>Embedding Generation:</strong> Documents are chunked and
            converted to 1536-dimensional vectors using Titan Embeddings
          </li>
          <li>
            <strong>Vector Storage:</strong> Embeddings are stored in Aurora
            PostgreSQL with HNSW indexes for fast similarity search
          </li>
          <li>
            <strong>Query Processing:</strong> User queries trigger vector
            similarity search to retrieve top 3 most relevant document chunks
          </li>
          <li>
            <strong>Response Generation:</strong> Claude models generate
            contextual answers using retrieved information
          </li>
        </ol>
      </section>

      {/* Technology Stack */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-400">
          Technology Stack
        </h2>

        <h3 className="text-xl font-semibold mb-2">Infrastructure as Code</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>
            <strong>Terraform:</strong> Automated infrastructure deployment with
            modular architecture
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Stack 1: VPC, Aurora Serverless, S3, Secrets Manager</li>
              <li>Stack 2: Bedrock Knowledge Base, IAM roles and policies</li>
            </ul>
          </li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">
          Data Storage & Processing
        </h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>
            <strong>Amazon Aurora Serverless PostgreSQL:</strong> Serverless
            database that automatically scales
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>
                <strong>pgvector Extension:</strong> Enables vector similarity
                search
              </li>
              <li>
                <strong>HNSW Indexes:</strong> High-performance approximate
                nearest neighbor search
              </li>
              <li>
                <strong>Private Subnets:</strong> Database deployed in isolated
                network for security
              </li>
            </ul>
          </li>
          <li>
            <strong>Amazon S3:</strong> Document storage
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Versioning enabled for document history</li>
              <li>Server-side encryption (AES-256)</li>
              <li>Private access with IAM-based permissions</li>
            </ul>
          </li>
          <li>
            <strong>AWS Secrets Manager:</strong> Secure credential management
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Database credentials stored securely</li>
              <li>Automatic rotation support</li>
            </ul>
          </li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">
          AI & Machine Learning Services
        </h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>
            <strong>Amazon Bedrock Knowledge Base:</strong> Intelligent document
            ingestion and management
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Automatic document chunking</li>
              <li>Metadata extraction</li>
              <li>Sync management</li>
            </ul>
          </li>
          <li>
            <strong>Amazon Bedrock Titan Embeddings:</strong> Vector embedding
            generation
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>1536-dimensional vectors</li>
              <li>Optimized for semantic search</li>
              <li>Supports multiple languages</li>
            </ul>
          </li>
          <li>
            <strong>Anthropic Claude 3:</strong> Large Language Models
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>
                <strong>Claude 3 Haiku:</strong> Fast, cost-effective for simple
                queries
              </li>
              <li>
                <strong>Claude 3 Sonnet:</strong> Balanced performance for
                complex queries
              </li>
              <li>Adjustable temperature and top_p parameters</li>
            </ul>
          </li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">Application Layer</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>
            <strong>Streamlit:</strong> Interactive web application framework
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Real-time chat interface</li>
              <li>Model selection and parameter tuning</li>
              <li>Session state management</li>
            </ul>
          </li>
          <li>
            <strong>Python 3.10+:</strong> Backend development
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>
                <strong>Boto3:</strong> AWS SDK for Python
              </li>
              <li>
                <strong>JSON:</strong> API response handling
              </li>
            </ul>
          </li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">Networking & Security</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Amazon VPC:</strong> Isolated network environment
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Public and private subnets</li>
              <li>NAT Gateway for outbound internet access</li>
              <li>Security groups for access control</li>
            </ul>
          </li>
          <li>
            <strong>IAM Roles & Policies:</strong> Least privilege access
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Service-specific roles</li>
              <li>Resource-based policies</li>
              <li>Cross-service permissions</li>
            </ul>
          </li>
        </ul>
      </section>

      {/* Implementation Details */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-400">
          Implementation Details
        </h2>

        <h3 className="text-xl font-semibold mb-2">
          Infrastructure Deployment
        </h3>
        <p className="mb-4">
          The infrastructure is deployed using Terraform in two stages:
        </p>

        <h4 className="text-lg font-semibold mb-2">
          Stack 1: Core Infrastructure
        </h4>
        <p className="mb-4">
          The first stack includes the foundational AWS resources:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>
            <strong>VPC:</strong> Custom virtual private cloud with public and
            private subnets across multiple availability zones
          </li>
          <li>
            <strong>Aurora Serverless PostgreSQL:</strong> Serverless database
            cluster with automatic scaling capabilities
          </li>
          <li>
            <strong>S3 Bucket:</strong> Secure document storage with versioning
            and encryption
          </li>
          <li>
            <strong>Secrets Manager:</strong> Centralized credential management
            for database access
          </li>
        </ul>

        <h4 className="text-lg font-semibold mb-2">
          Stack 2: Bedrock Knowledge Base
        </h4>
        <p className="mb-4">The second stack configures the AI services:</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>
            <strong>Vector Knowledge Base:</strong> Configured with Titan
            Embeddings model for generating 1536-dimensional vectors
          </li>
          <li>
            <strong>RDS Storage Configuration:</strong> Integration with Aurora
            PostgreSQL for vector storage
          </li>
          <li>
            <strong>Field Mapping:</strong> Proper mapping of primary keys,
            vectors, text chunks, and metadata
          </li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">Database Setup</h3>
        <p className="mb-4">
          The PostgreSQL database is configured with the pgvector extension for
          vector operations. Key components include:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>
            <strong>Vector Extension:</strong> Enables vector data type and
            similarity operations
          </li>
          <li>
            <strong>Dedicated Schema:</strong> Isolated schema for Bedrock
            integration
          </li>
          <li>
            <strong>HNSW Index:</strong> High-performance index for fast vector
            similarity search using cosine similarity
          </li>
          <li>
            <strong>Full-Text Search Index:</strong> GIN index for text-based
            search capabilities
          </li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">Application Logic</h3>

        <h4 className="text-lg font-semibold mb-2">Prompt Validation</h4>
        <p className="mb-4">
          The system includes intelligent prompt validation to ensure queries
          are appropriate and relevant. It uses Claude to categorize queries
          into five categories:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>
            <strong>Category A:</strong> Blocks queries about LLM internals or
            architecture
          </li>
          <li>
            <strong>Category B:</strong> Filters profanity and toxic content
          </li>
          <li>
            <strong>Category C:</strong> Restricts to domain-specific topics
            (heavy machinery)
          </li>
          <li>
            <strong>Category D:</strong> Prevents meta-queries about system
            instructions
          </li>
          <li>
            <strong>Category E:</strong> Allows only relevant domain queries
          </li>
        </ul>

        <h4 className="text-lg font-semibold mb-2">Knowledge Base Query</h4>
        <p className="mb-4">
          The system retrieves relevant document chunks using vector similarity
          search. It returns the top 3 most relevant chunks based on semantic
          similarity to the user's query.
        </p>

        <h4 className="text-lg font-semibold mb-2">Response Generation</h4>
        <p className="mb-4">
          Context-aware responses are generated using Claude models. The system
          combines retrieved context with the user query to produce accurate,
          relevant answers. Users can adjust temperature and top_p parameters to
          control response characteristics.
        </p>
      </section>

      {/* Key Features */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-400">
          Key Features
        </h2>

        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">
              1. Intelligent Prompt Validation
            </h3>
            <p className="mb-2">
              The system uses AI-powered classification to filter queries,
              ensuring appropriate usage and maintaining focus on the intended
              domain. This prevents misuse and keeps responses relevant to the
              organization's knowledge base.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">2. Semantic Search</h3>
            <p className="mb-2">
              Vector similarity search enables finding relevant information even
              when query wording differs from document text. This allows users
              to ask questions in natural language and still receive accurate
              results based on semantic meaning rather than exact keyword
              matches.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              3. Multi-Model Support
            </h3>
            <p className="mb-2">
              Users can choose between different Claude models based on their
              needs:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>Claude 3 Haiku:</strong> Fast, cost-effective for simple
                queries
              </li>
              <li>
                <strong>Claude 3 Sonnet:</strong> Better performance for
                complex, nuanced queries
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              4. Adjustable Response Parameters
            </h3>
            <p className="mb-2">Fine-tune response characteristics:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>Temperature (0.0-1.0):</strong> Controls creativity and
                randomness
                <ul className="list-disc pl-6 mt-1">
                  <li>
                    Lower values (0.3-0.5): More factual, consistent responses
                  </li>
                  <li>
                    Higher values (0.7-1.0): More creative, varied responses
                  </li>
                </ul>
              </li>
              <li>
                <strong>Top_P (0.0-1.0):</strong> Controls diversity through
                probability threshold
                <ul className="list-disc pl-6 mt-1">
                  <li>Lower values (0.3-0.5): More focused, precise answers</li>
                  <li>Higher values (0.7-1.0): More diverse responses</li>
                </ul>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              5. Real-Time Chat Interface
            </h3>
            <p className="mb-2">
              Streamlit provides an intuitive chat interface with conversation
              history, model selection, parameter adjustment, and real-time
              responses. This makes the complex AI system accessible to
              non-technical users.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              6. Secure Architecture
            </h3>
            <p className="mb-2">Multi-layer security implementation:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>Private Subnets:</strong> Database isolated from public
                internet
              </li>
              <li>
                <strong>IAM Roles:</strong> Least privilege access principles
              </li>
              <li>
                <strong>Secrets Manager:</strong> Secure credential storage
              </li>
              <li>
                <strong>Encryption:</strong> Data encrypted at rest and in
                transit
              </li>
              <li>
                <strong>VPC:</strong> Network isolation and security groups
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-400">
          Challenges & Solutions
        </h2>

        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Challenge 1: Vector Search Performance
            </h3>
            <p className="mb-2">
              <strong>Problem:</strong> Searching through large document
              collections requires efficient similarity search algorithms.
            </p>
            <p>
              <strong>Solution:</strong> Implemented HNSW (Hierarchical
              Navigable Small World) indexes in PostgreSQL. HNSW provides
              sub-linear search time complexity, high recall rates, efficient
              memory usage, and support for cosine similarity operations.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              Challenge 2: Infrastructure Complexity
            </h3>
            <p className="mb-2">
              <strong>Problem:</strong> Managing multiple AWS services with
              complex dependencies and configurations.
            </p>
            <p>
              <strong>Solution:</strong> Used Terraform with modular
              architecture - separated infrastructure into logical stacks,
              created reusable modules, automated dependency management, and
              version-controlled infrastructure as code.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              Challenge 3: Credential Management
            </h3>
            <p className="mb-2">
              <strong>Problem:</strong> Securely managing database credentials
              across services.
            </p>
            <p>
              <strong>Solution:</strong> Integrated AWS Secrets Manager for
              centralized credential storage, automatic rotation support,
              IAM-based access control, and eliminated hardcoded credentials in
              code.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              Challenge 4: Knowledge Base Sync
            </h3>
            <p className="mb-2">
              <strong>Problem:</strong> Ensuring documents are properly
              processed and embeddings are created correctly.
            </p>
            <p>
              <strong>Solution:</strong> Implemented comprehensive monitoring
              with sync status tracking, database verification queries, error
              handling and retry logic, and validation of embedding counts.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              Challenge 5: Cost Optimization
            </h3>
            <p className="mb-2">
              <strong>Problem:</strong> Managing costs while maintaining
              performance.
            </p>
            <p>
              <strong>Solution:</strong> Leveraged serverless architecture with
              Aurora Serverless auto-scaling based on demand, pay-per-use
              pricing model, automatic pause during inactivity, and efficient
              vector storage with compression.
            </p>
          </div>
        </div>
      </section>

      {/* Results & Outcomes */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-400">
          Results & Outcomes
        </h2>

        <h3 className="text-xl font-semibold mb-2">Technical Achievements</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>
            ✅ <strong>Scalable Architecture:</strong> Serverless design handles
            varying workloads automatically
          </li>
          <li>
            ✅ <strong>High Performance:</strong> Vector similarity search
            returns results in milliseconds
          </li>
          <li>
            ✅ <strong>Accurate Responses:</strong> RAG approach ensures answers
            are based on actual documents
          </li>
          <li>
            ✅ <strong>Secure Implementation:</strong> Multi-layer security with
            VPC, IAM, and encryption
          </li>
          <li>
            ✅ <strong>Production-Ready:</strong> Infrastructure as Code enables
            reproducible deployments
          </li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">Business Value</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>
            <strong>Time Savings:</strong> Employees can find information in
            seconds instead of hours
          </li>
          <li>
            <strong>Improved Onboarding:</strong> New team members get instant
            answers to common questions
          </li>
          <li>
            <strong>Better Collaboration:</strong> Centralized knowledge base
            accessible to all teams
          </li>
          <li>
            <strong>Cost Efficiency:</strong> Serverless architecture reduces
            infrastructure costs
          </li>
          <li>
            <strong>Scalability:</strong> System automatically scales with
            organizational growth
          </li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">Learning Outcomes</h3>
        <p className="mb-2">This project provided hands-on experience with:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>RAG Architecture:</strong> Understanding retrieval-augmented
            generation patterns
          </li>
          <li>
            <strong>Vector Databases:</strong> Working with embeddings and
            similarity search
          </li>
          <li>
            <strong>AWS Bedrock:</strong> Integrating managed AI services
          </li>
          <li>
            <strong>Infrastructure as Code:</strong> Terraform best practices
            and modular design
          </li>
          <li>
            <strong>Cloud Security:</strong> Implementing secure, compliant
            architectures
          </li>
          <li>
            <strong>Full-Stack Development:</strong> Building end-to-end AI
            applications
          </li>
        </ul>
      </section>

      {/* Future Improvements */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-400">
          Future Improvements
        </h2>

        <h3 className="text-xl font-semibold mb-2">Short-Term Enhancements</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>
            <strong>Multi-Format Support:</strong> Extend beyond PDFs to support
            Word, Excel, and other formats
          </li>
          <li>
            <strong>Conversation History:</strong> Store and retrieve previous
            conversations
          </li>
          <li>
            <strong>Source Citation:</strong> Display source documents for each
            answer
          </li>
          <li>
            <strong>User Authentication:</strong> Add authentication and
            authorization
          </li>
          <li>
            <strong>Analytics Dashboard:</strong> Track query patterns and
            system usage
          </li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">Long-Term Vision</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Multi-Language Support:</strong> Process documents in
            multiple languages
          </li>
          <li>
            <strong>Advanced Filtering:</strong> Filter by document type, date,
            department, etc.
          </li>
          <li>
            <strong>Custom Embeddings:</strong> Fine-tune embedding models for
            domain-specific terminology
          </li>
          <li>
            <strong>Real-Time Updates:</strong> Automatic re-indexing when
            documents are updated
          </li>
          <li>
            <strong>API Integration:</strong> RESTful API for integration with
            other systems
          </li>
          <li>
            <strong>Mobile Application:</strong> Native mobile app for on-the-go
            access
          </li>
        </ul>
      </section>

      {/* Technical Highlights */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-400">
          Technical Highlights
        </h2>

        <h3 className="text-xl font-semibold mb-2">
          Vector Search Optimization
        </h3>
        <p className="mb-4">
          The system uses cosine similarity for vector search, which is ideal
          for semantic similarity. The HNSW index enables fast approximate
          nearest neighbor search, allowing the system to find semantically
          similar content even when exact keyword matches don't exist.
        </p>

        <h3 className="text-xl font-semibold mb-2">
          Modular Terraform Architecture
        </h3>
        <p className="mb-4">
          The infrastructure is organized into reusable modules, enabling code
          reusability, easier maintenance, consistent deployments, and better
          team collaboration. This modular approach separates concerns and makes
          the infrastructure more manageable.
        </p>

        <h3 className="text-xl font-semibold mb-2">
          Error Handling & Resilience
        </h3>
        <p className="mb-4">
          The application includes comprehensive error handling to gracefully
          manage network issues, service unavailability, invalid inputs, and
          rate limiting. This ensures the system remains stable and provides a
          good user experience even when errors occur.
        </p>
      </section>

      {/* Conclusion */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-400">
          Conclusion
        </h2>
        <p className="mb-4">
          This project demonstrates the power of combining AWS managed services
          with modern AI capabilities to solve real-world business challenges.
          By leveraging RAG architecture, vector databases, and large language
          models, I've built a production-ready solution that transforms how
          organizations access and interact with their internal documentation.
        </p>
        <p className="mb-4">
          The system's serverless architecture ensures scalability and
          cost-efficiency, while its modular design enables easy maintenance and
          extension. The implementation follows AWS best practices for security,
          reliability, and performance.
        </p>

        <h3 className="text-xl font-semibold mb-2">Key Takeaways</h3>
        <ol className="list-decimal pl-6 space-y-2 mb-4">
          <li>
            <strong>RAG is Powerful:</strong> Combining retrieval with
            generation produces accurate, context-aware responses
          </li>
          <li>
            <strong>Serverless Scales:</strong> Aurora Serverless and managed
            services handle varying workloads automatically
          </li>
          <li>
            <strong>Infrastructure as Code:</strong> Terraform enables
            reproducible, maintainable deployments
          </li>
          <li>
            <strong>Security First:</strong> Multi-layer security is essential
            for enterprise applications
          </li>
          <li>
            <strong>User Experience Matters:</strong> Intuitive interfaces make
            complex AI systems accessible
          </li>
        </ol>
        <p>
          This project represents a complete, end-to-end implementation of a
          modern AI application, from infrastructure deployment to user
          interface, demonstrating proficiency in cloud architecture, AI/ML
          integration, and full-stack development.
        </p>
      </section>

      {/* Project Details */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-400">
          Project Details
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Technologies Used:</strong> AWS Bedrock, Aurora Serverless
            PostgreSQL, Terraform, Python, Streamlit, pgvector, S3, VPC, IAM,
            Secrets Manager
          </li>
          <li>
            <strong>Project Duration:</strong> 2 months
          </li>
          <li>
            <strong>Status:</strong> Production-ready, deployed and tested
          </li>
        </ul>
        <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
          This project was completed as part of the AWS Nanodegree program,
          demonstrating practical application of cloud computing, AI/ML, and
          software engineering principles.
        </p>
      </section>
    </div>
  );
}
