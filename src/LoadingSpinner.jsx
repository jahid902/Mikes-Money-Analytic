import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="relative">
        <div className="h-16 w-16 rounded-full  border-l-4 border-b-4 border-t-4 border-sky-600 transform-gpu rotate-270"></div>
        <div className="absolute inset-0 flex items-center justify-center text-black font-bold text-xs">75%</div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
