import './App.css'
import Experience from './components/Experience/Experience'
import Homepage from './components/Homepage/Homepage'
import Navbar from './components/Navbar/Navbar'
import Projects from './components/Projects/Projects'
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton'
import TechStack from './components/TechStack/TechStack'

function App() {

  return (
    <div className='app'>
      <Navbar />
      <Homepage />
      <TechStack />
      <Experience />
      <Projects />
      <ScrollToTopButton />
    </div>
  )
}

export default App
