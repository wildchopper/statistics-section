import { render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { statisticsSectionData } from '../statisticsSectionData'
import Statistics from './Statistics'

const statisticsData = statisticsSectionData.statistics

describe('Statistics', () => {
  beforeEach(() => {
    vi.spyOn(console, 'log').mockImplementation(() => undefined)
  })

  afterEach(() => {
    vi.restoreAllMocks()
    vi.unstubAllGlobals()
  })

  it('renders loading state before the request resolves', () => {
    vi.stubGlobal('fetch', vi.fn(() => new Promise(() => undefined)))

    render(<Statistics data={statisticsData} />)

    expect(screen.getByRole('status')).toHaveTextContent('Loading...')
  })

  it('renders fetched statistics with labels from section data', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue(
        new Response(
          JSON.stringify({
            data: [
              { metric: 'downloads', value: 12000 },
              { metric: 'paid_users', value: 350 },
              { metric: 'library_images', value: 8400 },
            ],
          }),
          {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
          },
        ),
      ),
    )

    render(<Statistics data={statisticsData} />)

    expect(await screen.findByText('Downloads')).toBeInTheDocument()
    expect(screen.getByText('Paid users')).toBeInTheDocument()
    expect(screen.getByText('Images in library')).toBeInTheDocument()
    expect(screen.getByText('12000')).toBeInTheDocument()
    expect(screen.getAllByRole('listitem')).toHaveLength(3)
  })

  it('renders an alert when the request fails', async () => {
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('Network error')))

    render(<Statistics data={statisticsData} />)

    expect(await screen.findByRole('alert')).toHaveTextContent(
      'An error occured while getting statistics',
    )
  })
})
