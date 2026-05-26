import { useEffect, useState } from 'react'
import { fetchStatistics } from '../services/fetch-statistics'
import type { StatisticsMetricLabels, StatisticResponse } from '../services/types'
import type { Statistic, StatisticsState } from './types'

export const useStatistics = (metricLabels: StatisticsMetricLabels) => {
  const [statistics, setStatistics] = useState<Statistic[]>([])
  const [statisticsState, setStatisticsState] =
    useState<StatisticsState>('empty')

  useEffect(() => {
    const loadStatistics = async () => {
      setStatisticsState('loading')

      try {
        const response = await fetchStatistics()

        if (response.data.length > 0) {
          setStatistics(
            response.data.map((stat: StatisticResponse) => ({
              name: metricLabels[stat.metric],
              value: stat.value,
            })),
          )
          setStatisticsState('filled')
        } else {
          setStatisticsState('empty')
          setStatistics([])
        }
      } catch (e) {
        console.log(e)
        setStatisticsState('error')
        setStatistics([])
      }
    }

    loadStatistics()
  }, [metricLabels])

  return {
    statistics,
    statisticsState,
  }
}
