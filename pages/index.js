import React, { Component,useState, useContext } from 'react'
import { Nav } from "../components/nav"
import {Header} from '../components/landingPage/Header'
import {Content} from '../components/landingPage/Content'
import {Partners} from '../components/landingPage/Partners'
import ContactFrom from '../components/Form/ContactForm'
import SuccessContact from '../components/Form/SuccessContact'
import dataContext from '../components/DataContext'
import '../public/main.css'

import {sendEmail} from '../api/api'



function Home({}){
  const sendContactEmail = (message)=>{
    sendEmail(message, setEmailSent)
    }
  let { dataCategory:{acting,writing,directing,showrunning}} = useContext(dataContext);
  const [emailSent, setEmailSent] = useState(false);

    const submitingForm=()=>{
      if(!emailSent){
        return<ContactFrom submitForm={ sendContactEmail}/>
      }else if(emailSent == 'submiting'){
         return<SuccessContact message={'We are Submiting your request'}/> 
      }else if(emailSent=='failed'){
        return <ContactFrom submitForm={sendContactEmail} message="Sorry for the inconviniencer, try again"/>
      }else{
        return <SuccessContact message={<h3>Thank you!<br/> We will contact you shortly to verify your information.</h3>}/> 
      }
    }
    return (
      <div className="container">
          <Nav/>
          <Header/>
          <Content 
           acting={acting}
           directing={directing}
           writing={writing}
           showrunning={showrunning}
          />
          <Partners/>
          {submitingForm()}
      </div>
    )
}


export default Home;