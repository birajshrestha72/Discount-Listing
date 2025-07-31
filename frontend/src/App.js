import React from 'react';
import React, { useState } from 'react';
import DiscountList from './DiscountList';
import AuthForm from './AuthForm';
import './App.css';

function App() {
  const [showAuth, setShowAuth] = useState(false);
  return (
    <div className="App">
      <DiscountList />
      <button
        style={{
          background: 'linear-gradient(90deg, #56ab2f 0%, #a8e063 100%)',
          color: '#fff',
          border: 'none',
          padding: '0.75rem 1.5rem',
          borderRadius: '5px',
          fontSize: '1rem',
          cursor: 'pointer',
          fontWeight: 500,
          margin: '2rem auto',
          display: 'block'
        }}
        onClick={() => setShowAuth(true)}
      >
        Add Discount
      </button>
      {showAuth && <AuthForm />}
    </div>
  );
}

export default App;
