import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Amplify App', () => {
  render(<App />);
  const linkElement = screen.getByText(/Amplify App/i);
  expect(linkElement).toBeInTheDocument();
});
