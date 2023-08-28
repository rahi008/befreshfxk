import React from 'react';

interface QueryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QueryModal: React.FC<QueryModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center z-10 bg-black bg-opacity-50">
      <div className="bg-white w-96 rounded-lg p-6">
        <div className="flex justify-end">
          <button className="text-gray-600" onClick={onClose}>
            X
          </button>
        </div>
        <h2 className="text-xl font-bold mb-4">Send Us Query</h2>
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
          I want to 
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Buy
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Sell
            </button>
          </div>
          <div className="mb-2">
            <select className="border p-2 rounded-md w-full mb-2">
              {/* Options */}
            </select>
            <input
              type="text"
              placeholder="Amount"
              className="border p-2 rounded-md w-full"
            />
          </div>
          <div className="text-right text-gray-600">Apx: Bdt</div>
        </div>
        <div>
          <input type="text" placeholder="Name" className="border p-2 rounded-md w-full mb-2" />
          <input type="text" placeholder="Mobile" className="border p-2 rounded-md w-full mb-2" />
          <input type="text" placeholder="Email" className="border p-2 rounded-md w-full" />
        </div>
        <button className="bg-green-500 text-white px-4 py-2 rounded-md mt-4">
          Submit
        </button>
      </div>
    </div>
  );
};

export default QueryModal;
