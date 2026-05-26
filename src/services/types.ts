export type StatisticMetric = 'downloads' | 'paid_users' | 'library_images'

export interface StatisticResponse {
  metric: StatisticMetric
  value: number
}

export interface StatisticsApiResponse {
  data: StatisticResponse[]
}

export type StatisticsMetricLabels = Record<StatisticMetric, string>
