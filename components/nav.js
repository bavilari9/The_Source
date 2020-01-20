
import React from "react";
import '../public/nav.css'
import Link from '../utils/ActiveLink';
import Navbar from '../utils/ActiveHeader';

export function Nav() {
  return <Navbar id="hero-nav"className="navbar navbar-expand-sm bg-light justify-content-center">
    <ul className="navbar-nav">
      <Link activeClassName="nav-item" href="/search">
                <a>Searh Talent</a>
      </Link>
      <Link activeClassName="nav-item" href="/about">
                <a>About</a>
      </Link>
      <li className="nav-item logo"><a href={"/"} className="logo">Latino <span className="talent-logo">Talent</span><br/> <span className="db-logo">Database</span></a></li>
      <Link activeClassName="nav-item" href="/#contact">
                <a>Contact</a>
      </Link>
      <span className="social-icons">
      <li className="nav-item social-btn "><a href={"/"} ></a></li>
      <li className="nav-item social-btn"><a href={"/" } ></a></li>
      </span>
      </ul>

  </Navbar>
}