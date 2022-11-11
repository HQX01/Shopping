import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import HomePage from './pages/homePage/index';
import { jest } from '@jest/globals';

test('renders learn react link', () => {
  render(<HomePage />);
  expect(screen.getByText('Home')).toBeInTheDocument();
});
