import React, { useState } from "react";

const Header = (props) => {
  const [counter, setCouter] = useState(0);
  return (
    <>
      <h1>V2.0</h1>
      <h1>
        Hello, {counter} , {props.name}
      </h1>
      <button onClick={() => setCouter(counter + 1)}>Click me</button>
    </>
  );
};

export default Header;
