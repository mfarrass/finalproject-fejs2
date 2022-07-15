import React from "react";
import Card from "../../Components/Card/Card";

const SearchPage = () => {
  return (
    <div>
      SearchPage
      <div className="container mt-20 max-w-screen mx-auto">
        <div className="mx-auto text-center my-8">
          <p className="text-xl md:text-3xl font-bold mx-5 mb-4">
            Hasil Pencarian
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mx-3 md:mx-3">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
