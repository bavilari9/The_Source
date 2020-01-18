import React, { Component,useState, useContext } from 'react'
import { Nav } from "../components/nav"
import {Header} from '../components/landingPage/Header'
import {Content} from '../components/landingPage/Content'

import ContactFrom from '../components/Form/ContactForm'
import SuccessContact from '../components/Form/SuccessContact'
import dataContext from '../components/DataContext'
import '../public/main.css'

import {sendEmail} from '../api/api'
import logo1 from '../resources/img/la-collab-logo-MayorOfLA.png';
import logo2 from '../resources/img/LatinoDonorCollaborative.png';
import logo3 from '../resources/img/logo black.png';


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
          <div className="container parnership">
            <span>
              <div>
              <h2>Our Partners</h2>
              <p>We are pleased to have build strong partnerships to bring this projecto to life.</p>
              </div>
              <span>
                <a href="https://www.lamayor.org/" target="_blank"><img src={logo1}/></a>
                <a href="http://latinodonorcollaborative.org/" target="_blank"><img src={logo2}/></a>
                <a href="https://www.lacollab.org/" target="_blank"><img src={logo3}/></a>
              </span>
            </span>
           
          </div>
          {submitingForm()}
      </div>
    )
}


export default Home;