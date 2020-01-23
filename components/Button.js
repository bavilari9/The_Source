import React from 'react'


 const Button =(props)=>{
    const onClick = () => {
        typeof(props.action) === 'function' && props.action(props.id);
    }
    return(
    <button type={props.type || "button"} onClick={onClick}>{props.title}</button>
    )
}

export default Button;