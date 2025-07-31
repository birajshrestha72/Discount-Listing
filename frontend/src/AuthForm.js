import React, { useState } from 'react';
const axios = require('axios');
import './AuthForm.css';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    try {
      const url = isLogin ? '/api/auth/login' : '/api/auth/signup';
      let payload;
      if (isLogin) {
        payload = { email, password };
      } else {
        // For signup, you may want to collect shop_name and phone as well
        payload = { shop_name: 'Shop', email, phone: '0000000000', password };
      }
      const res = await axios.post(url, payload);
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
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
        <button
          type="button"
          className="toggle"
          onClick={() => setIsLogin(!isLogin)}
          style={{ background: 'none', border: 'none', color: '#56ab2f', cursor: 'pointer', fontSize: '0.95rem', marginBottom: '0.5rem', textAlign: 'center', padding: 0 }}
        >
          {isLogin ? 'No account? Sign Up' : 'Have an account? Login'}
        </button>
        {message && <p className="message">{message}</p>}
      </form>
    </div>
  );
};

export default AuthForm;
