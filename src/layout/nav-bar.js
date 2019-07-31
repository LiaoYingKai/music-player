import React, {Component, } from 'react'
import album from "../images/album.jpeg"
class NavBar extends Component{
    constructor(){
        super()
        this._renderList = this._renderList.bind(this)
    }
    _renderList(){
        const musicList = [ 'Jessica', 'YouTube Music', 'November', 'Space Hunter', 'The Path Starts Here', 'If I Had a Chicken' ]
        return (
            musicList.map(item =><li key={item}>{item}</li>)
        )
    }
    render(){
        const { _renderList } = this
        return (
            <div className="nav-bar">
                <div className="nav-bar__my-album">
                    我的專輯<button> + </button>
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