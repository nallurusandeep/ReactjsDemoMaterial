import React, { Component } from 'react'

export class ClassClick extends Component {
    ClickHandler(){
        console.log("click me");
    }
    render() {
        return (
            <div>
                <button onClick={this.ClickHandler}>ClickMe</button>
            </div>
        )
    }
}

export default ClassClick