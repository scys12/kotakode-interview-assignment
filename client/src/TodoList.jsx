import React from "react";
import Todo from "./component/Todo";

export default function TodoList(props) {

  const renderTodoList = () => {
    return props.tasks.map((task, idx) =>
      <Todo key={idx} task={task} deleteTask={props.deleteTask}/>
    )
  }

  return (
    <div>
      {renderTodoList()}
    </div>
  );
}
