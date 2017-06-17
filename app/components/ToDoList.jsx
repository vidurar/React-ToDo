const React = require('react');
const ToDo = require('ToDo');

const ToDoList = React.createClass({
  render: function(){

    const { todos } = this.props;
    let renderToDos = () => {
      return todos.map((todo) => {
        return (
          <ToDo key={todo.id} {...todo} />
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
