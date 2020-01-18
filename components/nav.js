import React from "react";
import '../public/nav.css'

export function Nav() {
  return <nav className="navbar navbar-expand-sm bg-light justify-content-center">
    <ul className="navbar-nav">
      <li className="nav-item "><a href={"/search"}>Search Talent</a></li>
      <li className="nav-item "><a href={"#about"}>About</a></li>
      <li className="nav-item "><a href={"/"} className="logo">Latino <span className="talent-logo">Talent</span><br/> <span className="db-logo">Database</span></a></li>
      <li className="nav-item "><a href={"/#contact"}>Contact</a></li>
      </ul>
  </nav>
}