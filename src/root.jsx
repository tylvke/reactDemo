import React, {Component, ProtoTypes} from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Drawer from './views/components/drawer'
export default class Root extends Component{
    constructor(props, context) {
        super(props, context);
    }
    static propTypes = {
        children: React.PropTypes.node,
        location: React.PropTypes.object
    };

    static getState (type = 'left') {
        return {
            transition: type
        }
    };
    render(){
        const { location } = this.props
        let transition = 'sfr'
        if (location.state && location.state.transition) {
            switch (location.state.transition) {
                case 'right':
                    transition = 'sfr'
                    break
                case 'left':
                    transition = 'rfr'
                    break
                case 'up':
                    transition = 'sfb'
                    break
                case 'down':
                    transition = 'rfb'
                    break
            }
        }
        return(
            <div className="wrapper">
                <Drawer></Drawer>
                <ReactCSSTransitionGroup
                    component='div'
                    className='pages'
                    transitionName={`page-transition-${transition}`}
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}>
                    { React.cloneElement(this.props.children, {key:this.props.location.pathname}) }
                </ReactCSSTransitionGroup>
            </div>

        )
    }
}