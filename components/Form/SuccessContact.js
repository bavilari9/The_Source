import React, { Component } from "react";
import Success from '../../resources/icons/verified.svg'

export default function SuccessContact({message}){
    return(
        <div id="success-contact" className="contact-wrapper">
            <div  className="container contact-form">
                <Success className="success-img"/>
                <h3>{message}</h3>
            </div>
        </div>
    )
}