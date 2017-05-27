import React, {Component, ProtoTypes} from 'react'
import Button from '../Button/Button'
import './list.scss'
export default class ListItem extends Component {
    render() {
        const {onIncreaseClick,count,click,info}=this.props;
        return (
            <div className="list-item" onClick={click}>
                <Button btnClick={onIncreaseClick} text="click"></Button>
                {info.name}-{info.age}-{count}
            </div>
    )
    }
}