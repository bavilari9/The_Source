import React, { Component } from 'react'
import Contact from '../components/Form/ContactForm'
import {Partners} from '../components/landingPage/Partners'
import { Nav } from "../components/nav"


export default class About extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <div id="about"className="hero-content jumbotron text-initial">
          <p>
          We have compiled a database with Latino actors, actresses, writers and director working in English-speaking mainstream shows and films airing and released during 2019. The goal of this database is to become a source of Latino talent for all American content creators with the aim of dispelling the myth of the lack of Latino talent in the industry.  Each and every person in our database has already been hired and approved by studios and networks content creators this year. This source of useful information will be available for all of our partners and friends in the entertainment and the news media. All talent will be segmented by network/studio, kind of platform, gender, US born/raised or international.
<br/> <br/>The Latino DataBase will be launched in partnership with LA COLLAB and The Acevedo Foundation, an initiative by Eric Garcetti, Mayor of Los Angeles, to eradicate Latinx invisibility, with the goal of exponentially accelerate the path of Latinx stories and creators to Hollywood and mainstream media. Their general objective is to generate new stories by the LatinX community, combat distorted portrayals of LatinX culture with truthful depictions, and increase LatinX representation throughout the Hollywood Eco-System. Our database will be a powerful tool for all content creators in America to achieve this goal and to have easy access to Latino talent already working with studios and networks.
          </p>
        </div>
        <Partners/>
        <Contact/>


      </div>
    )
  }
}

