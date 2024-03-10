import React from "react";

interface ContainerProps {
  heading: string;
  text: string;
}

const Container: React.FC<ContainerProps> = ({ heading, text }) => {
  return (
    <div className="w-64 h-64 bg-white rounded-md shadow-md p-4 relative border border-yellow-500">
      <div className="absolute top-0 left-0 w-full h-12 bg-yellow-500"></div>
      <h2 className="text-lg font-bold mb-2 z-10 relative text-white">
        {heading}
      </h2>
      <p className="text-sm text-gray-700">{text}</p>
    </div>
  );
};

export default Container;
