import React from 'react'
import ReactDOM from 'react-dom'
import logger from 'redux-logger'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import musicPlayer from './reduxs'
import './style.scss'
import Layout from './layout'

let store = createStore(
    musicPlayer,
    applyMiddleware(logger)
)


ReactDOM.render((
    <Provider store={store}>
        <Layout/>
    </Provider>
), document.getElementById('App'))