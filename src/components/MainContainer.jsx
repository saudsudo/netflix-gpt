import React from "react";

const MainContainer = ({ title, overview }) => {
  return (
    <div>
      <div className="relative w-10/12 mt-40 bg-yellow-300">
        Movie Trailer
        <div className=" absolute m-20 w-5/12 bg-gray-400 text-white font-semibold rounded-lg mt-60">
          <h1 className="text-3xl p-2"> {title}</h1>
          <p className="p-2"> {overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
