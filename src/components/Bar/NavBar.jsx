import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'
import './nav.scss'

export default class NavBar extends Component{
    static propTypes={
        left:PropTypes.object,
        title:PropTypes.string
    }
    render(){
        const {left,title,right,leftClick}=this.props
        const leftClasses = classNames({
            'fa': true,
            [`fa-${left.iconName}`]: left.iconName,
            'fa-2x':true
        })
        const rightClasses = classNames({
            'fa': true,
            [`fa-${right.iconName}`]: right.iconName,
            'fa-2x':true
        })
        return(
            <div className="nav-bar">
                <div className="nav-left" onClick={leftClick}>
                    {left.iconName && <i className={leftClasses}></i>}
                    <span>{left.text}</span>
                </div>
                <div className="nav-title">{title}</div>
                <div className="nav-right">
                    {left.iconName && <i className={rightClasses}></i>}
                    <span>{right.text}</span>
                </div>
            </div>
        )
    }
}

