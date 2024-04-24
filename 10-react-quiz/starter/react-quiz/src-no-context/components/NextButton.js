import React from "react";

function NextButton({ dispatch, answer, index, numQuestions }) {
  if (index < numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        disabled={answer == null}
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );

  if (index === numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        disabled={answer == null}
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );
}

export default NextButton;
