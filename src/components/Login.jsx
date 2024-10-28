// src/components/Login.js
import React, { useState } from 'react';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [user, setUser] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === '' || password === '') {
            setError('Username and password are required');
            return;
        }
        // Simulasi validasi login
        if (username === 'user123' && password === 'pass123') {
            setUser(username);
            setUsername('');
            setPassword('');
            setError('');
        } else {
            alert('Invalid username or password');
        }
    };

    return user ? (
        <h1>Welcome, {user}!</h1>
    ) : (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
            {error && <p role="alert">{error}</p>}
        </form>
    );
}

export default Login;
