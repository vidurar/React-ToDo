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

  describe('filterToDos',()=>{
    const todos = [{
      id: 1,
      text:' some text',
      completed: true
    },
      {id: 2,
      text:' other text',
      completed: false
    },
      {id: 3,
      text:' other other text',
      completed: true
    }];

    it('should return all items if showCompleted is true',() => {
      let filteredToDos = ToDoAPI.filterToDos(todos, true, '');

      expect(filteredToDos.length).toBe(3);

    });
    it('should return only completed items if showCompleted is false', () => {
      let filteredToDos = ToDoAPI.filterToDos(todos, false, '');

      expect(filteredToDos.length).toBe(1);

    });

    it('should sort by completed status', ()=>{
      let filteredToDos = ToDoAPI.filterToDos(todos,true, '');
      expect(filteredToDos[0].completed).toBe(false);
    });

    it('should filter todos by search text',() => {
      let filteredToDos = ToDoAPI.filterToDos(todos, true, 'other');

      expect(filteredToDos.length).toBe(2);

    });

    it('should return all items if searchText is empty',() => {
      let filteredToDos = ToDoAPI.filterToDos(todos, true, '');

      expect(filteredToDos.length).toBe(3);

    });

  });
});
