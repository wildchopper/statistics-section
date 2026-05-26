import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import StatCard from './StatCard'

describe('StatCard', () => {
  it('renders statistic value and name', () => {
    render(<StatCard value={12000} name='Downloads' />)

    expect(screen.getByRole('listitem')).toBeInTheDocument()
    expect(screen.getByText('12000')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: 'Downloads' }),
    ).toBeInTheDocument()
  })
})
