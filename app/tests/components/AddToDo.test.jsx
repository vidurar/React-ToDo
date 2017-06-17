const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jQuery');
const TestUtils = require('react-addons-test-utils');

const AddToDo = require('AddToDo');

describe('AddToDo',()=>{
  it('should exist',()=>{
    expect(AddToDo).toExist();
  });

  it('shoud call AddToDo prop with valid data', () => {
    let testText = 'Check mail';
    let spy = expect.createSpy();
    let testAddToDo = TestUtils.renderIntoDocument(<AddToDo onAddToDo={spy} />);
    let $el = $(ReactDOM.findDOMNode(testAddToDo));

    testAddToDo.refs.todoText.value = testText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(testText);
  });

  it('shoud not call AddToDo prop with invalid data', () => {
    let testText = '';
    let spy = expect.createSpy();
    let testAddToDo = TestUtils.renderIntoDocument(<AddToDo onAddToDo={spy} />);
    let $el = $(ReactDOM.findDOMNode(testAddToDo));

    testAddToDo.refs.todoText.value = testText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });

});
