import React , {Component,PropTypes} from 'react'
import './drawer.scss'
export default class Drawer extends Component{
    show(){
        const {show}=this.props;
        var self=this;
        if(show){
            this.refs.drawer.style.display="block";
            setTimeout(function () {
                self.refs.drawer.classList.add('drawer-show');
            },0)
        }else{
            this.refs.drawer.classList.remove('drawer-show');
            setTimeout(function () {
                self.refs.drawer.style.display="none";
            },500)
        }
    }
    componentDidMount(){
        this.show();
    }
    componentDidUpdate(){
        this.show();
    }
    render(){
        const {hide}=this.props;
        return(
            <div className="drawer" ref="drawer" onClick={hide}>
                <div className="drawer-inner" ref="drawerInner"></div>
            </div>
        )
    }
 }