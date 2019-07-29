import React from 'react'
import ReactDOM from 'react-dom'
import logger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import redux from './redux'
import './style.scss'
import Layout from './layout'

// let store = createStore(
//     redux,
//     applyMiddleware(logger)
// )

// ReactDOM.render((
// <Provider store={store}>
//     <Router>
//         <Route path="/" component={Layout}></Route>
//     </Router>
// </Provider>
// ), document.getElementById('App'))

ReactDOM.render((
    <Layout/>
), document.getElementById('App'))