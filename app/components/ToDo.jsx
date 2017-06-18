const React = require('react');
const moment = require('moment');

const ToDo = React.createClass({
  render: function(){
    const { id, text, completed, createdAt, completedAt } = this.props;
    let todoClassName = completed ? 'todo todo-completed' : 'todo';
    const renderDate = () => {
      let message = 'Created ';
      let timestamp = createdAt;

      if(completed){
        message = 'Completed ';
        timestamp = completedAt;
      }

      return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a')
    };
    return (
      <div className={todoClassName} onClick={()=>{
        this.props.onToggle(id);
      }}>
        <div>
          <input type='checkbox' checked={completed}></input>
        </div>
        <div>
          <p>{text}</p>
          <p className='todo__subtext'>{renderDate()}</p>
        </div>
      </div>
    );
  },
});

module.exports = ToDo;
