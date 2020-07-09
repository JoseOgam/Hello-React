class MyCountry extends React.Component {
  render() {
    return (
      <div>
        <h1>I live in Kenya</h1>
      </div>
    );
  }
}

const jsx = <MyCountry />;

ReactDOM.render(jsx, document.getElementById("app"));
