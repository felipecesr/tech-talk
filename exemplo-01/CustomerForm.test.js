import React from 'react'
import { render, screen } from '@testing-library/react'
import CustomerForm from './CustomerForm'

describe('CustomerForm', () => {
  it('renders a form', () => {
    const firstname = 'Ashley'
    render(<CustomerForm firstname={firstname} />)
    expect(screen.getByRole('form')).toBeInTheDocument()
  })
})
