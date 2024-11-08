import React from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const navigate = useNavigate();

    const log = () => {
        navigate('/Dashboard');
      };
  return (
    <form onSubmit={log}>
    <div className="login-page">
      <div className="login-container">
        <div className="left">
          <h2>Sign In</h2>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <a href="/forgot-password">Forgot your password?</a>
          <button type='submit'>Sign In</button>
        </div>
        <div className="right">
          <h2>Hello, Friend!</h2>
          <p>Create a new account and start your journey with us!</p>
          <button>Sign Up</button>
        </div>
      </div>
    </div>
    </form>
  );
};

export default LoginForm;
