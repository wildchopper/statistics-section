import './App.css'
import blocks from './assets/white-blocks.png'
import { useStatistics } from './services/statistics-api-adapter'


function App() {
  const {statistics, statisticsState} = useStatistics()
  const statisticsList = {
    'loading': 'Loading...',
    'filled': statistics.map(stat => {
                return (
                  <li className='statistics-content__stats-item'>
                    <span className='statistics-content__stats-item'>{stat.value}</span>
                    <h3 className='statistics-content__stat-header'>{stat.name}</h3>
                  </li>
                )}),
    'error': 'An error occured while getting stats'
  }
  return (
    <>
    <main className='main-wrapper'>
      <section className='statistics-section'>
        <div className='statistics-header'>
          <div className='statistics-header__titles'>
            <p className='statistics-header__eyebrow'>Statistics</p>
            <h1 className='statistics-header__title'>More than premium abstract imagery</h1>
          </div>
          <p className='statistics-header__description'>Our platform is more than just as a service to us – it is a catalyst for enriching lives through premium abstract imagery.</p>
        </div>
        <div className='statistics-content'>
          <img className='statistics-content__image' src={blocks}/>
          <div className='statistics-content__stats-list'>
            <h2 className='statistics-content__subheader'>Our mission, in numbers</h2>
            <ul className='statistics-content__stats'>
              {statisticsList[statisticsState]}
            </ul>
          </div>
        </div>
      </section>
    </main>
    <footer>
      <div className="credits">
        A challenge by
        <a
          href="https://www.greatfrontend.com/projects?ref=challenges"
          target="_blank"
          >GreatFrontEnd Projects</a>. Built by
        <a href="https://www.greatfrontend.com/u/your_username" target="_blank"
          >Your Name</a>.
      </div>
    </footer>
    </>
  )
}

export default App
