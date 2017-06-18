const React = require('react');
const uuid = require('node-uuid');
const moment = require('moment');

const ToDoList = require('ToDoList');
const AddToDo = require('AddToDo');
const ToDoSearch = require('ToDoSearch');
const ToDoAPI = require('ToDoAPI');

const ToDoApp = React.createClass({
  getInitialState: function(){
    return {
      showCompleted: false,
      searchText: '',
      todos: ToDoAPI.getToDos(),
    };
  },
  componentDidUpdate: function(){
    ToDoAPI.setToDos(this.state.todos);
  },
  handleToggle: function(id){
    let updatedToDos = this.state.todos.map((todo)=>{
      if(todo.id === id){
        todo.completed = !todo.completed;
        todo.completedAt = todo.completed ? moment().unix() : undefined;
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
          createdAt: moment().unix(),
          completedAt: undefined,
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
    const { todos, showCompleted, searchText } = this.state;
    const filteredToDos = ToDoAPI.filterToDos(todos, showCompleted, searchText);
    return (
      <div>
        <h1 className='page-title'>ToDo App</h1>

        <div className='row'>
          <div className='column small-centered small-11 medium-6 large-5'>
            <div className='container'>
              <ToDoSearch onSearch={this.handleSearch}/>
              <ToDoList todos={filteredToDos} onToggle={this.handleToggle}/>
              <AddToDo onAddToDo={this.handleAddToDo} />
            </div>
          </div>
        </div>

      </div>
    );
  },
});

module.exports = ToDoApp;
