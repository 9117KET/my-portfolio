import Beans from "../articles/Beans";
import AIAfrica from "../articles/AIAfrica";
import KETAcademyPodcast from "../articles/KETAcademyPodcast";
import MLBasics from "../articles/MLBasics";
import ReactPatterns from "../articles/ReactPatterns";
import TypeScriptTips from "../articles/TypeScriptTips";
import AIEthics from "../articles/AIEthics";
import PhilEthics from "../articles/PhilEthics";
import { formatDate } from "../utils/Date";

interface BlogPostProps {
  title: string;
  date: string;
  content: string;
  category: string;
}

// BlogPost functional component definition
export default function BlogPost({
  title,
  date,
  content,
  category,
}: BlogPostProps) {
  // Mapping content keys to React components
  const record: Record<string, React.ReactNode> = {
    Beans: <Beans />,
    "The fields of Artificial Intelligence (AI), Big Data, and the Internet of Things (IoT) have been transforming industries globally, and Africa is no different. This post explores the historical timeline of AI, IoT, and Big Data over the last 6 decades.":
      <AIAfrica />,
    "Episode 2: The story behind KET Academy and its mission to provide accessible education in Africa.":
      <KETAcademyPodcast />,
    MLBasics: <MLBasics />,
    ReactPatterns: <ReactPatterns />,
    TypeScriptTips: <TypeScriptTips />,
    AIEthics: <AIEthics />,
    PhilEthics: <PhilEthics />,
  };

  // Component render
  return (
    <div>
      <h1 className="text-4xl text-center mb-8">{title}</h1>

      {record[content] || <p>No content found</p>}
      <hr />
      <p className="text-lg italic mt-4">Published: {formatDate(date)}</p>
      {/* Updated category background color to deep blue */}
      <p className="text-base bg-blue-800 dark:text-zinc-800 text-white w-fit px-4 py-1 rounded-xl mt-4">
        {category}
      </p>
    </div>
  );
}
