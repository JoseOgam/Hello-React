class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Todo App</h1>
        <h2>Organizing data</h2>
      </div>
    );
  }
}
class Actions extends React.Component {
  render() {
    return <button>Click Me</button>;
  }
}
class Options extends React.Component {
  render() {
    return <p>React TODOS APP</p>;
  }
}
const jsx = (
  <div>
    <Header />
    <Actions />
    <Options />
  </div>
);
ReactDOM.render(jsx, document.getElementById("app"));
