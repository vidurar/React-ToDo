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
          text:'Walk the dog'
        },
        {
          id:uuid(),
          text:'Clean the house'
        },
        {
          id:uuid(),
          text:'Wash the dishes'
        },
        {
          id:uuid(),
          text:'Read something'
        },
      ]
    };
  },

  handleAddToDo: function(text){
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text
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
        <ToDoList todos={todos} />
        <AddToDo onAddToDo={this.handleAddToDo} />
      </div>
    );
  },
});

module.exports = ToDoApp;
