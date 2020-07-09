class TodoApp extends React.Component {
  render() {
    var title = "Todo tasks";
    var subtitle = "Focusing everyday";
    var options = ["autumn", "summer", "spring", "winter"];

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  handlePick() {
    alert("action to do");
  }
  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What to do</button>
      </div>
    );
  }
}

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.removeAll = this.removeAll.bind(this);
  }
  removeAll() {
    console.log(this.props.options);
  }
  render() {
    return (
      <div>
        <button onClick={this.removeAll}>remove all</button>
        {this.props.options.map((option) => {
          return <Option key={option} optionText={option} />;
        })}
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return <div>{this.props.optionText}</div>;
  }
}

class AddOption extends React.Component {
  addOption(evt) {
    evt.preventDefault();
    var option = evt.target.elements.option.value.trim();

    if (option) {
      alert(option);
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.addOption}>
          <input type="text" name="option" />
          <button>add option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<TodoApp />, document.getElementById("app"));
