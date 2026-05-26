import { afterEach, describe, expect, it, vi } from 'vitest'
import { fetchStatistics } from './fetch-statistics'

describe('fetchStatistics', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('fetches statistics metrics from the API', async () => {
    const responseData = {
      data: [{ metric: 'downloads', value: 12000 }],
    }
    const fetchMock = vi.fn().mockResolvedValue(
      new Response(JSON.stringify(responseData), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }),
    )

    vi.stubGlobal('fetch', fetchMock)

    await expect(fetchStatistics()).resolves.toEqual(responseData)
    expect(fetchMock).toHaveBeenCalledWith(
      'https://www.greatfrontend.com/api/projects/challenges/statistics-metrics',
      { method: 'GET' },
    )
  })

  it('throws when the API response is not ok', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue(new Response(null, { status: 500 })),
    )

    await expect(fetchStatistics()).rejects.toThrow()
  })
})
