import React from 'react'
import serachIcon from '../../images/search.png'
import './style.scss'
function SearchBar(){
    return (
        <div className="search-bar">
            <div className="search-bar__search-input">
                <img src={serachIcon} alt=""/>
                <input type="text"></input>
            </div>
            <div className="search-bar__user">
                <div></div>
                <p>Liao Kai</p>
            </div>
        </div>
    )
}

export default SearchBar