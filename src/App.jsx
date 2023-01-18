import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Movie from "./pages/CardMovie/Movie"
import TvSeries from './pages/tvSeries/TvSeries'
import Home from "./pages/home/Home"


const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies:" element={<Movie />} />
        <Route path="/tv-series:" element={<TvSeries />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App