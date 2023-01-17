import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './pages/Footer/Footer'
import NavBar from './pages/NavBar/NavBar'
import Home from './pages/home/Home'
import Movies from './components/movies/Movies.jsx'
import Seires from './components/seires/Seires'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/series' element={<Seires />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App