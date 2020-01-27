
import React from "react";
import '../public/nav.css'
import Link from '../utils/ActiveLink';
import Navbar from '../utils/ActiveHeader';

import heroLogo from '../resources/logo/The_source_H_gray.png'
import Facebook from '../resources/icons/facebook.svg'
import Twitter from '../resources/icons/twitter.svg'
import Instagram from '../resources/icons/instagram.svg'

export function Nav() {
  const URLS = {
    TWITTER: "https://twitter.com/thesourcedb",
    FACEBOOK: "https://www.facebook.com/thesourcedatabase",
    INSTAGRAM: "https://www.instagram.com/thesourcedb/"
  };
  return <Navbar id="hero-nav"className="navbar navbar-expand-sm bg-light justify-content-center">
    <ul className="navbar-nav">
      <Link activeClassName="nav-item" href="/search">
                <a>Search Talent</a>
      </Link>
      <Link activeClassName="nav-item" href="/about">
                <a>About</a>
      </Link>
      <li className="nav-item logo"><a href={"/"} className="logo"><img src={heroLogo} alt="The Source Logo"/></a></li>
      <Link activeClassName="nav-item" href="/#contact">
                <a>Contact</a>
      </Link>
      <span className="social-icons">
        <li className="nav-item social-btn ">
          <a href={URLS.FACEBOOK} target="_blank"><Facebook /></a>
        </li>
        <li className="nav-item social-btn">
          <a href={URLS.TWITTER} target="_blank"><Twitter /></a>
        </li>
        <li className="nav-item social-btn">
          <a href={ URLS.INSTAGRAM} target="_blank"><Instagram /></a>
        </li>
      </span>
      </ul>

  </Navbar>
}