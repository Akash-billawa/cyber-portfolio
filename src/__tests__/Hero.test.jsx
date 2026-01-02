import React from 'react'
import { render, screen } from '@testing-library/react'
import Hero from '../components/Hero'

test('hero actions have aria labels', () => {
  render(<Hero />)
  expect(screen.getByRole('link', { name: /View projects/i })).toBeInTheDocument()
  expect(screen.getByRole('link', { name: /Open GitHub profile/i })).toBeInTheDocument()
  expect(screen.getByRole('link', { name: /Open resume/i })).toBeInTheDocument()
})