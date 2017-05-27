import React ,{Component} from 'react'
import {connect} from 'react-redux'
import List from '../../components/List/List'
import ListItem from '../../components/List/ListItem'

// Action
const increaseAction = { type: 'increase' }

// Map Redux state to component props
function mapStateToProps(state) {
    return {
        value: state.count
    }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
    return {
        onIncreaseClick: (e) => {
            e.stopPropagation();
            dispatch(increaseAction)
        }
    }
}

class ListView extends Component{
    static  contextTypes= {
        router: React.PropTypes.object
    };
    static defaultProps={
        info:"就是爱玩",
        list:[
            {
                name:"ws",
                age:"20"
            },
            {
                name:"xx",
                age:"18"
            },
            {
                name:"ws",
                age:"20"
            },
            {
                name:"xx",
                age:"18"
            }
        ]
    };
    handleClick(pathname){
        this.context.router.push(pathname)
    }
    render(){
        const {list,value,onIncreaseClick}=this.props;
        const click=this.handleClick.bind(this,'/detail');
        const listItems=list.map(function (item,index) {
            return <ListItem key={index} info={item} onIncreaseClick={onIncreaseClick} click={click} count={value}></ListItem>
        })
        return (
                <List>
                    {listItems}
                </List>
        )
    }
}
// Connected Component
export default connect(
        mapStateToProps,
        mapDispatchToProps
)(ListView)
