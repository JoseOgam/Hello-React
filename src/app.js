class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.deleteOption = this.deleteOption.bind(this);
    this.state = {
      options: ["speaking", "designing", "writing", "running"],
    };
  }
  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: [],
      };
    });
  }
  deleteOption(dataToRemove) {
    this.setState((prevState) => {
      return {
        options: prevState.options.filter((option) => dataToRemove !== option),
      };
    });
  }
  handlePick() {
    var randomTodo = Math.floor(Math.random() * this.state.options.length);
    var option = this.state.options[randomTodo];
    alert(option);
  }
  handleAddOption(option) {
    if (!option) {
      return "Enter valid value to add item";
    } else if (this.state.options.indexOf(option) > -1) {
      return "That option exists";
    }

    this.setState((prevState) => {
      return {
        options: prevState.options.concat(option),
      };
    });
  }
  render() {
    var title = "Todo tasks";
    var subtitle = "Focusing everyday";
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handleTodo={this.handlePick}
        />
        <Options
          options={this.state.options}
          deleteOptions={this.handleDeleteOptions}
          deleteOption={this.deleteOption}
        />
        <AddOption handleOption={this.handleAddOption} />
      </div>
    );
  }
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </div>
  );
};

const Action = (props) => {
  return (
    <div>
      <button onClick={props.handleTodo} disabled={!props.hasOptions}>
        What to do
      </button>
    </div>
  );
};

const Options = (props) => {
  return (
    <div>
      <button onClick={props.deleteOptions}>remove all</button>
      {props.options.map((option) => {
        return (
          <Option
            key={option}
            optionText={option}
            deleteItem={props.deleteOption}
          />
        );
      })}
    </div>
  );
};

const Option = (props) => {
  return (
    <div>
      {props.optionText}
      <button
        onClick={(evt) => {
          props.deleteItem(props.optionText);
        }}
      >
        remove
      </button>
    </div>
  );
};

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.addOption = this.addOption.bind(this);
    this.state = {
      error: undefined,
    };
  }
  addOption(evt) {
    evt.preventDefault();
    var option = evt.target.elements.option.value.trim();
    var errorData = this.props.handleOption(option);

    this.setState(() => {
      return { error: errorData };
    });
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.addOption}>
          <input type="text" name="option" />
          <button>add option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<TodoApp />, document.getElementById("app"));
