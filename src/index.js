import React from 'react'
import ReactDOM from 'react-dom'
import logger from 'redux-logger'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import musicPlayer from './reduxs'
import './style.scss'
import Layout from './layout'
import thunk from 'redux-thunk';

let store = createStore(
    musicPlayer,
    applyMiddleware(thunk, logger),
)


ReactDOM.render((
    <Provider store={store}>
        <Layout/>
    </Provider>
), document.getElementById('App'))