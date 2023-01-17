import React from 'react'
import './styles.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-bg' />
            <h1>The Movies</h1>
            <div className='container-list'>
                <ul>
                    <li>Home</li>
                    <li>Contact us</li>
                    <li>Term of services</li>
                    <li>Abkout us</li>
                </ul>
                <ul>
                    <li>Live</li>
                    <li>FAQ</li>
                    <li>Premiun</li>
                    <li>Privacy policy</li>
                </ul>
                <ul>
                    <li>You must watch</li>
                    <li>Recent release</li>
                    <li>Top IMDB</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer