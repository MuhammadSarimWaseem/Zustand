import React from "react";
import useStore from "./../createStore";

function Landing() {
  const setNum = useStore((state) => state.setNum);
  setNum(5);

  return (
    <div>
      <h1>Hello from Landing</h1>
    </div>
  );
}

export default Landing;
