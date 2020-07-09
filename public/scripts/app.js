"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Jsx = function (_React$Component) {
  _inherits(Jsx, _React$Component);

  function Jsx(props) {
    _classCallCheck(this, Jsx);

    var _this = _possibleConstructorReturn(this, (Jsx.__proto__ || Object.getPrototypeOf(Jsx)).call(this, props));

    _this.handleReset = _this.handleReset.bind(_this);
    _this.handleAddition = _this.handleAddition.bind(_this);
    _this.handleSubtraction = _this.handleSubtraction.bind(_this);
    _this.state = {
      count: 0
    };
    return _this;
  }

  _createClass(Jsx, [{
    key: "handleAddition",
    value: function handleAddition() {
      this.setState(function (prevState) {
        return {
          count: prevState.count + 1
        };
      });
    }
  }, {
    key: "handleSubtraction",
    value: function handleSubtraction() {
      this.setState(function (prevState) {
        return {
          count: prevState.count - 1
        };
      });
    }
  }, {
    key: "handleReset",
    value: function handleReset() {
      this.setState(function () {
        return {
          count: 0
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(Counter, {
          count: this.state.count,
          handleReset: this.handleReset,
          handleAddition: this.handleAddition,
          handleSubtraction: this.handleSubtraction
        })
      );
    }
  }]);

  return Jsx;
}(React.Component);

var Counter = function (_React$Component2) {
  _inherits(Counter, _React$Component2);

  function Counter() {
    _classCallCheck(this, Counter);

    return _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).apply(this, arguments));
  }

  _createClass(Counter, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          "Count:",
          this.props.count
        ),
        React.createElement(
          "button",
          { onClick: this.props.handleAddition },
          "+1"
        ),
        React.createElement(
          "button",
          { onClick: this.props.handleSubtraction },
          "-1"
        ),
        React.createElement(
          "button",
          { onClick: this.props.handleReset },
          "reset"
        )
      );
    }
  }]);

  return Counter;
}(React.Component);

ReactDOM.render(React.createElement(Jsx, null), document.getElementById("app"));
