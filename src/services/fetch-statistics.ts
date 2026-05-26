import type { StatisticsApiResponse } from './types'

export const fetchStatistics = async (): Promise<StatisticsApiResponse> => {
  const response = await fetch(
    'https://www.greatfrontend.com/api/projects/challenges/statistics-metrics',
    {
      method: 'GET',
    },
  )

  if (!response.ok) {
    throw new Error(response.statusText)
  }

  return response.json()
}
