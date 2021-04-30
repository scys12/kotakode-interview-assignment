import React from 'react';

export default function Todo(props){
  const handleDeleteTask = () => {
    props.deleteTask(props.task)
  }
  
  return (
    <li>{props.task}
      <button onClick={handleDeleteTask}>
        Hapus
      </button>
    </li>
  );
}