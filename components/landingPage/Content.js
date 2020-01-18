import React ,{useContext}from "react";
import '../../public/landingContent.css'
import ProfileItem from "../Profile/ProfileItem";
import dataContext from '../DataContext';

 
export function Content(props) {
    const {acting, writing,directing, showrunning} = props
    const { setDataHome } = useContext(dataContext);
    let credits = {}

  Object.keys(props).forEach(key =>{
    credits[key]=[props[key].filter(data=>data.main_profile ==='true').slice(0,4)] 
    credits[key] =  credits[key].length < 4 ? props[key].slice(0,4) : credits[key];
  })

  return (
    <div className="container landing-content">
       <h1>600+ Latino Talent profiles</h1>
            <h2 onClick={()=>setDataHome(directing,'directing')}>Directors  ( {directing.length} ) ></h2>
            <div className="row card-wrapper">
            {credits.directing.map((data, key)=><ProfileItem key={key} profile={data}/>)}
            </div>
            <h2 onClick={()=>setDataHome(writing,'writing')}>Writers ( {writing.length} ) ></h2>
            <div className="row card-wrapper">
            {credits.writing.map((data, key)=><ProfileItem key={key} profile={data}/>)}
            </div>
            <h2 onClick={()=>setDataHome(acting, 'acting')}>Actors and Actresses ( {acting.length} ) See all > </h2>
            <div className="row card-wrapper">
             {credits.acting.map((data, key)=><ProfileItem key={key} profile={data}/>)}
            </div>
            <h2 onClick={()=>setDataHome(showrunning,'showrunning')}>Showrunners ( {showrunning.length} ) ></h2>
            <div className="row card-wrapper">
            {credits.showrunning.map((data, key)=><ProfileItem key={key} profile={data}/>)}
            </div>
            <div className="btn-wrapper">
            <a href="/search" className="home-btn">Search All Talent</a>
            </div>
    </div>
  )
}