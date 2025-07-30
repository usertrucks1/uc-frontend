import React from 'react';

interface LoaderProps {
  message?: string;
}

const Loader: React.FC<LoaderProps> = ({ message }) => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white bg-opacity-0 z-50">
      <div className="h-10 w-10 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin" />
      {message && (
        <p className="mt-2 text-sm text-gray-700 text-center">{message}</p>
      )}
    </div>
  );
};

export default Loader;
