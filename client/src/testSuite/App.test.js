import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../components/App';
// eslint-disable-next-line import/no-unresolved
import '@testing-library/jest-dom';

describe('App', () => {
  test('renders App component', () => {
    render(<App />);
           
    screen.debug();
    expect(screen.getByText('hihi')).toBeInTheDocument();
  });
});
