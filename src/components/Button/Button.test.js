/* eslint-disable no-undef */
import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from './Button'

describe('Button Component', () => {
  it('renders the correct text', () => {
    render(<Button variant='primary' text='Click Me' />)
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument()
  })

  it('calls the onClick handler when clicked', async () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Click Me</Button>)
    const button = screen.getByRole('button')
    await userEvent.click(button)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
