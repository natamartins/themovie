import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Movies from '../../components/movies/Movies'
import YouTube from 'react-youtube'
import Footer from '../Footer/Footer'
// teste
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Link } from 'react-router-dom'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: '#000',
    border: '2px solid #000',
    borderRadius: 2,
    boxShadow: 24,
    p: 4,
};

const Home = () => {
    const URL = "https://api.themoviedb.org/3"
    const REACT_API_KEY = "6e559a55d559f685bdb9982b8b159c72"
    const IMG_PATH = "https://image.tmdb.org/t/p/w1280"
    const IMG = "https://image.tmdb.org/t/p/w500"
    // teste
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);



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
    const renderVD = () => {
        const trailer = select.videos.results.find(vid => vid.name === 'Official Trailer')

        return (
            <YouTube videoId={trailer.key} />
        )
    }

    return (
        <>
            <header className='container-headers' >
                <div className='container-bg-headers' >
                    <span style={{ backgroundImage: `url('${IMG_PATH}${select.backdrop_path}')`, opacity: 0.6 }} className="opacityImg" />
                    <div className='nav-bar'>
                        <h1>The Movies</h1>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/movies:">Movies</Link></li>
                            <li><Link to="/tv-series:">TV Series</Link></li>
                        </ul>
                    </div>

                    <div className='box-review'>

                        {/* {
                       select.videos ? renderVD() : null
                       } */}
                        <div>
                            <h1>{select.title}</h1>
                            <p>{select.overview ? select.overview : null}</p>
                            <div>
                                <button onClick={handleOpen}>Open modal</button>
                                <Modal
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                >
                                    <Box sx={style}>
                                        {
                                            select.videos ? renderVD() : null
                                        }
                                    </Box>
                                </Modal>
                            </div>
                        </div>
                        {
                            movies[0] && <img className='img-bg' src={`${IMG}${select.poster_path}`} alt="" />
                        }
                    </div>
                </div>
                <h1 className='tex-movie'>Movies</h1>
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
                <button className='btn-more'>More</button>
            </header>
            <Footer />
        </>
    )
}

export default Home 