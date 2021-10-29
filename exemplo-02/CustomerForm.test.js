import React from 'react'
import { render, screen } from '@testing-library/react'
import CustomerForm from './CustomerForm'

describe('CustomerForm', () => {
  it('renders a form', () => {
    const firstname = 'Ashley'
    render(<CustomerForm firstname={firstname} />)
    expect(screen.getByRole('form')).toBeInTheDocument()
  })

  it('renders the first name field', () => {
    const firstname = 'Ashley'
    render(<CustomerForm firstname={firstname} />)
    expect(screen.getByLabelText(/first name/i)).toBeInTheDocument()
  })

  it('has a submit button', () => {
    const firstname = 'Ashley'
    render(<CustomerForm firstname={firstname} />)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})
