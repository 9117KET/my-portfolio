import Beans from "../articles/Beans";
import AIAfrica from "../articles/AIAfrica";
import KETAcademyPodcast from "../articles/KETAcademyPodcast";
import MLBasics from "../articles/MLBasics";
import ReactPatterns from "../articles/ReactPatterns";
import TypeScriptTips from "../articles/TypeScriptTips";
import AIEthics from "../articles/AIEthics";
import PhilEthics from "../articles/PhilEthics";
import KETAcademyJourney from "../articles/KETAcademyJourney";
import { formatDate } from "../utils/Date";
import RateProfessorJourney from "../articles/RateProfessorJourney";
import LLMUnderstanding from "../articles/LLMUnderstanding";
import AIHumanDev from "../articles/AIHumanDev";
import ShareButton from "../components/ShareButton";
import { useLocation } from "react-router-dom";

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
  const currentUrl = window.location.origin + location.pathname;

  const renderContent = () => {
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
      case "LLMUnderstanding":
        return <LLMUnderstanding />;
      case "AIHumanDev":
        return <AIHumanDev />;
      default:
        return <p>No content found</p>;
    }
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
