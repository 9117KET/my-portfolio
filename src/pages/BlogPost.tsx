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

interface BlogPostProps {
  title: string;
  date: string;
  content: string;
  category: string;
}

export default function BlogPost({
  title,
  date,
  content,
  category,
}: BlogPostProps) {
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
      default:
        return <p>No content found</p>;
    }
  };

  return (
    <div>
      <h1 className="text-4xl text-center mb-8">{title}</h1>
      {renderContent()}
      <hr />
      <p className="text-lg italic mt-4">Published: {formatDate(date)}</p>
      {/* Updated category background color to deep blue */}
      <p className="text-base bg-blue-800 dark:text-zinc-800 text-white w-fit px-4 py-1 rounded-xl mt-4">
        {category}
      </p>
    </div>
  );
}
