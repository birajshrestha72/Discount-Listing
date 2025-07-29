import React, { useState } from 'react';
import axios from 'axios';
import './AuthForm.css';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    try {
      const url = isLogin ? '/api/auth/login' : '/api/auth/signup';
      const res = await axios.post(url, { username, password });
      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response?.data?.error || 'Error');
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
        <p className="toggle" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? 'No account? Sign Up' : 'Have an account? Login'}
        </p>
        {message && <p className="message">{message}</p>}
      </form>
    </div>
  );
};

export default AuthForm;
