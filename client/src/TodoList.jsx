import React from "react";
import Board from "./Board";
import Todo from "./component/Todo";

export default function TodoList(props) {  
  const renderTodoList = (priority) => {
    return props.tasks.map(task =>
      task.priority == priority ? 
      <Todo
        key={task.id}
        id={task.id}
        task={task} 
        deleteTask={props.deleteTask}
        updateTaskCompletedStatus={props.updateTaskCompletedStatus}        
        draggable="true"        
      /> : null
    )
  }

  return (
    <div className="todo-list-wrapper">
      <Board id="board_1" boardKey={0} className="board" name="Rendah" updateTaskPriority={props.updateTaskPriority}>
        {renderTodoList(0)}
      </Board>
      <Board id="board_2" boardKey={1} className="board" name="Tinggi" tasks={props.tasks} updateTaskPriority={props.updateTaskPriority}>
        {renderTodoList(1)}        
      </Board>
    </div>
  );
}
