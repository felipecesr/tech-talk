import React from 'react'
import { render, screen } from '@testing-library/react'
import CustomerForm from './CustomerForm'

describe('CustomerForm', () => {
  it('renders a form', () => {
    const fistname = 'Ashley'
    render(<CustomerForm fistname={fistname} />)
    expect(screen.getByRole('form')).toBeInTheDocument()
  })
})
