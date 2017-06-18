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
}
