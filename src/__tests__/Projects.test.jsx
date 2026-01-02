import React from 'react'
import { render, screen } from '@testing-library/react'
import Projects from '../components/Projects'
import { projects } from '../data/content'

test('project images are lazy-loaded', () => {
  const { container } = render(<Projects />)
  const lazyImages = container.querySelectorAll('img[loading="lazy"]')
  expect(lazyImages.length).toBeGreaterThan(0)
})

test('renders projects as an accessible list', () => {
  render(<Projects />)
  const list = screen.getByRole('list', { name: /Projects list/i })
  const items = list.querySelectorAll(':scope > li')
  expect(items.length).toBe(projects.length)
})

test('source code links have proper attributes and labels', () => {
  render(<Projects />)
  projects.filter(p => p.github !== '#').forEach((p) => {
    const links = screen.getAllByRole('link', { name: /Source Code/i })
    const link = links.find(l => l.getAttribute('aria-describedby') === `project-desc-${p.id}`)
    expect(link).toBeTruthy()
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', expect.stringContaining('noopener'))
  })
})

test('live demo link is conditionally rendered', () => {
  render(<Projects />)
  projects.forEach((p) => {
    const demoName = new RegExp(`Open ${p.title} live demo`, 'i')
    if (p.demo === '#') {
      expect(screen.queryByRole('link', { name: demoName })).toBeNull()
    } else {
      expect(screen.getByRole('link', { name: demoName })).toBeInTheDocument()
    }
  })
})