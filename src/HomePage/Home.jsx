import React from "react";
import useStore from "./../createStore";

function Home() {
  const num = useStore((state) => state.num);

  return (
    <div>
      <h1>Hello from Home, Num: {num}</h1>;
    </div>
  )
}

export default Home;