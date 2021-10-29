import React from 'react'
import { render, screen } from '@testing-library/react'
import CustomerForm from './CustomerForm'

describe('CustomerForm', () => {
  it('renders a form', () => {
    const fistname = 'Ashley'
    render(<CustomerForm fistname={fistname} />)
    expect(screen.getByRole('form')).toBeInTheDocument()
  })

  it('renders the first name field', () => {
    const fistname = 'Ashley'
    render(<CustomerForm fistname={fistname} />)
    expect(screen.getByLabelText(/first name/i)).toBeInTheDocument()
  })

  it('has a submit button', () => {
    const fistname = 'Ashley'
    render(<CustomerForm fistname={fistname} />)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})
