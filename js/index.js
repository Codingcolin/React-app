"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TodoApp = function (_React$Component) {
  _inherits(TodoApp, _React$Component);

  function TodoApp(props) {
    _classCallCheck(this, TodoApp);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.state = {
      todoItems: [],
      entry: ""
    };
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.handleTodoEntry = _this.handleTodoEntry.bind(_this);
    _this.handleClear = _this.handleClear.bind(_this);
    return _this;
  }

  TodoApp.prototype.handleSubmit = function handleSubmit() {
    var nextItems = this.state.todoItems.concat([this.state.entry]);
    var text = '';
    this.setState({
      todoItems: nextItems,
      entry: text
    });
  };

  TodoApp.prototype.handleTodoEntry = function handleTodoEntry(event) {
    this.setState({ entry: event.target.value });
  };

  TodoApp.prototype.handleClear = function handleClear(event) {
    this.setState({
      todoItems: [],
      entry: ""
    });
  };

  TodoApp.prototype.render = function render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h1",
        null,
        this.props.title
      ),
      React.createElement(TodoList, { items: this.state.todoItems }),
      React.createElement(TodoForm, {
        inputValue: this.state.entry,
        changeHandler: this.handleTodoEntry,
        clickHandler: this.handleSubmit,
        deleteHandler: this.handleClear
      })
    );
  };

  return TodoApp;
}(React.Component);

var TodoList = function (_React$Component2) {
  _inherits(TodoList, _React$Component2);

  function TodoList(props) {
    _classCallCheck(this, TodoList);

    return _possibleConstructorReturn(this, _React$Component2.call(this, props));
  }

  TodoList.prototype.render = function render() {
    var createItem = function createItem(itemText) {
      return React.createElement(
        TodoItem,
        null,
        itemText
      );
    };

    return React.createElement(
      "div",
      null,
      this.props.items.map(createItem)
    );
  };

  return TodoList;
}(React.Component);

var TodoItem = function TodoItem(props) {
  return React.createElement(
    "li",
    null,
    props.children
  );
};

var TodoForm = function TodoForm(props) {
  return React.createElement(
    "form",
    null,
    React.createElement(
      "label",
      null,
      "Add new item: "
    ),
    React.createElement("input", { placeholder: "New todo item", value: props.inputValue,
      onChange: props.changeHandler }),
    React.createElement(
      "button",
      {
        type: "button",
        onClick: props.clickHandler
      },
      "Add new todo item"
    ),
    React.createElement(
      "button",
      { type: "button",
        onClick: props.deleteHandler },
      "Delete"
    )
  );
};

ReactDOM.render(React.createElement(TodoApp, { title: "Colin's TodoList" }), document.getElementById('root'));

//ReactDOM.render(<div>Hello!</div>, document.getElementById('root'));