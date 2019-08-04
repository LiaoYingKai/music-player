import React, {Component, } from 'react'
import album from "../../images/album.jpeg"
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import { getUserAlbum } from '../../actions/user-album-actions'
import './style.scss'
console.log(getUserAlbum)
class NavBar extends Component{
    constructor(){
        super()
        this._renderList = this._renderList.bind(this)
    }
    _renderList(){
        const { musicList } = this.props
        console.log(musicList)
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
    componentDidMount(){
        const { getUserAlbum } = this.props
        console.log(getUserAlbum)
        getUserAlbum()
    }
}

function mapStateToProps(state){
    console.log(state)
    return {
        musicList: state.userAlbum,
    }
}
function mapDispatchToProps(dispatch){
    return  {
        getUserAlbum: () => { dispatch(getUserAlbum()) }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NavBar)