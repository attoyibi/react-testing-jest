import { render, screen, click, fireEvent } from '@testing-library/react';
import { describe, it, expect, test, } from 'vitest';
import Login from '../components/Login';

describe('Login Component', () => {
    test('shows error message when fields are empty', () => {
        render(<Login />);
        const submitButton = screen.getByRole('button', { name: /login/i });
        fireEvent.click(submitButton);

        const errorMessage = screen.getByText('username and password are required');
        expect(errorMessage).toBeInTheDocument();
    })
})