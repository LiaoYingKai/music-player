import React from 'react'
import { HashRouter as Router, } from 'react-router-dom'
import NavBar from '../components/nav-bar'
import SearchBar from '../components/search-bar'
import PlayerBar from '../components/play-bar'
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