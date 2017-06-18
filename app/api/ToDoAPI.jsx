const $ = require('jQuery');

module.exports = {
  setToDos: function(todos){
    if($.isArray(todos)){
      localStorage.setItem('todos',JSON.stringify(todos));
      return todos;
    }
  },
  getToDos: function(){
    let stringToDos = localStorage.getItem('todos');
    let todos = [];
    try {
      todos = JSON.parse(stringToDos);
    } catch (e){

    }

    return $.isArray(todos) ? todos : [];
  },
  filterToDos: function(todos, showCompleted, searchText){
    let filteredToDos = todos;

    //Filter by showCompleted
    filteredToDos = filteredToDos.filter((todo)=>{
      return !todo.completed || showCompleted;
    });

    //Filter by searchText
    filteredToDos = filteredToDos.filter((todo)=>{
      let text = todo.text.toLowerCase();
      return searchText.length === 0 || text.indexOf(searchText) > -1;
    });
    //Sort Todos with non-completed first
    filteredToDos.sort((a,b)=>{
      if (!a.completed && b.completed){
        return -1;
      } else if (a.completed && !b.completed){
        return 1;
      } else {
        return 0;
      }
    });

    return filteredToDos;
  },
}
