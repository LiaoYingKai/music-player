import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import loadComponent from './lib/loadable'

const PlayList = loadComponent({ loader: () => import('pages/PlayList') })
const YoutubeList = loadComponent({ loader: () => import('pages/YoutubeList') })

function RouteLayout(){
    return (
        <Switch>
            <Route path="/" component={PlayList}></Route>
            <Route path="/youtubeList" component={YoutubeList}></Route>
        </Switch>
    )
}

export default RouteLayout;