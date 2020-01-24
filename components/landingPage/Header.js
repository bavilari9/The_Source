import React from "react";
import '../../public/header.css'
import heroImg from '../../static/hero.jpeg';

export function  Header() {
  return (
    <span className="container"> 
  <header>
      <div className="row" >
          <div className="hero-title col-4 ">
            <h1 className="desktop-hero"><span>First-of-its-kind </span>
            database on Latino talent working in Hollywood
            </h1>
            <h1 className="mobile-hero"><br/><span>First-of-its-kind</span> database <br/> on Latino talent working in Hollywood</h1>
          </div>
          <div className="col-8">
            <img className="hero-img img-fluid"src={heroImg } alt="longoria latino talent"/>
          </div>
      </div>
  </header>
  <div id="about"className="hero-content jumbotron text-initial">
      <h2>Boosting latino representation in the entertainment industry.</h2>
      <p>The LDC has been compiling information about above-the-line Latino talent in film and television for quite some time. We have followed primetime shows, OTT programming, and the top 100 box office films annually by networks, network types, and studios, respectively. This information has informed our strategy with media and entertainment partners and revealed the most significant opportunities for our mission and media partners’ growth.
      </p>
      <p>Starting Summer 2019, we have decided to release this data publicly to create awareness and empower our friends in the entertainment industry with data on where to invest to attract the cohort with the youngest demographic and second fastest growth rate.
      </p>
        <a href={"/search"}>Search Talent ></a>
  </div>

  </span>
  )
}