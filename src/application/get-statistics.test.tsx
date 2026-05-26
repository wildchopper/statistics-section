import { render, screen, waitFor } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { useStatistics } from './get-statistics'
import type { StatisticsMetricLabels } from '../services/types'

const metricLabels: StatisticsMetricLabels = {
  downloads: 'Downloads',
  paid_users: 'Paid users',
  library_images: 'Images in library',
}

function StatisticsHookProbe() {
  const { statistics, statisticsState } = useStatistics(metricLabels)

  return (
    <output>
      {statisticsState}:{statistics.map((stat) => stat.name).join(',')}
    </output>
  )
}

describe('useStatistics', () => {
  afterEach(() => {
    vi.restoreAllMocks()
    vi.unstubAllGlobals()
  })

  it('maps API metrics to labeled statistics', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue(
        new Response(
          JSON.stringify({
            data: [
              { metric: 'downloads', value: 12000 },
              { metric: 'paid_users', value: 350 },
            ],
          }),
          {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
          },
        ),
      ),
    )

    render(<StatisticsHookProbe />)

    expect(screen.getByText(/^loading:/)).toBeInTheDocument()

    await waitFor(() => {
      expect(screen.getByText('filled:Downloads,Paid users')).toBeInTheDocument()
    })
  })

  it('sets empty state when API returns no data', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue(
        new Response(JSON.stringify({ data: [] }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        }),
      ),
    )

    render(<StatisticsHookProbe />)

    await waitFor(() => {
      expect(screen.getByText('empty:')).toBeInTheDocument()
    })
  })

  it('sets error state when API request fails', async () => {
    vi.spyOn(console, 'log').mockImplementation(() => undefined)
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('Network error')))

    render(<StatisticsHookProbe />)

    await waitFor(() => {
      expect(screen.getByText('error:')).toBeInTheDocument()
    })
  })
})
