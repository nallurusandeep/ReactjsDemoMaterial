import React from 'react'
import './myStyles.css'
function Stylesheet(props) {
    let classNames = props.primary ? 'primary' : ''
    return (
        <div>
            <h1 className={`${classNames} font-xl`}>Stylesheet</h1>
        </div>
    )
}

export default Stylesheet
