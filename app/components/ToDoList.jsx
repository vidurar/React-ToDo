const React = require('react');
const ToDo = require('ToDo');

const ToDoList = React.createClass({
  render: function(){

    const { todos } = this.props;
    let renderToDos = () => {
      return todos.map((todo) => {
        return (
          <ToDo key={todo.id} {...todo} onToggle={this.props.onToggle} />
        );
      });
    };
    return (
      <div>
        {renderToDos()}
      </div>
    );
  },
});

module.exports = ToDoList;
