import { useEffect } from "react"
import { useState } from "react"

interface Statistics {
    metric: string
    value: number
    name: string
}

interface StatisticsData {
    metric: string
    value: number
}

type StatisticsState = 'empty' | 'error' | 'filled' | 'loading'

const statisticsNames = ['Downloads', 'Paid users', 'Images in library']

export const useStatistics = () => {
    const [statistics, setStatistics] = useState<Statistics[]>([])
    const [statisticsState, setStatisticsState] = useState<StatisticsState>('empty')
    
    useEffect(() => {
        const getStatistics = async () => {
            setStatisticsState('loading')
            const response = await fetch('https://www.greatfrontend.com/api/projects/challenges/statistics-metrics', {
                method: 'GET'
            })
        
            if(!response.ok) {
                setStatisticsState('error')
                throw new Error(response.statusText)
            }
            const statisticsData = await response.json()
            setStatistics(statisticsData.data.map((stat: StatisticsData, index: number) => {
                return {
                    name: statisticsNames[index],
                    ...stat,
                }
            }))
            setStatisticsState('filled')
        }
        getStatistics()
    }, [])

    return {
        statistics,
        statisticsState
    }
    
}