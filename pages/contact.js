import React, {  useState } from 'react'
import { Nav } from "../components/nav"
import Layout from '../components/layout'
import VerifyForm from '../components/Form/VerifyForm'
import SuccessContact from '../components/Form/SuccessContact'
import '../public/main.css'
import {sendVerifyEmail} from '../api/api'
 
function Contact({}) {
    const [emailSent, setEmailSent] = useState(false);

    const sendContactEmail = (message)=>{
      sendVerifyEmail(message, setEmailSent)
      }
    const submitingForm=()=>{
      if(!emailSent){
        return<VerifyForm submitForm={sendContactEmail}/>
      }else if(emailSent == 'submiting'){
         return<div className="verification-wrapper"><SuccessContact message={'Submiting'}/></div>
      }else if(emailSent=='failed'){
        return<VerifyForm submitForm={sendContactEmail} message="Sorry for the inconviniencer, try again"/>
      }else{
        return<div className="verification-wrapper"><SuccessContact message={'We will contact you shortly to verify your information.'}/></div>
      }
    }
    return (
      <div>
        {/* <Layout> */}
          <Nav/>
          {submitingForm()}
        {/* </Layout> */}
      </div>
    )

}

export default Contact;