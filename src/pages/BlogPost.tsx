import { Suspense, lazy } from "react";
import { formatDate } from "../utils/Date";
import ShareButton from "../components/ShareButton";
import { useLocation } from "react-router-dom";

// Lazy load article components for better performance
const Beans = lazy(() => import("../articles/Beans"));
const AIAfrica = lazy(() => import("../articles/AIAfrica"));
const KETAcademyPodcast = lazy(() => import("../articles/KETAcademyPodcast"));
const MLBasics = lazy(() => import("../articles/MLBasics"));
const ReactPatterns = lazy(() => import("../articles/ReactPatterns"));
const TypeScriptTips = lazy(() => import("../articles/TypeScriptTips"));
const AIEthics = lazy(() => import("../articles/AIEthics"));
const PhilEthics = lazy(() => import("../articles/PhilEthics"));
const KETAcademyJourney = lazy(() => import("../articles/KETAcademyJourney"));
const RateProfessorJourney = lazy(
  () => import("../articles/RateProfessorJourney")
);
const DeepblockJourney = lazy(
  () => import("../articles/DeepblockJourney")
);
const LLMUnderstanding = lazy(() => import("../articles/LLMUnderstanding"));
const AIHumanDev = lazy(() => import("../articles/AIHumanDev"));
const CodeReadingSkills = lazy(() => import("../articles/CodeReadingSkills"));
const AIAndLearning = lazy(() => import("../articles/AIAndLearning"));
const RateProfessorLegal = lazy(() => import("../articles/RateProfessorLegal"));
const AWSBedrockRAG = lazy(() => import("../articles/AWSBedrockRAG"));
const IoTRecommendationFramework = lazy(
  () => import("../articles/IoTRecommendationFramework")
);
const Neo4jGenAIWorkshop = lazy(
  () => import("../articles/Neo4jGenAIWorkshop")
);

// Loading fallback for articles
const ArticleLoader = () => (
  <div className="flex items-center justify-center py-12">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
    <span className="ml-3 text-on-surface-variant">
      Loading article...
    </span>
  </div>
);

interface BlogPostProps {
  title: string;
  date: string;
  content: string;
  category: string;
  description?: string;
}

export default function BlogPost({
  title,
  date,
  content,
  category,
  description = "",
}: BlogPostProps) {
  const location = useLocation();
  const currentUrl = new URL(
    location.pathname,
    window.location.origin
  ).toString();

  const renderContent = () => {
    const ArticleComponent = () => {
      switch (content) {
        case "Beans":
          return <Beans />;
        case "AIAfrica":
          return <AIAfrica />;
        case "KETAcademyPodcast":
          return <KETAcademyPodcast />;
        case "MLBasics":
          return <MLBasics />;
        case "ReactPatterns":
          return <ReactPatterns />;
        case "TypeScriptTips":
          return <TypeScriptTips />;
        case "AIEthics":
          return <AIEthics />;
        case "PhilEthics":
          return <PhilEthics />;
        case "KETAcademyJourney":
          return <KETAcademyJourney />;
        case "RateProfessorJourney":
          return <RateProfessorJourney />;
        case "DeepblockJourney":
          return <DeepblockJourney />;
        case "RateProfessorLegal":
          return <RateProfessorLegal />;
        case "LLMUnderstanding":
          return <LLMUnderstanding />;
        case "AIHumanDev":
          return <AIHumanDev />;
        case "CodeReadingSkills":
          return <CodeReadingSkills />;
        case "AIAndLearning":
          return <AIAndLearning />;
        case "AWSBedrockRAG":
          return <AWSBedrockRAG />;
        case "IoTRecommendationFramework":
          return <IoTRecommendationFramework />;
        case "Neo4jGenAIWorkshop":
          return <Neo4jGenAIWorkshop />;
        default:
          return <p>No content found</p>;
      }
    };

    return (
      <Suspense fallback={<ArticleLoader />}>
        <ArticleComponent />
      </Suspense>
    );
  };

  return (
    <article className="max-w-3xl mx-auto">
      <header className="mb-10">
        <div className="flex items-start justify-between gap-6">
          <div className="min-w-0">
            <div className="flex items-center gap-4 text-outline font-label text-[11px] uppercase tracking-[0.2em] mb-4">
              <span>{formatDate(date)}</span>
              <span className="w-1 h-1 rounded-full bg-tertiary"></span>
              <span className="text-tertiary">{category}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter leading-[1.1] text-on-surface">
              {title}
            </h1>
            {description ? (
              <p className="text-xl text-on-surface-variant font-light leading-relaxed mt-5">
                {description}
              </p>
            ) : null}
          </div>

          <div className="shrink-0 pt-2">
            <ShareButton title={title} url={currentUrl} description={description} />
          </div>
        </div>
      </header>
      {renderContent()}
      <div className="mt-16 pt-10 border-t border-outline-variant/30 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <p className="text-sm text-on-surface-variant font-label tracking-widest uppercase">
          Published: {formatDate(date)}
        </p>
        <span className="inline-flex w-fit px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-primary/10 text-primary border border-primary/20">
          {category}
        </span>
      </div>
    </article>
  );
}
