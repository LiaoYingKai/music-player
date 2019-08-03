import React from 'react'
import './style.scss'
import banner from '../../images/banner.jpg'
import album from '../../images/album.jpeg'
import add from '../../images/add.png'
import remove from '../../images/remove.png'

function PlayList({match}){
    return (
        <div className="play-list">
            <div className="play-list__banner">
                <img src={banner}></img>
            </div>
            <div className="play-list__container">
                <div className="play-list__title">
                    <img src={album}></img>
                    <div className="play-list__title-container">
                        <div className="play-list__title-top">
                            <div className="play-list__title-name"> { match.params.album } </div>
                            <div className="play-list__title-add"> + 新增至我的專輯</div>
                        </div>
                        <div className="play-list__title-bottom">
                            <div className="play-list__title-description">
                                Youtube 頻道 <br/>
                                於 2019.7.22 創建
                            </div>
                            <div className="play-list__title-play"></div>
                        </div>
                    </div>
                </div>
                <div className="play-list__content">
                    <ul>
                        <li> 
                            <div>1</div>
                            <div>Jazz Apricot</div>
                            <div>1:52</div>
                            <div className="play-list__button-group">
                                <div><img src={add}></img></div>
                                <div><img src={remove}></img></div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default PlayList;