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
const LLMUnderstanding = lazy(() => import("../articles/LLMUnderstanding"));
const AIHumanDev = lazy(() => import("../articles/AIHumanDev"));
const CodeReadingSkills = lazy(() => import("../articles/CodeReadingSkills"));
const AIAndLearning = lazy(() => import("../articles/AIAndLearning"));
const RateProfessorLegal = lazy(() => import("../articles/RateProfessorLegal"));
const AWSBedrockRAG = lazy(() => import("../articles/AWSBedrockRAG"));

// Loading fallback for articles
const ArticleLoader = () => (
  <div className="flex items-center justify-center py-12">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
    <span className="ml-3 text-gray-600 dark:text-gray-400">
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
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl text-center flex-grow">{title}</h1>
        <ShareButton title={title} url={currentUrl} description={description} />
      </div>
      {renderContent()}
      <hr />
      <div className="flex justify-between items-center mt-4">
        <p className="text-lg italic">Published: {formatDate(date)}</p>
        <p className="text-base bg-blue-800 dark:text-zinc-800 text-white px-4 py-1 rounded-xl">
          {category}
        </p>
      </div>
    </div>
  );
}
