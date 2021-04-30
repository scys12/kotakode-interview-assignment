import React, { useState } from 'react';
import './App.css';
import Form from './component/Form';
import TodoList from './TodoList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [todoInput, setTodoInput] = useState("");
  const [id, setId] = useState(1);
  const [todoPriority, setTodoPriority] = useState(-1);

  const handleTodoInputChange = (todoValue) => {
    setTodoInput(todoValue);
  }

  const handleTodoPriorityChange = (priority) => {
    setTodoPriority(priority);
  }

  const deleteTask = (deletedTask) => {
    setTasks(tasks.filter( task => task !== deletedTask));
  }

  const addNewTasks = (task) => {
    task.id = id;
    setId(id+1);
    setTasks([...tasks, task]);
  }

  const updateTaskCompletedStatus = (updatedtask) => {
    let updatedTasks = tasks.map(task => {
      task.id === updatedtask.id ? task.isComplete = !task.isComplete : task.isComplete = task.isComplete
      return task;
    })
    setTasks(updatedTasks);
  }

  const updateTaskPriority = (taskId, priority) => {
    console.log(taskId, priority)
    let updatedTasks = tasks.map(task => {
      task.id == taskId ? task.priority = priority : task.priority = task.priority
      return task;
    })
    setTasks(updatedTasks);
  }  

  return (
    <div className="App">
      <h1>Pekerjaan Rumah Yang Perlu Dilakukan</h1>
      <Form
        todoInput={todoInput}
        handleInputChange={handleTodoInputChange}
        addNewTasks={addNewTasks}
        todoPriority={todoPriority}
        handleTodoPriorityChange={handleTodoPriorityChange}
      />
      <TodoList 
        tasks={tasks} 
        deleteTask={deleteTask}
        updateTaskCompletedStatus={updateTaskCompletedStatus}
        updateTaskPriority={updateTaskPriority}
      />
    </div>
  );
}

export default App;
