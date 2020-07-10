// console.log("react is great");

// import add from "./app2";

// console.log(add(1, 2, 3));

import React from "react";
import ReactDom from "react-dom";

// var MyData = () => {
//   return <h1>Reading non-fiction work</h1>;
// };
class ToggleVisible extends React.Component {
  constructor(props) {
    super(props);
    this.toggleButton = this.toggleButton.bind(this);
    this.state = {
      Visibility: false,
    };
  }
  toggleButton() {
    this.setState((prevState) => ({
      Visibility: !prevState.Visibility,
    }));
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.toggleButton}>
          {this.state.Visibility ? "Hide details" : "Show details"}
        </button>
        {this.state.Visibility && (
          <p>Hi. here are your details you can now see</p>
        )}
      </div>
    );
  }
}

ReactDom.render(<ToggleVisible />, document.getElementById("app"));
