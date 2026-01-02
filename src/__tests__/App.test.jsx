import React from 'react'
import { render, screen } from '@testing-library/react'
import App from '../App'

test('has skip link and main landmark', () => {
  render(<App />)
  expect(screen.getByText(/Skip to content/i)).toBeInTheDocument()
  const main = screen.getByRole('main') || document.getElementById('main')
  expect(main).toBeTruthy()
})