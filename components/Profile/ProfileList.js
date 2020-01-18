import React, { Component } from 'react'
import ProfiItem from '../Profile/ProfileItem'


export default class ProfileList extends Component {
    constructor(){
        super();
        this.state = {
          data:{
              acting:[],
              writing:[],
              directing:[],
              showrunning:[]
          }
        }
      }

  render() {
    const {data:{acting, writing,directing, showrunning}} = this.props
    return (
      <div >
        <h2> Directors {directing.length} ></h2>
            {directing.map((data, key)=><ProfiItem key={key} profile={data}/>)}
        <h2> Directors {writing.length} ></h2>
            {writing.map((data, key)=><ProfiItem key={key} profile={data}/>)}
        <h2>Actors and Actresses {acting.length} See all > </h2>
            {acting.map((data, key)=><ProfiItem key={key} profile={data}/>)}
        <h2>Showrunners {showrunning}></h2>
            {showrunning.map((data, key)=><ProfiItem key={key} profile={data}/>)} 
      </div>
    )
  }
}