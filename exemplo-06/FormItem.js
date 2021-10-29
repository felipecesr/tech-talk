import React from 'react'

const FormItem = ({ label, name, type = 'text' }) => (
  <>
    <label htmlFor={name}>{label}</label>
    <input type={type} id={name} name={name} />
  </>
)

export default FormItem
