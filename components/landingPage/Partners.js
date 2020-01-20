import React from 'react'
import logo1 from '../../resources/img/la-collab-logo-MayorOfLA.png';
import logo2 from '../../resources/img/LatinoDonorCollaborative.png';
import logo3 from '../../resources/img/logo black.png';


export function Partners(){
    return(
        <div className="container parnership">
        <span>
          <div className="partners">
          <h2>Our Partners</h2>
          <p>We are pleased to have build strong partnerships to bring this projecto to life.</p>
          </div>
          <span>
            <a href="https://www.lamayor.org/" target="_blank"><img src={logo1}/></a>
            <a href="http://latinodonorcollaborative.org/" target="_blank"><img src={logo2}/></a>
            <a href="https://www.lacollab.org/" target="_blank"><img src={logo3}/></a>
          </span>
        </span>
       
        </div>
    )
}