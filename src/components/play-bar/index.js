import React from 'react'
import './style.scss'
import Repeat from '../../svg_icon/repeat'
import Next from '../../svg_icon/next'
import Shuffle from '../../svg_icon/shuffle'
import Previous from '../../svg_icon/previous'
import Start from '../../svg_icon/start'
import Stop from '../../svg_icon/stop'

function PlayerBar(){
    return (
        <div className="play-bar">
            <Repeat/>
            <Next/>
            <Shuffle/>
            <Previous/>
            <Start/>
            <Stop/>

        </div>
    )
}

export default PlayerBar