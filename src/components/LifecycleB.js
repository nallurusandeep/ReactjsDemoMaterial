import React,{Component, component} from 'react'
class LifecycleB extends Component{
    constructor(props){
        super(props)
        this.state={
            name:'Sandeep'
        }
        console.log('LifeCyle B Constructor')
    }
    static getDerivedStateFromProps(props,state){
        console.log('LifeCycleB getDerivedStateFromProps')
        return null
    }
    componentDidMount(){
        console.log('LifecycleB componentDidMount')
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
    render(){
        console.log('LifecycleB render')
        return(
            <div>
                LifeCylce B
            </div>
        )
    }
}
export default LifecycleB