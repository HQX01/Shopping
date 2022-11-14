import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ShoppingCartPage from './index';
import { jest } from '@jest/globals';

test('should show ShoppingCart in the screen', () => {
    render(<ShoppingCartPage />);
    expect(screen.getByText('ShoppingCart')).toBeInTheDocument();
});
