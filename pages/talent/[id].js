import { useRouter } from 'next/router';
import React, {useContext, useEffect, useState } from 'react'
import Layout from '../../components/layout';
import { Nav } from "../../components/nav"
import dataContext from '../../components/DataContext'

import femaleBackground from '../../static/female.jpg'
import maleBackground from '../../static/male.jpg'

import '../../public/Profile.css';




export default function Post() {
  let  {data} = useContext(dataContext);
  const router = useRouter();

  const style=(gender)=>{
    return gender=='female'? femaleBackground :maleBackground;
  }
  const render = (profile)=>{
       profile = profile.filter(profile=> profile.id === router.query.id)[0]

    if(profile){
      // console.log(profile[0].hasOwnProperty('dob'))
      let dob = new Date().getFullYear() - parseInt(profile.dob.split('T')[0].substring(0, 4));
      return(<div className="profile-row row" >
            <div className="profile-photo col-6 ">
            <img className="img-fluid" src={style(profile.gender)} alt="profile-img"/>
            </div>
            <div className="profile-content col-5">
            <h1>{ profile.name.replace(/^\w/, c => c.toUpperCase())}</h1>
            <h2>{profile.credit.replace(/^\w/, c => c.toUpperCase())}</h2>
            <span>
                <p>{profile.country}</p>
                {dob > 0
                ?<p>Age:{dob}</p>
                :<p></p>
                }
                <p>Known For: {profile.production.replace(/^\w/, c => c.toUpperCase())}</p>
            </span>
            <a href={profile.imdb_link} target="_blank">Visit IMDb Profile ></a>
            </div>
        </div> 
      )
    }
  } 

  return (
    <Layout>
       <Nav/>
      <div className=" profile-container container">
        {render(data)}
        <div className="verify-section">
          <p>If this is your profile please contact us to autorize your data usage with us.</p>
          <a href="/contact">Verify this profile</a>
        </div>
      </div>
    </Layout>
  );
}
