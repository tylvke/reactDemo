import React, {Component, ProtoTypes} from 'react'
import {Router,Route, IndexRoute,Redirect,hashHistory} from 'react-router'
import Root from './root'


const indexView=(location,cb)=>{
    require.ensure([],require=>{
        cb(null,require('./views/index').default)
    },'index')
}
const detailView=(location,cb)=>{
    require.ensure([],require=>{
        cb(null,require('./views/detail').default)
    },'detail')
}
const RouteConfig=(
    <Router history={hashHistory}>
        <Route path='/' component={Root}>
            <IndexRoute getComponent={indexView} />
            <Route path='/index' getComponent={indexView} />
            <Route path='/detail' getComponent={detailView} />
            <Redirect path='*' to='/'/>
        </Route>
    </Router>
)
export default RouteConfig