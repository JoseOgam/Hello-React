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

        <button onClick={this.toggleButton}>
          {this.state.textDisplay ? "Hide details" : "Show details "}
        </button>
        {this.state.textDisplay && (
          <p>Hi. here are your details you can now see</p>
        )}
      </div>
    );
  }
}

ReactDOM.render(<ToggleVisible />, document.getElementById("app"));
