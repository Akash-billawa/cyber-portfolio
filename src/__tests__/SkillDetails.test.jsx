import React from 'react'
import { skillDetails } from '../data/content'

test('Nmap skill details include required fields', () => {
  const nmap = skillDetails.find(s => s.name === 'Nmap')
  expect(nmap).toBeTruthy()
  expect(nmap.category).toBe('Network Security')
  expect(nmap.level).toBe('Expert')
  expect(nmap.description).toMatch(/Network scanning/)
  expect(nmap.projects.length).toBeGreaterThan(0)
  expect(['certificate','project_evidence','testing']).toContain(nmap.verification.method)
  expect(() => new Date(nmap.lastUsed).toISOString()).not.toThrow()
})