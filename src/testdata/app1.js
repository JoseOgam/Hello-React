// console.log("react is great");

// import add from "./app2";

// console.log(add(1, 2, 3));

import React from "react";
import ReactDom from "react-dom";

var MyData = () => {
  return <h1>Reading non-fiction work</h1>;
};

ReactDom.render(<MyData />, document.getElementById("app"));
