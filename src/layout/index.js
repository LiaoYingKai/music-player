import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import loadComponent from '../lib/loadable'
import NavBar from './nav-bar'
import SearchBar from './serach-bar'
import PlayerBar from './play-bar'
import './style.scss'

function HomePage(){
    return (
        <div className="home-page">
            <NavBar/>
            <div className="home-page__container">
                <SearchBar/>
                <div className="home-page__content">
                    {
                        // router render
                    }
                </div>
                <PlayerBar/>
            </div>
        </div>
    )
}

export default HomePage