const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jQuery');
const TestUtils = require('react-addons-test-utils');

const ToDo = require('ToDo');

describe('ToDo', ()=>{
  it('should exist', ()=>{
    expect(ToDo).toExist();
  });

  it('should call onToggle prop with id on click', () => {
    let todoData = {
      id:119,
      text: 'Test features',
      completed: true,
    };
    let spy = expect.createSpy();
    let todo = TestUtils.renderIntoDocument(<ToDo {...todoData} onToggle={spy}/>);
    let $el = $(ReactDOM.findDOMNode(todo));

    TestUtils.Simulate.click($el[0]);

    expect(spy).toHaveBeenCalledWith(119);

  });
});
