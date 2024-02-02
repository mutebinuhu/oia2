import React from 'react';

const SuccessAlert = ({ message }) => {
  return (
    <div className="bg-green-100 border-l-4  border-green-500 text-green-700 p-4 my-4 rounded-md shadow-md">
      <div className="flex">
        <div className="py-1">
          <svg
            className="fill-current h-6 w-6 mr-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM2 10a8 8 0 018-8V0a10 10 0 100 20v-2a8 8 0 01-8-8zm8-6a6 6 0 100 12 6 6 0 000-12z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div>
          <p className="font-bold text-center">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default SuccessAlert;
