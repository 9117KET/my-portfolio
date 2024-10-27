import React from 'react';

interface MiscItemsProps {
    items: {
        title: string,
        description: string,
        date: string
    }[];
}

const MiscItems = ({ items }: MiscItemsProps) => {
    return (
        <ul className="list-disc pl-5 space-y-2">
            {items.map((item) => (
                <li key={`${item.title}-${item.date}`} className="text-sm sm:text-lg md:text-xl lg:text-2xl hover:text-blue-700 cursor-pointer">
                    {item.title} - {item.description} ({item.date})
                </li>
            ))}
        </ul>
    );
};

export default MiscItems;
