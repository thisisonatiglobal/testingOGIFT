import React from 'react';

const CardComponent = ({ title, description }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <div className="p-6">
        <div className="flex items-center justify-center w-16 h-16 bg-purple-500 text-white rounded-full mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-8 w-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </div>
        <h4 className="text-xl font-bold mb-2">{title}</h4>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default CardComponent;
