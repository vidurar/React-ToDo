const React = require('react');
const ToDoList = require('ToDoList');
const AddToDo = require('AddToDo');

const ToDoApp = React.createClass({
  getInitialState: function(){
    return {
      todos:[
        {
          id:1,
          text:'Walk the dog'
        },
        {
          id:2,
          text:'Clean the house'
        },
        {
          id:3,
          text:'Wash the dishes'
        },
        {
          id:4,
          text:'Read something'
        },
      ]
    };
  },

  handleAddToDo: function(text){
    alert('new todo: ' + text);
  },

  render: function(){
    const { todos } = this.state;
    return (
      <div>
        <ToDoList todos={todos} />
        <AddToDo onAddToDo={this.handleAddToDo} />
      </div>
    );
  },
});

module.exports = ToDoApp;
