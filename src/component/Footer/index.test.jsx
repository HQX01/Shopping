import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Footer from './index';
import { jest } from '@jest/globals';

test('should show Home in the screen', () => {
    render(<Footer />);
    expect(screen.getByText('简易商城的底部')).toBeInTheDocument();
});
