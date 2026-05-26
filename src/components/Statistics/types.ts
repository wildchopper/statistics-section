import type { StatisticsState } from '../../application/types'
import type { StatisticsMetricLabels } from '../../services/types'

export interface StatisticsContentData {
  subheader: string
  imageAlt: string
  statusText: Record<Exclude<StatisticsState, 'filled'>, string>
  metricLabels: StatisticsMetricLabels
}

export interface StatisticsProps {
  data: StatisticsContentData
}

export interface StatCardProps {
  value: number
  name: string
}
