import React ,{Component,PropTypes} from 'react'
import {connect} from 'react-redux'
import Drawer from '../../components/Drawer/Drawer'
class DrawerView extends Component{
    render(){
        const {show,drawerHideClick}=this.props;
        return <Drawer show={show} hide={drawerHideClick}></Drawer>
    }
}
const drawerHideAction = { type: 'drawerToggle',show:false }

function mapStateToProps(state) {
    return {
        show: state.drawerShow
    }
}
// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
    return {
        drawerHideClick: (e) => {
            e.stopPropagation();
            var target=e.target;
            if(!target.classList.contains('drawer')){
                return;
            }
            dispatch(drawerHideAction)
        }
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DrawerView)