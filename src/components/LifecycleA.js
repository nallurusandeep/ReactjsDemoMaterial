import React,{Component, component} from 'react'
import LifecycleB from './LifecycleB'
class LifecycleA extends Component{
    constructor(props){
        super(props)
        this.state={
            name:'Sandeep'
        }
        console.log('LifeCyle A Constructor')
    }
    static getDerivedStateFromProps(props,state){
        console.log('LifeCycleA getDerivedStateFromProps')
        return null
    }
    componentDidMount(){
        console.log('LifecycleA componentDidMount')
    }
    shouldComponentUpdate(){
        console.log('LifecycleA shouldcomponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('LifecycleA getSnapshotBeforeUpdae')
        return null
    }
    componentDidUpdate(){
        console.log('LifecycleA componentDidUpdate')
    }
    changeState=()=>{
        this.setState({
            name:'Code for React'
        })
    }
    render(){
        console.log('LifecycleA render')
        return(
            <div>
                LifeCylce A
                <button onClick={this.changeState}>Change State</button>
                <LifecycleB/>
            </div>
        )
    }
}
export default LifecycleA