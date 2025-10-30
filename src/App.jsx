import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import Biography from './components/Biography/Biography.jsx'
import PoetryHero from './components/PoetryHero/PoetryHero.jsx'
import PoetryWork from './components/PoetryWork/PoetryWork.jsx'
import ProseHero from './components/ProseHero/ProseHero.jsx'
import ProseWork from './components/ProseWork/ProseWork.jsx'
import Footer from './components/Footer/Footer.jsx'
import Prune from './Pages/PrunePage.jsx'
import ContactPage from './Pages/ContactPage.jsx'
import TheUnwrappingPage from './Pages/TheUnwrappingPage.jsx'
import PrunePage from './Pages/PrunePage.jsx'
import './App.css'


function App() {
  return (
    <Router>
      <div className='text-sm md:text-lg'>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero/>
              <Biography/>
              <PoetryHero/>
              <PoetryWork/>
              <ProseHero/>
              <ProseWork/>
            </>
          } />
          <Route path="/prune" element={<Prune />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/the-unwrapping" element={<TheUnwrappingPage />} />
          <Route path="/prune" element={<PrunePage />} />

        </Routes>
        <Footer/>
      </div>
    </Router>
  )
}

export default App
