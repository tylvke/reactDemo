import React,{Component,ProtoTypes} from 'react'
import './layout.scss'

export default class Page extends Component{
    render(){
        const {navbar} =this.props;
        return <div className="page">
            {navbar}
            <div className="page-content">
                {this.props.children}
            </div>
        </div>
    }
}

