class ToggleVisible extends React.Component {
  constructor(props) {
    super(props);
    this.ToggleButton = this.ToggleButton.bind(this);
    this.state = { textDisplay: false };
  }

  ToggleButton() {
    this.setState((prevState) => ({
      textDisplay: !prevState.textDisplay,
    }));
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <p>
          {this.state.textDisplay
            ? "Hi. here are your details you can now see"
            : " "}
        </p>
        <button onClick={this.ToggleButton}>Toggle</button>
      </div>
    );
  }
}

ReactDOM.render(<ToggleVisible />, document.getElementById("app"));
