class ToggleVisible extends React.Component {
  constructor(props) {
    super(props);
    this.toggleButton = this.toggleButton.bind(this);
    this.state = { textDisplay: false };
  }

  toggleButton() {
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
        <button onClick={this.toggleButton}>Toggle</button>
      </div>
    );
  }
}

ReactDOM.render(<ToggleVisible />, document.getElementById("app"));
