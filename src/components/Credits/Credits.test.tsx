import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Credits from './Credits'

describe('Credits', () => {
  it('renders challenge and author links', () => {
    render(<Credits />)

    expect(screen.getByRole('link', { name: /greatfrontend projects/i }))
      .toHaveAttribute('target', '_blank')
    expect(screen.getByRole('link', { name: /greatfrontend projects/i }))
      .toHaveAttribute('rel', 'noreferrer')
    expect(screen.getByRole('link', { name: /andrei tolstorebrov/i }))
      .toHaveAttribute('href', expect.stringContaining('wildchopper'))
  })
})
