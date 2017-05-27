import React,{Component,ProtoTypes} from 'react'
import Root from '../root'
import Page from '../components/Layout/page'
import Input from '../components/Form/Input'
import NavBar from '../components/Bar/NavBar'

export default class detailView extends Component{
    constructor(){
        super()
        this.back=this.back.bind(this,'index')
    }
    static  contextTypes= {
        router: React.PropTypes.object
    };

    back(pathname){
        this.context.router.push({
            pathname: '/',
            state: Root.getState()
        })
    }
    render(){
        return(
            <Page navbar={
                <NavBar
                    left={{
                        iconName:"angle-left",
                        text:"返回"
                    }}
                    title="详情"
                    right={{
                        text:"发布"
                    }}
                    leftClick={this.back}></NavBar>
            }>
                <Input placeholder="请输入姓名"/>
                <a >detail</a>
            </Page>
        )
    }
}
