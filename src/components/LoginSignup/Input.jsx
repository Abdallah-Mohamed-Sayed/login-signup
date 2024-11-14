import React from "react";

const Input = ({ src, alt, type, children }) => {
  return (
    <div className="input flex items-center border-b border-gray-300 py-2 transition duration-500 ease-in-out transform hover:scale-105">
      <img src={src} alt={alt} className="w-4 h-4 mr-2" />
      <input
        type={type}
        placeholder={children}
        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none transition duration-500 ease-in-out transform hover:scale-105"
      />
    </div>
  );
};

export default Input;
