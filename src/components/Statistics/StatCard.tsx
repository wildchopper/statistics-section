import './StatCard.css'
import type { StatCardProps } from './types'

const numberFormatter = new Intl.NumberFormat('en-US')

export default function StatCard({ value, name }: StatCardProps) {
  return (
    <li className='statistics-content__stats-item'>
      <span className='statistics-content__stat'>
        {numberFormatter.format(value)}
      </span>
      <h3 className='statistics-content__stat-header'>{name}</h3>
    </li>
  )
}
