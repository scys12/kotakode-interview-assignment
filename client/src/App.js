import React, { useState } from 'react';
import './App.css';
import Form from './component/Form';
import TodoList from './TodoList';

function App() {
  const [tasks, setTasks] = useState([
    "Cuci Baju",
    "Masak Nasi"
  ]);

  const [todoInput, setTodoInput] = useState("");

  const handleTodoInputChange = (todoValue) => {
    setTodoInput(todoValue);
  }

  const deleteTask = (deletedTask) => {
    setTasks(tasks.filter( task => task !== deletedTask));
  }

  const addNewTasks = (task) => {
    setTasks([...tasks, task]);
  }

  return (
    <div className="App">
      <h1>Pekerjaan Rumah Yang Perlu Dilakukan</h1>
      <Form
        todoInput={todoInput}
        handleInputChange={handleTodoInputChange}
        addNewTasks={addNewTasks}
      />
      <TodoList tasks={tasks} deleteTask={deleteTask}/>
    </div>
  );
}

export default App;
