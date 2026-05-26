import { render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import App from './App'

describe('App', () => {
  beforeEach(() => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue(
        new Response(JSON.stringify({ data: [] }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        }),
      ),
    )
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('renders the statistics section content and credits', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /more than premium abstract imagery/i,
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('region', {
        name: /more than premium abstract imagery/i,
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('img', {
        name: /white abstract geometric blocks/i,
      }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /greatfrontend projects/i }))
      .toHaveAttribute('href', expect.stringContaining('greatfrontend.com'))
    expect(screen.getByRole('link', { name: /andrei tolstorebrov/i }))
      .toHaveAttribute('href', expect.stringContaining('wildchopper'))
  })
})
