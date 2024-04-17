import React from "react";

function NextButton({ dispatch, answer }) {
  if (answer === null) return null;
  return (
    <button
      className="btn btn-ui"
      onCLick={() => dispatch({ type: " nextQuestion" })}
    >
      Next
    </button>
  );
}

export default NextButton;
