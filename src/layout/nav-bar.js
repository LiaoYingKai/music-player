import React, {Component, } from 'react'

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
                <div>

                </div>
            </div>
        )
    }
}

export default NavBar