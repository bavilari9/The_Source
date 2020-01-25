import React, {useContext} from "react";
import Router from 'next/router'
import '../../public/Profile.css';
import femaleBackground from '../../static/female.jpg'
import maleBackground from '../../static/male.jpg'
import  maleBackground2 from  '../../resources/img/male/Artist_photo_placeholder_male3.jpg';
import  nonBinaryBackground from  '../../resources/img/male/Artist_photo_placeholder_nonbinary.jpg';
import dataContext from '../DataContext'


const style=(gender,imglink )=>{
  // add shuffle image & binary
  const genderCheck = ()=>{
    if(gender == 'female'){
      return femaleBackground
    }else if(gender =='male'){
      return maleBackground
    }else{
      return nonBinaryBackground
    }
  }
  return  imglink || genderCheck();

}

export default function ProfileItem(props) {

  const {setSingleProfile} = useContext(dataContext);
 let {profile:{name,credit,country,production,dob,gender,imglink}} = props;

 const  route =(id, data)=>{
  let name = id.split(' ').join('-')
  setSingleProfile(data.id)
  Router.push({ pathname: `/talent/${data.id}`, query: { name: `${name}` }})
}


  dob = new Date().getFullYear() - parseInt(dob.split('T')[0].substring(0, 4));
  return (
      <div className="profile-card" onClick={(()=>route(name, props.profile))} style ={ { backgroundImage: "url("+style(gender,imglink)+")" } } >
        <span className="profile-info">
          <h3>{name}</h3>
          <p>{credit.replace(/^\w/, c => c.toUpperCase())}</p>
          <span className="profile-extra">
          <p>{country}</p>
          {dob > 0
                ?<p>Age:{dob}</p>
                :<p></p>
          }
          <p>Known for: {production.toLowerCase().replace(/^\w/, c => c.toUpperCase())}</p>
          <div onClick={(()=>route(name, props.profile))} className="profile-btn">See Profile</div>
          </span>
        </span>
      </div>
  )
}