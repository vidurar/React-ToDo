const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jQuery');
const TestUtils = require('react-addons-test-utils');

const ToDoList = require('TodoList');
const ToDo = require('ToDo');

describe('ToDoList', ()=>{
  it('should exist', ()=>{
    expect(ToDoList).toExist();
  });

  it('should render one todo component for each todo item',()=>{
    const sampleToDos = [
      {
        id: 1,
        text: 'blah',
      },
      {
        id: 2,
        text: 'blah blah',
      },
      {
        id: 3,
        text: 'blah blah blah',
      },
    ];
    const sampleToDoList = TestUtils.renderIntoDocument(<ToDoList todos={sampleToDos} />);
    const howManyTodos = TestUtils.scryRenderedComponentsWithType(sampleToDoList, ToDo);

    expect(howManyTodos.length).toBe(sampleToDos.length);
  });
});
