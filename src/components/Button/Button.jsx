import React ,{Component,PropsTypes} from 'react'
 export default class Button extends Component{
    render(){
        const {btnClick,text}=this.props;
        return <button onClick={btnClick}>{text}</button>
    }
 }