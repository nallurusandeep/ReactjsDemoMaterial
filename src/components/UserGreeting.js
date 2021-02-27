 import React, { Component } from 'react'

 class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn:true
        }
    }
    
    render() {
    return this.state.isLoggedIn && <div>Welocme sande</div>
        // return(
        //     this.state.isLoggedIn ?
        //     <div>Welcome sandeep</div> :
        //     <div>Welcome Guest</div>
        // )
        // let message
        // if(this.state.isLoggedIn){
        //     message=<div>Welcome Sandep</div>
        // }else{
        //     message=<div>Welcome Guest</div>
        // }
        // return <div>{message}</div>
        // if(this.state.isLoggedIn){
        //     return(
        //         <div>Welcome Sandeep</div>
        //     )
        // }else{
        //     return(
        //         <div>Welcome Deepu</div>
        //     )
        // }
        // return (
        //     <div>
        // <div>Welcome Sandeep</div>
        // <div>Welcome Deepu</div>                
        //     </div>
        // )
    }
}

export default UserGreeting
