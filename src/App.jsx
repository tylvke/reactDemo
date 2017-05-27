import React ,{Component,PropTypes} from 'react'
import ReactDom from 'react-dom'
import {Provider} from 'react-redux'
import route from './routes'
import store from './redux/Store/Store'
import './style/app.scss'

ReactDom.render(
    <Provider store={store}>
        {route}
    </Provider>,
    document.getElementById('app')
)

