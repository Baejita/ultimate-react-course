import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
const initailState = {
  questions: [],

  //'loading', 'error', 'ready','active', 'finished'
  status: "loading",
};
function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "error":
      return {
        ...state,
        status: "error",
      };

    default:
      throw new Error("action unknown");
  }
}

function App() {
  const [{ questions, status }, dispatch] = useReducer(reducer, initailState);

  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "error", payload: err }));
  }, []);

  const numberOfQuestions = questions.length;
  console.log(numberOfQuestions);
  return (
    <div>
      <Header className="app" />

      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen numberOfQuestions={numberOfQuestions} />
        )}
      </Main>
    </div>
  );
}

export default App;
