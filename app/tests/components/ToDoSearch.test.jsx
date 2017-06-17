const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jQuery');
const TestUtils = require('react-addons-test-utils');

const ToDoSearch = require('ToDoSearch');

describe('ToDoSearch', ()=>{
  it('should exist', ()=>{
    expect(ToDoSearch).toExist();
  });

  it('should call on search with entered input text',()=>{
    const searchText = 'Dog';
    const spy = expect.createSpy();
    const todoSearch = TestUtils.renderIntoDocument(<ToDoSearch onSearch={spy} />)

    todoSearch.refs.searchText.value = searchText;
    TestUtils.Simulate.change(todoSearch.refs.searchText);

    expect(spy).toHaveBeenCalledWith(false, 'Dog');
  });

  it('should call on search with proper checked value',()=>{
    const spy = expect.createSpy();
    const todoSearch = TestUtils.renderIntoDocument(<ToDoSearch onSearch={spy} />)

    todoSearch.refs.showCompleted.checked = true;
    TestUtils.Simulate.change(todoSearch.refs.showCompleted);

    expect(spy).toHaveBeenCalledWith(true, '');
  });
});
