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
          {/* <p>
          We have compiled a database with Latino actors, actresses, writers and director working in English-speaking mainstream shows and films airing and released during 2019. The goal of this database is to become a source of Latino talent for all American content creators with the aim of dispelling the myth of the lack of Latino talent in the industry.  Each and every person in our database has already been hired and approved by studios and networks content creators this year. This source of useful information will be available for all of our partners and friends in the entertainment and the news media. All talent will be segmented by network/studio, kind of platform, gender, US born/raised or international.
<br/> <br/>The Latino DataBase will be launched in partnership with LA COLLAB and The Acevedo Foundation, an initiative by Eric Garcetti, Mayor of Los Angeles, to eradicate Latinx invisibility, with the goal of exponentially accelerate the path of Latinx stories and creators to Hollywood and mainstream media. Their general objective is to generate new stories by the LatinX community, combat distorted portrayals of LatinX culture with truthful depictions, and increase LatinX representation throughout the Hollywood Eco-System. Our database will be a powerful tool for all content creators in America to achieve this goal and to have easy access to Latino talent already working with studios and networks.
          </p> */}
          <p>THE SOURCE is responding to the needs of forward-thinking studios and networks who recognize that Latinos represent a rapidly growing and increasingly profitable market segment. U.S. Latinos represent 18% and 25% of all Americans and Gen Zs, respectively. Current film, TV, and OTT content does not reflect the demographic changes that their audiences have undergone. Further, the U.S. Latino GDP is growing 28% faster than the broader American economy, and their consumption has been growing 72% faster than the non-Latino rate. This demographic and economic evolution brings a window of opportunity for content providers to plug into untapped audiences who are seeking mirrors.</p>
          <p>THE SOURCE is brought to you by the Latino Donor Collaborative (“LDC”). Our talent pool was sourced via the LDC's comprehensive analysis of summer and fall 2019 mainstream TV/OTT programming, as well as top-grossing box office films, in preparation for the <i>Above-the-Line Latinos in Media</i> report. The database and report will be updated seasonally.</p>
          <p>The Latino Donor Collaborative is the objective and analytical entity that defines the opportunities and actionable steps to be taken by American resource allocators as Latinos become the driving force of the economy. To learn more about America’s New Mainstream audience and why Latinos are key to successful growth strategies, download the <i>Above-the-Line Latinos in Media</i> LDC report here.</p>
        </div>
        <Partners/>
        <Contact/>


      </div>
    )
  }
}

