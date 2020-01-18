import React, { Component } from "react";

export default class Form extends React.Component {
  constructor() {
    super();
    // set default state
    this.state = {
      // we have 2 inputs that we will be changing
      inputs: {
        name:'',
        email:'',
        message:'', 
      },
      submitStatus:'Send'
    };
  }
  handleChange(e) {
    const val = e.target.value;
    const name = e.target.name;
    this.setState(prev => {
      prev.inputs[name] = val;
      return prev;
    });
  }
  submitForm(e) {
    e.preventDefault();
    this.setState({
      submitStatus :'Submiting'
    })
    // todo return status and change button to send
    this.props.submitForm(this.state.inputs);

  }
  render() {
    const { inputs:{name,email,message}, submitStatus } = this.state;

    return (
      <div id="contact" className="contact-wrapper">
            <div className="container contact-form">
              <h2>Contact Us</h2>
              {this.props.message?(
                <p className="error-message">{this.props.message}</p>
              ):(
                null
              )}
              <form onSubmit={this.submitForm.bind(this)}>
                <div className="form-group">
                  <input
                      type="text"
                      value={name}
                      name="name"
                      className="form-control"
                      placeholder="Name"
                      onChange={this.handleChange.bind(this)}
                      required
                    />
                </div>
                <div className="form-group">
                    <input
                      type="email"
                      value={email}
                      name="email"
                      className="form-control"
                      placeholder="Email"
                      onChange={this.handleChange.bind(this)}
                      required
                    />
                </div>
                <div className="form-group">
                    <textarea
                      type="text"
                      value={message}
                      className="form-control"
                      name="message"
                      placeholder="Message"
                      onChange={this.handleChange.bind(this)}
                      required
                    />  
                </div>
                <div className="form-submit">
                <input className="submit" type="submit" value={submitStatus} name="submit"/>
                </div>
              </form>
              
              </div>
          </div>
    );
  }
}
