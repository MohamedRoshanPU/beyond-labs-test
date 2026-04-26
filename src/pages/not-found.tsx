import React from "react";

const NotFound: React.FC = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-fit h-fit p-8">
        <h1 className="text-4xl font-bold text-center mt-20">
          404 - Page Not Found
        </h1>
        <p className="text-center mt-4 text-gray-600">
          The page you are looking for does not exist.
        </p>
        <button
          className="block mx-auto mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => window.history.back()}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default NotFound;
