import React, { Component } from 'react';
import axios from 'axios';
import '../public/login.css'
import Layout from '../components/layout'

import Router from 'next/router'
import {auth} from '../utils/auth'

class Login extends Component {
  constructor(){
    super();
    // set default state
    this.state = {
      // we have 2 inputs that we will be changing
      inputs: {
        email: '',
        password: ''
      },
      error:''
    }
  }

  // method to log in
login(e){
    e.preventDefault(); // prevent default form action
    // send request to make sure the email and password are correct
    axios.post(`${process.env.MANAGEMENT}/login`, this.state.inputs)
      .then(response => { // set the user based off of the response
        if (response.status === 200) {
          const { token } = response.json()
          login({ token })
        } else {
          console.log('Login failed.')
          // https://github.com/developit/unfetch#caveats
          let error = new Error(response.statusText)
          error.response = response
          throw error
        }
      }
      ).catch(error=>{
        console.error(
          'You have an error in your code or there are Network issues.',
          error
        )
      })
  }

  // method to change an input
  changeInput(e, input){
    const val = e.target.value;
    this.setState(prev => { // sets the state for that input to the value
      prev.inputs[input] = val;
      return prev;
    });
  }

  render(){
    return(
      <Layout>
       <div className="row">
      <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div className="card card-signin my-5"></div>
      <div class="card-body">
        <h1 className="card-title text-center">Log In</h1>

        <form  onSubmit={this.login.bind(this)} className="form-signin">
        <div className="form-label-group">
          <label htmlFor='email'>Email</label>
          <input 
                label='Name'  
                placeholder='Name' value={this.state.inputs.email}
                id='email' name='email' type='email'
                onChange={e => this.changeInput(e, 'email')}
                className="form-control" 
          />
          </div>
        <div className="form-label-group">
          <label htmlFor='password'>Password</label>
          <input 
                label='Password'  
                placeholder='Password'
                value={this.state.inputs.password}
                id='password' name='password' type='password'
                onChange={e => this.changeInput(e, 'password')}
                className="form-control"
          />
          </div>
            <button 
            className="login"
             type="submit" 
             className="btn btn-lg btn-primary btn-block text-uppercase" 
             >Login</button>
        </form>
      </div>
      </div>
      </div>
      </Layout>
    )
  }
}
export default Login;
