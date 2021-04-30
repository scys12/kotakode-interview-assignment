import React from 'react';
import {RiCheckboxFill, RiCheckboxBlankLine, RiCloseCircleLine} from 'react-icons/ri'
export default function Todo(props){
  console.log(props.task)
  const handleDeleteTask = () => {
    props.deleteTask(props.task)
  }

  const handleFinishTask = () => {
    props.updateTaskCompletedStatus(props.task);
  }

  const dragStart = e => {
    const target = e.target;    
    e.dataTransfer.setData('task_id', target.id);
  }

  const dragOver = e => {
    e.stopPropagation();
  }

  const getClassName = () => {
    let className = props.task.isComplete ? "todo-container complete" : "todo-container";
    className = props.task.priority === 1 ? `${className} priority-tinggi` : `${className} priority-rendah`
    return className;
  }
  return (
    <div
      id={props.id}
      onDragStart={dragStart}
      onDragOver={dragOver}
      className={getClassName()}
      draggable={props.draggable}
    >
      {props.task.text}
      <div className="icons">
        <RiCloseCircleLine
          onClick={() => handleDeleteTask()}
          className='delete-icon'
        />
        {props.task.isComplete ? 
          <RiCheckboxFill
            onClick={() => handleFinishTask()}
            className='complete-icon'
          /> : 
          <RiCheckboxBlankLine
            onClick={() => handleFinishTask()}
            className='complete-icon'
          />
        }
      </div>
    </div>
  );
}