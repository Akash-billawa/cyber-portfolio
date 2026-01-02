import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Navbar from '../components/Navbar'

test('renders primary navigation landmark and links', () => {
  render(<Navbar />)
  const nav = screen.getByRole('navigation', { name: /primary/i })
  expect(nav).toBeInTheDocument()
  expect(screen.getByText(/About/i)).toBeInTheDocument()
  expect(screen.getByText(/Projects/i)).toBeInTheDocument()
  expect(screen.getByText(/Skills/i)).toBeInTheDocument()
  expect(screen.getByText(/Contact/i)).toBeInTheDocument()
})

test('mobile menu toggles with aria-expanded and closes on Escape', () => {
  render(<Navbar />)
  const toggle = screen.getByRole('button', { name: /open menu/i })
  fireEvent.click(toggle)
  expect(toggle).toHaveAttribute('aria-expanded', 'true')
  expect(screen.getAllByText(/About/i).length).toBeGreaterThan(0)
  fireEvent.keyDown(toggle, { key: 'Escape' })
  expect(toggle).toHaveAttribute('aria-expanded', 'false')
})