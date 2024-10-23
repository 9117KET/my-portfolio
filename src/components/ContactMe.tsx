import { contacts } from "../utils/constants";

export default function ContactMe() {
  return (
    <div className="p-8 dark:text-gray-300">
        <div className="relative flex py-5 items-center">
        <div className="flex-grow border-t border-gray-400"></div>
        <span className="text-3xl font-semibold flex-shrink mx-4 text-gray-400"><span className="text-blue-800">{`>`}</span> Contact Me:</span>
        <div className="flex-grow border-t border-gray-400"></div>
        </div>

        <ul className="mt-4 flex space-x-4 text-lg dark:text-gray-300 flex-wrap justify-center sm:flex-nowrap">
        {
            contacts.map((contact) => (
            <li key={contact.id} className="inline-block hover:bg-gray-200 rounded-md transition duration-300 ease-in-out mx-2 sm:mx-1">
                <span className="text-blue-800">{'>'}</span>
                <a href={contact.link} target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 text-xs sm:text-sm">{contact.name}</a>
            </li>
            ))
        }
        </ul>
    </div>
  )
}
