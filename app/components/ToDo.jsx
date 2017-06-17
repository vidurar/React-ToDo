const React = require('react');

const ToDo = React.createClass({
  render: function(){
    const { id, text, completed } = this.props;
    return (
      <div onClick={()=>{
        this.props.onToggle(id);
      }}>
        <input type='checkbox' checked={completed}></input>
        {text}
      </div>
    );
  },
});

module.exports = ToDo;
