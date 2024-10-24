import '@testing-library/jest-dom'; // Adicione esta linha no início do arquivo
import React from 'react'; 
import { render, screen } from '@testing-library/react';
import App from '../components/App';




test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
