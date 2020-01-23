import React from "react";
import heroLogo from '../resources/img/LatinoDonorCollaborative.png';

export function  Footer() {
  return ( 
    <footer className="foooter"> 
       <div className="navigation">
        <ul className="navbar-footer">
        <li className="nav-item "><a href={"#about"}>About</a></li>
        <li className="nav-item "><a href={"/search"}>Talent</a></li>
        <li className="nav-item "><a href={"/#contact"}>Contact</a></li>
        </ul>
       </div>
       <div className="logo">
          <a><img src={heroLogo} alt="The Source Logo"/></a>
           <p> ©2020 All rights reserved.</p>
         </div>
       <div className="social"></div>
    </footer>
  )
}