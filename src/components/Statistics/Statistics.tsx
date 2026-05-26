import './Statistics.css'
import { useStatistics } from '../../application/get-statistics'
import blocks from '../../assets/white-blocks.png'
import StatCard from './StatCard'
import type { StatisticsProps } from './types'

export default function Statistics({ data }: StatisticsProps) {
  const { statistics, statisticsState } = useStatistics(data.metricLabels)
  const hasStatistics = statisticsState === 'filled'

  const statusText = {
    loading: data.statusText.loading,
    error: data.statusText.error,
    empty: data.statusText.empty,
  }

  return (
    <div className='statistics-content'>
      <img
        className='statistics-content__image'
        src={blocks}
        alt={data.imageAlt}
        width='592'
        height='544'
        decoding='async'
        loading='eager'
      />
      <div className='statistics-content__stats-list'>
        <h2 className='statistics-content__subheader'>{data.subheader}</h2>
        {hasStatistics ? (
          <ul className='statistics-content__stats'>
            {statistics.map((stat) => (
              <StatCard {...stat} key={stat.name} />
            ))}
          </ul>
        ) : (
          <p
            className='statistics-content__status'
            role={statisticsState === 'error' ? 'alert' : 'status'}
          >
            {statusText[statisticsState]}
          </p>
        )}
      </div>
    </div>
  )
}
