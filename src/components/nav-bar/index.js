import React, {Component, } from 'react'
import album from "../../images/album.jpeg"
import { Link, NavLink } from 'react-router-dom';
import './style.scss'
class NavBar extends Component{
    constructor(){
        super()
        this._renderList = this._renderList.bind(this)
    }
    _renderList(){
        const musicList = [ 'Jessica', 'YouTube Music', 'November', 'Space Hunter', 'The Path Starts', 'If I Had a Chicken' ]
        return (
            musicList.map(item => {
                return(
                    <li key={item}>
                        <NavLink to={`/play-list/${item}`}>{item}</NavLink>
                    </li>
                )
            })
        )
    }
    render(){
        const { _renderList } = this
        return (
            <div className="nav-bar">
                <div className="nav-bar__my-album">
                    <Link to="/">
                        我的專輯<button> + </button>
                    </Link>
                </div>
                <ul>
                    {_renderList()}
                </ul>
                <div className="nav-bar__playing-album" >
                    <img src={album}></img>
                    <div className="nav-bar__playing-album-title"> 現在播放 </div>
                </div>
            </div>
        )
    }
}

export default NavBar