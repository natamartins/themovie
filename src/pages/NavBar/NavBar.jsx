import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

const NavBar = () => {
    return (
        <nav className='nav-bar'>
            <h1>TheMovies</h1>
            <ul>
                <Link to='/'>home</ Link >
                <Link to='/movies'>TvMovie</Link>
                <Link to='/series'>Movies</Link>
            </ul>
        </nav>
    )
}

export default NavBar