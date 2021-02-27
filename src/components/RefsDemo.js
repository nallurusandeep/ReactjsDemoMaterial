import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)
    this.inputRef=React.createRef()
    this.cbRef=null //second approach cb=callback
    this.setcbRef=element=>{
        this.cbRef=element
    }
    }
    componentDidMount(){
        // this.inputRef.current.focus()
        // console.log(this.inputRef);
        if(this.cbRef){
            this.cbRef.focus()
        }
    }
    clickHandler=()=>{
        alert(this.inputRef.current.value)
    }
    render() {
        return (
            <div>
            <input type="text" ref={this.inputRef}/>    
            <input type="text" ref={this.setcbRef}/>
            <button onClick={this.clickHandler}>Submit</button>            
            </div>
        )
    }
}

export default RefsDemo
