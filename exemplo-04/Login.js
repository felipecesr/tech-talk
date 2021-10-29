import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

const Login = () => {
  const [isSaving, setIsSaving] = useState(false)
  const [redirect, setRedirect] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSaving(true)
    const response = await window.fetch('/login', {
      method: 'POST',
      credentials: 'same-origin',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: username.value, password: password.value })
    });
    const json = await response.json()
    if (response.ok) {
      setRedirect(true);
    } else {
      setIsSaving(false);
      setError(json.message);
    }
  };

  if (redirect) {
    return <Redirect to='/' />
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='username'>Username</label>
      <input
        type='text'
        name='username'
        id='username'
      />
      <label htmlFor='password'>Password</label>
      <input
        type='password'
        name='password'
        id='password'
      />
      <button type='submit' disabled={isSaving}>
        Submit
      </button>
      {error ? <div role='alert'>{error}</div> : null}
    </form>
  )
}

export default Login
