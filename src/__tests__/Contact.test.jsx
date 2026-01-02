import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import Contact from '../components/Contact'

test('shows validation messages on empty submit', async () => {
  render(<Contact />)
  const submit = screen.getByRole('button', { name: /send message/i })
  fireEvent.click(submit)
  expect(await screen.findByText(/Name is required/i)).toBeInTheDocument()
  expect(await screen.findByText(/Email is required/i)).toBeInTheDocument()
  expect(await screen.findByText(/Message is required/i)).toBeInTheDocument()
})

test('submits form and shows success message', async () => {
  render(<Contact />)
  fireEvent.change(screen.getByPlaceholderText(/Enter your name/i), { target: { value: 'John' } })
  fireEvent.change(screen.getByPlaceholderText(/Enter your email/i), { target: { value: 'john@example.com' } })
  fireEvent.change(screen.getByPlaceholderText(/Enter your message/i), { target: { value: 'Hello' } })
  const submit = screen.getByRole('button', { name: /send message/i })
  fireEvent.click(submit)
  await waitFor(() => expect(screen.getAllByText(/Message sent successfully/i).length).toBeGreaterThan(0), { timeout: 2500 })
})

test('invalid email shows red border and shake', async () => {
  render(<Contact />)
  fireEvent.change(screen.getByPlaceholderText(/Enter your name/i), { target: { value: 'John' } })
  fireEvent.change(screen.getByPlaceholderText(/Enter your email/i), { target: { value: 'not-an-email' } })
  fireEvent.change(screen.getByPlaceholderText(/Enter your message/i), { target: { value: 'Hello' } })
  const submit = screen.getByRole('button', { name: /send message/i })
  fireEvent.click(submit)
  const emailInput = screen.getByPlaceholderText(/Enter your email/i)
  expect(await screen.findByText(/Enter a valid email/i)).toBeInTheDocument()
  expect(emailInput.className).toEqual(expect.stringContaining('border-error-strong'))
})