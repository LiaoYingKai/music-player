import React from 'react'
import './style.scss'
import banner from '../../images/banner.jpg'

function PlayList(){
    return (
        <div className="play-list">
            <div className="play-list__banner">
                <img src={banner}></img>
            </div>
            <div className="play-list__container">
                <div className="play-list__title">
                    <img></img>
                    <div className="play-list__title-container">
                        <div className="play-list__title-top">
                            <div className="play-list__title-name"> Youtube Music </div>
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
                        <li></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default PlayList;