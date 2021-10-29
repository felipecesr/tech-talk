import React, { useState } from 'react'

const CustomerForm = ({ firstName }) => {
  const [customer, setCustomer] = useState({ firstName })

  const handleChangeFirstName = ({ target }) =>
    setCustomer(customer => ({
      ...customer,
      firstName: target.value
    }))

  const handleSubmit = async e => {
    e.preventDefault()
    await window.fetch('/customers', {
      method: 'POST',
      credentials: 'same-origin',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(customer)
    })
  }

  return (
    <form name='customer' onSubmit={handleSubmit}>
      <label htmlFor='firstName'>First name</label>
      <input
        type='text'
        name='firstName'
        id='firstName'
        value={firstName}
        onChange={handleChangeFirstName}
      />
      <button type='submit'>Add</button>
    </form>
  )
}

export default CustomerForm
