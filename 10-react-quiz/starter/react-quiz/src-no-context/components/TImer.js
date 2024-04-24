import { useEffect } from "react";

function Timer({ dispatch, secondsRemaining }) {
  //ต้องนำ useEffect มาวางตรงนี้เพราะว่า ถ้าวางใน app จะถูกรันทันที เมื่อเริ่ม app

  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;
  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);

      return () => clearInterval(id);
    },
    [dispatch]
  );
  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins}:{seconds < 10 && "0"}
      {seconds}
    </div>
  );
}

export default Timer;
