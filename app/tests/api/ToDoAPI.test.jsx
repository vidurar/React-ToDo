const expect = require('expect');

const ToDoAPI = require('ToDoAPI');


describe('ToDoAPI',()=>{
  beforeEach(()=>{
    localStorage.removeItem('todos');
  });
  it('should exist',()=>{
    expect(ToDoAPI).toExist();
  });

  describe('setToDos',()=>{
    it('should set valid todos array',()=>{
      let todos = [{
        id: 23,
        text: 'test all files',
        completed: false
      }];
      ToDoAPI.setToDos(todos);

      let actualTodos = JSON.parse(localStorage.getItem('todos'));

      expect(actualTodos).toEqual(todos);
    });

    it('should not set invalid todos array', ()=>{
      let badTodos = { a: 'b' };
      ToDoAPI.setToDos(badTodos);

      expect(localStorage.getItem('todos')).toBe(null);
    });

  });

  describe('getToDos',()=>{

    it('should return empty array for bad local storage data', ()=>{
      let actualTodos = ToDoAPI.getToDos();

      expect(actualTodos).toEqual([]);
    });

    it('should return todos if valid array in local storage', ()=>{
      let todos = [{
        id: 23,
        text: 'test all files',
        completed: false
      }];
      localStorage.setItem('todos', JSON.stringify(todos));

      let actualTodos = ToDoAPI.getToDos();

      expect(actualTodos).toEqual(todos);
    });
  });
});
