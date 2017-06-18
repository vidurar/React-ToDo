const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jQuery');
const TestUtils = require('react-addons-test-utils');

const ToDoApp = require('ToDoApp');

describe('ToDoApp', ()=>{
  it('should exist', ()=>{
    expect(ToDoApp).toExist();
  });

  it('should add todo to the todos state on handleAddToDo',()=>{
    const todoText = 'blah blah blahhhh';
    const todoApp = TestUtils.renderIntoDocument(<ToDoApp/>);

    todoApp.setState({todos:[]});
    todoApp.handleAddToDo(todoText);

    expect(todoApp.state.todos[0].text).toBe(todoText);
    expect(todoApp.state.todos[0].createdAt).toBeA('number');
  });

  it('should toggle completed value when handleToggle called', () => {
    let todoData = {
      id:11,
      text: 'Test features',
      completed: false,
    };

    let todoApp = TestUtils.renderIntoDocument(<ToDoApp/>);
    todoApp.setState({ todos:[ todoData ] });

    expect(todoApp.state.todos[0].completed).toBe(false);
    todoApp.handleToggle(11);

    expect(todoApp.state.todos[0].completed).toBe(true);

    expect(todoApp.state.todos[0].completedAt).toBeA('number');
  });

  it('should toggle toggle todo from completed to incomplete', () => {
    let todoData = {
      id:11,
      text: 'Test features',
      completed: true,
      completedAt: 123
    };

    let todoApp = TestUtils.renderIntoDocument(<ToDoApp/>);
    todoApp.setState({ todos:[ todoData ] });

    expect(todoApp.state.todos[0].completed).toBe(true);
    todoApp.handleToggle(11);

    expect(todoApp.state.todos[0].completed).toBe(false);

    expect(todoApp.state.todos[0].completedAt).toNotExist();
  });




});
