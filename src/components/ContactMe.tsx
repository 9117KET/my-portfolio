import { contacts } from "../utils/constants";

export default function ContactMe() {
  return (
    <div className="p-8 dark:text-gray-300">
      <div className="relative flex py-5 items-center">
        <div className="flex-grow border-t border-gray-400"></div>
        <span className="text-3xl font-semibold flex-shrink mx-4 text-gray-400">
          <span className="text-blue-800">{`>`}</span> Connect With Me:
        </span>
        <div className="flex-grow border-t border-gray-400"></div>
      </div>

      <p className="text-center mb-6 text-sm sm:text-base">
        I'm always open to discussing new projects, opportunities, or
        collaborations. Feel free to reach out through any of the platforms
        below.
      </p>

      <ul className="mt-4 flex space-x-4 text-lg dark:text-gray-300 flex-wrap justify-center sm:flex-nowrap">
        {contacts.map((contact) => (
          <li
            key={contact.id}
            className="inline-block hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-all duration-300 ease-in-out mx-2 sm:mx-1 p-2"
          >
            <span className="text-blue-800 mr-1">{">"}</span>
            <a
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 text-xs sm:text-sm transition-all duration-300"
            >
              {contact.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
