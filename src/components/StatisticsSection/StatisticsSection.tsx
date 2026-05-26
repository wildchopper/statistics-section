import './StatisticsSection.css'
import type { StatisticsSectionData } from './types'
import Statistics from '../Statistics/Statistics'

interface StatisticsSectionProps {
  data: StatisticsSectionData
}

export default function StatisticsSection({ data }: StatisticsSectionProps) {
  return (
    <section className='statistics-section' aria-labelledby='statistics-title'>
      <div className='statistics-header'>
        <div className='statistics-header__titles'>
          <p className='statistics-header__eyebrow'>{data.eyebrow}</p>
          <h1 className='statistics-header__title' id='statistics-title'>
            {data.title}
          </h1>
        </div>
        <p className='statistics-header__description'>{data.description}</p>
      </div>
      <Statistics data={data.statistics} />
    </section>
  )
}
