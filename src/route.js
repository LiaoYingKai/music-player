import React from 'react'
import { Route } from 'react-router-dom'
import loadComponent from './lib/loadable'

const PlayList = loadComponent({ loader: () => import('pages/PlayList') })
const MyAlbum = loadComponent({ loader: () => import('pages/MyAlbum') })

function RouteLayout(){
    return (
        <React.Fragment>
            <Route exact path="/" component={MyAlbum}></Route>
            <Route path="/play-list/:album" component={PlayList}></Route>
        </React.Fragment>
    )
}

export default RouteLayout;