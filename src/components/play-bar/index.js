import React from 'react'
import './style.scss'
import Repeat from '../../svg_icon/repeat'
import Next from '../../svg_icon/next'
import Shuffle from '../../svg_icon/shuffle'
import Previous from '../../svg_icon/previous'
import Start from '../../svg_icon/start'
import Stop from '../../svg_icon/stop'

function PlayerBar(){
    const style = {width: '36px',height: '36px',marginLeft: '36px'}
    return (
        <div className="play-bar">
            <div className="play-bar__progress">
                <div className="play-bar__progress--current">
                    <span className="play-bar__progress-button"></span>
                </div>
            </div>
            <div className="play-bar__options">
                <Shuffle style={style}/>
                <Previous style={style}/>
                <Start style={{width: '48px',height: '48px',marginLeft: '36px'}}/>
                <Next style={style}/>
                <Repeat style={style}/>
            </div>  
        </div>
    )
}

export default PlayerBar