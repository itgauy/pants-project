import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'

//components
import Navbar from './components/navbar'
import Footer from './components/Footer'

// pages
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import HTP from './pages/HowToPlay'

//style
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <div className="pages">
            <Routes>
              <Route
                path="/"
                element={<Home />}
              />
              <Route
                path="/about-us"
                element={<AboutUs />}
              />
              <Route
                path="/htp"
                element={<HTP />}
              />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
