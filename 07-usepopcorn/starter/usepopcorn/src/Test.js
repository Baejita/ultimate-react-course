import React, { useState } from "react";

function Test() {
  const [name, setName] = useState("Past");
  const [message, setMessage] = useState("Empty");

  const updateMessage = () => {
    setName("Future");
    setMessage("Hello" + name);
  };
  return (
    <div>
      {message} and {name}
      <button onClick={updateMessage}>Clickme </button>
    </div>
  );
}

export default Test;
