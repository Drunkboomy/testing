import React from "react";

interface ContainerProps {
  heading: string;
  text: string;
}

const Container: React.FC<ContainerProps> = ({ heading, text }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-md shadow-md overflow-hidden">
      <div className="px-4 py-5 sm:p-6">
        <h2 className="text-lg font-bold mb-2">{heading}</h2>
        <p className="text-sm text-gray-700">{text}</p>
      </div>
    </div>
  );
};

export default Container;
