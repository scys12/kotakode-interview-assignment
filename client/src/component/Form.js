import React from 'react';

export default function Form(props){
  const submitForm = (ev) => {
    ev.preventDefault();
    props.addNewTasks({
      text : props.todoInput,
      isComplete: false,
      priority: props.todoPriority
    });
    props.handleInputChange('');
    props.handleTodoPriorityChange(-1);
  }

  const handleTaskChange = (ev) => {
    props.handleInputChange(ev.target.value);
  }

  const handlePriorityChange = (ev) => {
    props.handleTodoPriorityChange(ev.target.value)
  }

  return(
    <form onSubmit={submitForm} className="todo-form">
        <div>
          <select name="cars" id="cars" required className="todo-form-prioritas" onChange={handlePriorityChange} value={props.todoPriority}>
            <option value="-1" disabled hidden>Prioritas</option>
            <option value="0">Rendah</option>
            <option value="1">Tinggi</option>
          </select>
          <input type="text" value={props.todoInput} required onChange={handleTaskChange} placeholder="Tambah pekerjaan" />
          <button type="submit">
            Tambah
          </button>
        </div>
        <div className="todo-form-select-container">
          
        </div>
    </form>
  );
}