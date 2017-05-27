import React,{Component,ProtoTypes} from 'react'
import './list.scss'
export default class List extends Component{
    render(){
        return(
            <div className="list">
                {this.props.children}
            </div>
        )
    }
}