import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'
import Movies from '../movies/Movies'

const NavBar = () => {
    return (
        <>
            <nav className='nav-bar'>
                <span className='bg' />
                <h1>The Movies</h1>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/movies:">Movies</Link></li>
                    <li><Link to="/tv-series:">TV Series</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar