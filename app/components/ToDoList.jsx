const React = require('react');
const ToDo = require('ToDo');

const ToDoList = React.createClass({
  render: function(){

    const { todos } = this.props;
    let renderToDos = () => {
      if(todos.length === 0){
        return (
          <p className='container__message'>Nothing to do</p>
        )
      }
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
