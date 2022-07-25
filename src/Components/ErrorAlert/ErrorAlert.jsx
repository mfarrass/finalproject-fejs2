import React from "react";

const ErrorAlert = ({ children }) => {
  return (
    <div
      className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative my-10"
  
    >
      <strong className="font-bold">Ooops ! </strong>
      <span className="block sm:inline">{children}</span>
    </div>
  );
};

export default ErrorAlert;
