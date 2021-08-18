import React, { useState } from 'react';
import { authService } from 'fbase';

const AuthForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState('');
  const onChange = (e) => {
    const {
      target: { name, value },
    } = e;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      let data;
      if (newAccount) {
        // create account
        data = await authService.createUserWithEmailAndPassword(
          email,
          password,
        );
      } else {
        // login
        data = await authService.signInWithEmailAndPassword(email, password);
      }
      console.log(data);
    } catch (e) {
      setError(e.message);
    }
  };

  const toggleAccount = () => setNewAccount((prev) => !prev);
  return (
    <div>
      <form onSubmit={onSubmit} className="container">
        <input
          name="email"
          value={email}
          type="text"
          placeholder="Email"
          onChange={onChange}
          required
          className="authInput"
        />
        <input
          name="password"
          value={password}
          type="password"
          placeholder="password"
          onChange={onChange}
          required
          className="authInput"
        />
        <input
          type="submit"
          value={newAccount ? 'Create Account' : 'Sign In'}
          className="authInput authSubmit"
        />
        {error && <span className="authError">{error}</span>}
      </form>
      <span onClick={toggleAccount} className="authSwitch">
        {newAccount ? 'Log in. ' : 'Create Account'}
      </span>
    </div>
  );
};

export default AuthForm;
