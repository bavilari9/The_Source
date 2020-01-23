import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import RequestBuilder from './RequestBuilder';

const MANAGEMENT = process.env.MANAGEMENT;


export const sendEmail = (body,setEmailSent) => {
    setEmailSent("submiting")
    fetch(`${MANAGEMENT}/email`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      }).then(res=>{
       console.log( "Email status ", res)
  
      //  check if res status is 200 then set the state to true 
      if(res.status == 200){
        setEmailSent(true)
      }else{
        setEmailSent("failed")
      }
      })
}

export const sendVerifyEmail = (body,setEmailSent) => {
  setEmailSent("submiting")
  fetch(`${MANAGEMENT}/email/verify`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }).then(res=>{   
    //  check if res status is 200 then set the state to true 
    console.log("status",res.status)
    if(res.status == 200){
      setEmailSent(true)
    }else{
      setEmailSent("failed")
    }
    })
}

export const queryForm =(query)=> {
  fetch(`${process.env.MANAGEMENT}/search/${query}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
  .then(res=>res.json())
  .then(res=>{
    this.setState({
      data: res
    })
  })
}

export const submitForm =(data,setProfileData) =>{
  fetch(`${process.env.MANAGEMENT}/profile`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(response=>response.json())
  .then(res=>{
    this.setState(prev =>{
      prev.data = [res, ...prev.data]
      return prev;
  })
  })
}

export const advancedQuery = (query, setData)=> {
  console.log("this is the query", query)
  fetch(
    `${process.env.MANAGEMENT}/search/advanced/${JSON.stringify(query)}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }
  )
    .then(res => res.json())
    .then(res => {
      setData(res);
    });
};

export const getCode = (code) => {
  return fetch(`http://localhost:3000/api/codes/?code=${code}`, {
    // mode: 'no-cors',
    method: "GET",
    credentials: 'include',
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    // body: {code}
  }).then(res => res.json());
};

export const checkCode = () => {
  return RequestBuilder.makeCall(`http://localhost:3000/api/codes/checkCode`, {
  // return fetch(`${process.env.MANAGEMENT}/codes/checkCode`, {
    // mode: 'no-cors',
    method: "GET",
    credentials: 'include',
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    // body: {code}
  // }).then(console.log)
  })
  // .then(res => res.json());
};