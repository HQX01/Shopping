import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import HomePage from './index';
import { jest } from '@jest/globals';

test('should show Home in the screen', () => {
    render(<HomePage />);
    expect(screen.getByText('Home')).toBeInTheDocument();
});
