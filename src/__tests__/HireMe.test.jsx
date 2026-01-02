import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import App from '../App'

Element.prototype.scrollIntoView = vi.fn()

test('Hire Me smooth-scrolls and focuses name input', async () => {
  render(<App />)
  const hireLink = screen.getByRole('link', { name: /Hire me/i })
  fireEvent.click(hireLink)
  const nameInput = screen.getByPlaceholderText(/Enter your name/i)
  await waitFor(() => expect(document.activeElement).toBe(nameInput))
})