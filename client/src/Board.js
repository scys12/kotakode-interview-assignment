import React from 'react';

export default function Board(props){
  const dropTodo = e => {
    e.preventDefault()
    const task_id = e.dataTransfer.getData('task_id');
    const task = document.getElementById(task_id);
    props.updateTaskPriority(task.id, props.boardKey);
  }

  const dragOver = e => {
    e.preventDefault();

  }

  return(
    <div
      id={props.id}
      className={props.className}
      onDrop={dropTodo}
      onDragOver={dragOver}
    >
      <h4>{props.name}</h4>
      {props.children}
    </div>
  );
}