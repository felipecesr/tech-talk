import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import FormItem from './FormItem'
import Button from './Button'

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
      <FormItem label='Username' name='username' />
      <FormItem label='Password' name='password' type='password' />
      <Button type='submit' disabled={isSaving}>
        Submit
      </Button>
      {error ? <div role='alert'>{error}</div> : null}
    </form>
  )
}

export default Login
