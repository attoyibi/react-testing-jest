// src/App.js
import React, { useState } from 'react';
import Login from './components/Login';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (username, password) => {
    // Simulasi validasi login
    if (username === 'user123' && password === 'pass123') {
      setUser(username);
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div>
      hello react
      {user ? (
        <h1>Welcome, {user}!</h1>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
