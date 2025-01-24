import React from "react";

const Result = ({ currentWord, total }) => {
  return (
    <div className="result">
      <p >Current Word: {currentWord}</p>
      <p>Total Words Typed: {total}</p>
    </div>
  );
};

export default Result;
