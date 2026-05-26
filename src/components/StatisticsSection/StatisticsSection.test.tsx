import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { statisticsSectionData } from '../statisticsSectionData'
import StatisticsSection from './StatisticsSection'

vi.mock('../Statistics/Statistics', () => ({
  default: () => <div data-testid='statistics-content' />,
}))

describe('StatisticsSection', () => {
  it('renders section copy and nested statistics content', () => {
    render(<StatisticsSection data={statisticsSectionData} />)

    expect(
      screen.getByRole('region', {
        name: statisticsSectionData.title,
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: statisticsSectionData.title,
      }),
    ).toBeInTheDocument()
    expect(screen.getByText(statisticsSectionData.eyebrow)).toBeInTheDocument()
    expect(screen.getByText(statisticsSectionData.description)).toBeInTheDocument()
    expect(screen.getByTestId('statistics-content')).toBeInTheDocument()
  })
})
