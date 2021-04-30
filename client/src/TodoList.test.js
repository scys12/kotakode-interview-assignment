import React from 'react';
import { render } from '@testing-library/react';
import TodoList from './TodoList';

const deleteTask = () => {
  return;
};

test('Renders Todo List Correctly', () => {
  const tasks = [
    {
      id : 1,
      text : "masak ikan",
      isComplete: false,
      priority: 0
    },
    {
      id : 2,
      text : "minum air",
      isComplete: false,
      priority: 1
    }
  ]
  const { getByText } = render(<TodoList tasks={tasks} deleteTask={deleteTask}/>);
  let linkElement = getByText(/masak ikan/i);
  expect(linkElement).toBeInTheDocument();

  linkElement = getByText(/minum air/i);
  expect(linkElement).toBeInTheDocument();
});