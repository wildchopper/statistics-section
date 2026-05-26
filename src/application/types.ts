export interface Statistic {
  name: string
  value: number
}

export type StatisticsState = 'empty' | 'error' | 'filled' | 'loading'
