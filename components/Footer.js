import React from "react";


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
          <a>Latino<span className="talent-logo"> Talent</span><br/> <span className="db-logo">Database</span></a>
           <p> ©2020 All rights reserved.</p>
         </div>
       <div className="social"></div>
    </footer>
  )
}