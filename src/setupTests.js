import '@testing-library/jest-dom/vitest'

class IO {
  constructor() {}
  observe() {}
  unobserve() {}
  disconnect() {}
}

if (typeof window !== 'undefined' && !window.IntersectionObserver) {
  window.IntersectionObserver = IO
}