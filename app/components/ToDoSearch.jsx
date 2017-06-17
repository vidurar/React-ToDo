const React = require('react');

const ToDoSearch = React.createClass({
  handleSearch: function(){
    const searchText = this.refs.searchText.value;
    const showCompleted = this.refs.showCompleted.checked;

    this.props.onSearch(showCompleted, searchText);
  },
  render: function(){
    return (
      <div>
        <div>
          <input type='search' ref='searchText' placeholder='Search ToDos' onChange={this.handleSearch} />
        </div>
        <div>
          <label>
            <input type='checkbox' ref='showCompleted' onChange={this.handleSearch} />
            Show Complete ToDos
          </label>
        </div>
      </div>
    );
  },
})

module.exports = ToDoSearch;