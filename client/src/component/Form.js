import React, { useState } from 'react';

export default function Form(props){
  const submitForm = (ev) => {
    ev.preventDefault();
    props.addNewTasks(props.todoInput);
    props.handleInputChange('');
  }

  const handleChange = (ev) => {
    props.handleInputChange(ev.target.value);
  }

  return(
    <form onSubmit={submitForm}>
        <input type="text" value={props.todoInput} required={true} onChange={handleChange}/>
        <button type="submit">
          Tambah
        </button>
    </form>
  );
}