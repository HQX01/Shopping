import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from './index';
import { jest } from '@jest/globals';

test('should show Home in the screen', () => {
    render(<Header />);
    expect(screen.getByText('简易商城的首部')).toBeInTheDocument();
});
