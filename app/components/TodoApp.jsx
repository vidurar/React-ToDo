const React = require('react');
const uuid = require('node-uuid');

const ToDoList = require('ToDoList');
const AddToDo = require('AddToDo');
const ToDoSearch = require('ToDoSearch');
const ToDoAPI = require('ToDoAPI');

const ToDoApp = React.createClass({
  getInitialState: function(){
    return {
      showCompleted: false,
      searchText: '',
      todos: ToDoAPI.getToDos()
    };
  },
  componentDidUpdate: function(){
    ToDoAPI.setToDos(this.state.todos);
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
