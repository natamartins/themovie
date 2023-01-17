import React, { useEffect, useState } from 'react'
import IMG01 from '../../imgs/images.jpg'
import IMG from '../../imgs/Dragon.jpg'
import './styles.css'
import Movies from '../../components/movies/Movies'
import axios from 'axios'

const Home = () => {
    const URL = "https://api.themoviedb.org/3"
    const REACT_API_KEY = "6e559a55d559f685bdb9982b8b159c72"
    const [select, setSelect] = useState()
    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState('')

    const fetchMovies = async (search) => {
        const type = search ? "search" : "discover"
        const { data: { results } } = await axios.get(`${URL}/${type}/movie`, {
            params: {
                api_key: REACT_API_KEY,
                query: search
            }
        })
        console.log(results)
        setMovies(results)
    }

    useEffect(() => {
        fetchMovies()
    }, [])

    const serhMvies = (e) => {
        e.preventDefault()
        fetchMovies(search)

    }


    return (
        <header className='container-headers'>
            <div className='bg-home'>
                <div className='bg-img-t' />
                <div className='bg-home-img'>
                    <img src={IMG} alt="" />
                </div>
                <div className='bg-home-title'>
                    <h1>Dragon Baal Super</h1>
                    <p>Dragon Ball é uma franquia de mídia japonesa criada por Akira Toriyama. Originalmente iniciada com uma série de mangá escrita e ilustrada por Toriyama, foi serializada em capítulos na revista Weekly Shonen Jump de 1984 a 1995. Os 519 capítulos foram compilados em 42 volumes tankōbon e publicados pela editora Shueisha</p>
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
                            <Movies movie={movie} />
                        ))
                    }
                </div>
            </div>
        </header>
    )
}

export default Home