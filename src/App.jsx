import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Movies from './components/movies/Movies'
// import YouTube from 'react-youtube'
import Footer from './pages/Footer/Footer'

const App = () => {
  const URL = "https://api.themoviedb.org/3"
  const REACT_API_KEY = "6e559a55d559f685bdb9982b8b159c72"
  const IMG_PATH = "https://image.tmdb.org/t/p/w1280"
  const IMG = "https://image.tmdb.org/t/p/w500"


  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('')
  const [select, setSelect] = useState({})

  const fetchMovies = async (search) => {
    const type = search ? "search" : "discover"
    const { data: { results } } = await axios.get(`${URL}/${type}/movie`, {
      params: {
        api_key: REACT_API_KEY,
        query: search
      }
    })

    setSelect(results[0])
    setMovies(results)
  }

  useEffect(() => {
    fetchMovies()

  }, [])

  const serhMvies = (e) => {
    e.preventDefault()
    fetchMovies(search)

  }

  const fetcVideo = async (id) => {
    const { data } = await axios.get(`${URL}/movie/${id}`, {
      params: {
        api_key: REACT_API_KEY,
        append_to_response: 'videos'
      }
    })

    return data
  }

  const selectMovies = async (movie) => {
    const data = await fetcVideo(movie.id)
    console.log(data)
    setSelect(data)
  }
  //render video in youtube
  // const renderVD = () => {
  //   const trailer = select.videos.results.find(vid => vid.name === 'Official Trailer')
  //   console.log('select ===>', trailer)
  //   return (
  //     <YouTube videoId={trailer.key} />
  //   )
  // }
  console.log(movies[0])
  return (
    <>
      <header className='container-headers' >
        <div className='container-bg-headers' >
          <span style={{ backgroundImage: `url('${IMG_PATH}${select.backdrop_path}')`, opacity: 0.6 }} className="opacityImg" />
          <div className='nav-bar'>
            <h1>The Movies</h1>
            <ul>
              <li>Catrgory</li>
              <li>Series</li>
              <li>TvMovies</li>
            </ul>
          </div>

          <div className='box-review'>
            {/* {
              select.videos ? renderVD() : null
            } */}
            <div>
              <h1>{select.title}</h1>
              <p>{select.overview ? select.overview : null}</p>
            </div>
            {
              movies[0] && <img className='img-bg' src={`${IMG}${select.poster_path}`} alt="" />
            }
          </div>
        </div>
        <div className='bg-home-list'>
          <form onSubmit={serhMvies}>
            <input type="text" onChange={(e) => setSearch(e.target.value)} />
            <button type={"submit"} >Search</button>
          </form>
          <div className='container'>
            {
              movies.map(movie => (
                <Movies movie={movie} selectMovie={selectMovies} />
              ))
            }
          </div>
        </div>
      </header>
      <Footer />
    </>
  )
}

export default App