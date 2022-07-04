import React from "react";

const ErrorAlert = ({ children }) => {
  return (
    <div
      class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative my-10"
      role="alert"
    >
      <strong class="font-bold">Ooops ! </strong>
      <span class="block sm:inline">{children}</span>
    </div>
  );
};

export default ErrorAlert;
