class Jsx extends React.Component {
  constructor(props) {
    super(props);
    this.handleReset = this.handleReset.bind(this);
    this.handleAddition = this.handleAddition.bind(this);
    this.handleSubtraction = this.handleSubtraction.bind(this);
    this.state = {
      count: 0,
    };
  }
  handleAddition() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  }
  handleSubtraction() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1,
      };
    });
  }
  handleReset() {
    this.setState(() => {
      return {
        count: 0,
      };
    });
  }
  render() {
    return (
      <div>
        <Counter
          count={this.state.count}
          handleReset={this.handleReset}
          handleAddition={this.handleAddition}
          handleSubtraction={this.handleSubtraction}
        />
      </div>
    );
  }
}

class Counter extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Count:
          {this.props.count}
        </h1>
        <button onClick={this.props.handleAddition}>+1</button>
        <button onClick={this.props.handleSubtraction}>-1</button>
        <button onClick={this.props.handleReset}>reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Jsx />, document.getElementById("app"));
