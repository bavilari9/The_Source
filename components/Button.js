import React from 'react'


 const Button =(props)=>{

    return(
    <button type="button" onClick={()=>props.action(props.id)}>{props.title}</button>
    )
}

export default Button;