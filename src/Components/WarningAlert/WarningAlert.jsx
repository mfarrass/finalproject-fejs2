import React from "react";

const WarningAlert = ({ children }) => {
  return (
    <div
      data-testid="swiper"
      className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded relative my-10 flex justify-center"
      role="alert"
    >
      {/* <strong className="font-bold">Ooops ! </strong> */}
      <span className="block sm:inline text-center">{children}</span>
    </div>
  );
};

export default WarningAlert;
