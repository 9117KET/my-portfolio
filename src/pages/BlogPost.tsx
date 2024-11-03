import Beans from "../articles/Beans";
import { formatDate } from "../utils/Date";

interface BlogPostProps {
  title: string;
  date: string;
  content: string;
  category: string;
}

// BlogPost functional component definition
export default function BlogPost({ title, date, content, category }: BlogPostProps) {
  // Mapping content keys to React components
  const record: Record<string, React.ReactNode> = {
    "Beans": <Beans />
  };

  // Component render
  return (
    <div>
      <h1 className="text-4xl text-center mb-8">{title}</h1> 

      {record[content] || <p>No content found</p>} 
      <hr />
      <p className="text-lg italic mt-4">Published: {formatDate(date)}</p> 
      {/* Updated category background color to deep blue */}
      <p className="text-base bg-blue-800 dark:text-zinc-800 text-white w-fit px-4 py-1 rounded-xl mt-4">{category}</p> 
    </div>
  );
}