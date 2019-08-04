import React, {Component, } from 'react'
import album from "../../images/album.jpeg"
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import { getUserAlbumList, getAlbum } from '../../actions/user-album-actions'
import './style.scss'
class NavBar extends Component{
    constructor(){
        super()
        this._renderList = this._renderList.bind(this)
    }
    _renderList(){
        const { musicList } = this.props
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
        const { getUserAlbumList, getAlbum } = this.props
        getUserAlbumList()
        getAlbum()
    }
}

function mapStateToProps(state){
    return {
        musicList: state.userAlbum.userAlbumList || [],
    }
}
function mapDispatchToProps(dispatch){
    return  {
        getUserAlbumList: () => { dispatch(getUserAlbumList()) },
        getAlbum: () => {dispatch(getAlbum())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NavBar)