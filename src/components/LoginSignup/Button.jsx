import React from "react";

const Button = ({ children, light, ...props }) => {
  return (
    <button
      {...props}
      className={`${
        light
          ? "bg-blue-200 w-28 hover:bg-blue-300"
          : "bg-blue-500 w-28 hover:bg-blue-700"
      }  duration-300 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline`}
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;
