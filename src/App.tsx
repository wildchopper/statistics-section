import './App.css'
import Credits from './components/Credits/Credits'
import StatisticsSection from './components/StatisticsSection/StatisticsSection'
import { statisticsSectionData } from './components/statisticsSectionData'

export default function App() {
  return (
    <>
      <main className='main-wrapper'>
        <StatisticsSection data={statisticsSectionData} />
      </main>
      <footer>
        <Credits />
      </footer>
    </>
  )
}