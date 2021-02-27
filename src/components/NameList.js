import React, { Component } from 'react'
import Person from './Person'
function NameList() {
    const names=['Bruce','Clark','Diana','Clark']
    const persons=[
    {
        id:1,
        name:'Bruce',
        age:30,
        skill:'React'
    },
    {
        id:2,
        name:'sandeep',
        age:25,
        skill:'Angular'
    },
    {
        id:3,
        name:'sandy',
        age:30,
        skill:'javascript'
    }
]
    //const names=['Bruce','sandeep','sandy']
//const nameList=names.map(name => <h2>{name}</h2>)
console.log("NmaeList");
//const personList=persons.map(person=>
  //  <Person key={person.id} person={person}/>
  const nameList=names.map((name,index)=><h2 key={index}>{index}{name}</h2>)

return (
            <div>
                {/* <h2>{names[0]}</h2>
                <h2>{names[1]}</h2>
                <h2>{names[2]}</h2> */}
                {/* {personList} */}
               
            </div>
            )
           }
    
export default NameList
