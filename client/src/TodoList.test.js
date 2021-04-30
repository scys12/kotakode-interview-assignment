import React from 'react';
import { render } from '@testing-library/react';
import TodoList from './TodoList';

test('Renders Todo List Correctly', () => {
  const deleteTask = () => {
    return;
  };
  const { getByText } = render(<TodoList tasks={["masak ikan", "minum air"]} deleteTask={deleteTask}/>);
  let linkElement = getByText(/masak ikan/i);
  expect(linkElement).toBeInTheDocument();

  linkElement = getByText(/minum air/i);
  expect(linkElement).toBeInTheDocument();
});
