import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders default without crash', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Pekerjaan Rumah Yang Perlu Dilakukan/i);
  expect(linkElement).toBeInTheDocument();
});

test('render with input works', () => {
  const { getByText } = render(<App />);
  const input = screen.getByPlaceholderText('Tambah pekerjaan');
  fireEvent.change(input, {target: {value: "Cuci piring"}})
  expect(input.value).toBe('Cuci piring');
})
