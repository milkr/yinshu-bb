import React from 'react';

interface Props {
  content: string;
}

const InfoTooltip: React.FC<Props> = ({ content }) => {
  return (
    <div className="group relative inline-flex items-center ml-2 align-middle">
      <div className="cursor-help text-gray-500 hover:text-indigo-400 transition-colors">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      </div>
      {/* Tooltip Content */}
      <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 p-3 text-xs text-gray-200 bg-gray-800 rounded-lg border border-gray-700 shadow-xl z-50 pointer-events-none">
        {content}
        {/* Arrow */}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1 border-4 border-transparent border-t-gray-700"></div>
      </div>
    </div>
  );
};

export default InfoTooltip;