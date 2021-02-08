import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders title', () => {
  render(<App title='pro-file'/>);
  const el = screen.getByText(/pro-file/i);
  expect(el).toBeInTheDocument();
});
