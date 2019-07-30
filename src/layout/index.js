import React from 'react'
import { BrowserRouter as Router, } from 'react-router-dom'
import NavBar from './nav-bar'
import SearchBar from './serach-bar'
import PlayerBar from './play-bar'
import RouteLayout from '../route'
import './style.scss'

function HomePage(){
    return (
        <Router>
            <div className="home-page">
                <NavBar/>
                <div className="home-page__container">
                    <SearchBar/>
                    <div className="home-page__content">
                        <RouteLayout/>
                    </div>
                    <PlayerBar/>
                </div>
            </div>
        </Router>
    )
}

export default HomePage