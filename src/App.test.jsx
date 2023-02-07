import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import logger from './logger'

import App from './App'

window.logger = logger
describe('App', () => {
  it('App includes dreamchasers title', () => {
    render(<App />)
    expect(screen.getByText('Dreamchasers')).toBeInTheDocument()
  })
})
