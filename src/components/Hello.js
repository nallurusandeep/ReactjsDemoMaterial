import React from 'react'
const Hello=()=>{
/*    return(
        <div className='dummyClass'>
            <h1>Hello JS</h1>
        </div>
    )*/
    //return React.createElement('div',null,React.createElement('h1',null,'Hello sandeep'))
    return React.createElement('div',{id:'hello',className:'dummyClass'},
    React.createElement('h1',null,'Hello Sandeep'))
}
export default Hello