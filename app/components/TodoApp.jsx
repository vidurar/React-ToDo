const React = require('react');
const ToDoList = require('ToDoList');
const AddToDo = require('AddToDo');
const ToDoSearch = require('ToDoSearch');
const uuid = require('node-uuid');

const ToDoApp = React.createClass({
  getInitialState: function(){
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id:uuid(),
          text:'Walk the dog',
          completed: false,
        },
        {
          id:uuid(),
          text:'Clean the house',
          completed: true,
        },
        {
          id:uuid(),
          text:'Wash the dishes',
          completed: true,
        },
        {
          id:uuid(),
          text:'Read something',
          completed: false,
        },
      ]
    };
  },
  handleToggle: function(id){
    let updatedToDos = this.state.todos.map((todo)=>{
      if(todo.id === id){
        todo.completed = !todo.completed;
      }
      return todo;
    });
    this.setState({
      todos:updatedToDos
    });
  },
  handleAddToDo: function(text){
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text,
          completed: false,
        },
      ],
    });
  },
  handleSearch: function(showCompleted, searchText){
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },

  render: function(){
    const { todos } = this.state;
    return (
      <div>
        <ToDoSearch onSearch={this.handleSearch}/>
        <ToDoList todos={todos} onToggle={this.handleToggle}/>
        <AddToDo onAddToDo={this.handleAddToDo} />
      </div>
    );
  },
});

module.exports = ToDoApp;
