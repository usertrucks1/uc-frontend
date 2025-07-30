import React from 'react';

interface PopupProps {
  header: string;
  message: string;
  cta:string
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ header, message, cta, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-lg font-semibold text-black-600 mb-2 text-left">{header}</h2>
        <p className="text-gray-700 mb-4 text-left">{message}</p>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded text-sm"
          >
            {cta}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
