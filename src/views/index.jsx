import React,{Component,ProtoTypes} from 'react'
import {connect} from 'react-redux'
import Page from '../components/Layout/page'
import NavBar from '../components/Bar/NavBar'
import Drawer from '../components/Drawer/Drawer'
import ListView from './components/List'

// Action
const drawerShowAction = { type: 'drawerToggle',show:true }

// Map Redux state to component props
function mapStateToProps(state) {
    return {
        drawerShow: state.drawerShow
    }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
    return {
        drawerShowClick: (e) => {
            e.stopPropagation();
            dispatch(drawerShowAction)
        }
    }
}
class IndexView extends Component{
    render(){
        const {drawerShowClick}=this.props;
        return(
            <Page navbar={
                <NavBar
                    left={{
                    iconName:"navicon"
                    }}
                    title="会玩"
                    right={{
                        text:"发布"
                    }}
                    leftClick={drawerShowClick}
                ></NavBar>
                }>
                <ListView ></ListView>
            </Page>
        )
    }
}
// Connected Component
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(IndexView)
