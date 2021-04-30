import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders default without crash', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Pekerjaan Rumah Yang Perlu Dilakukan/i);
  expect(linkElement).toBeInTheDocument();
});
