import React, {Component, PropTypes} from 'react'
export default class Input extends Component {
    constructor(){
        super()
    }
    static propTypes = {
        type: PropTypes.oneOf(['text', 'password', 'email', 'tel', 'url', 'date', 'number', 'datatime-local']),
        placeholder: PropTypes.string
    }

    static defaultProps = {
        type: 'text'
    }

    render () {
        const {type,placeholder,...props}=this.props
        return (
            <input type={type} placeholder={placeholder} {...props}/>
        )
    }
}