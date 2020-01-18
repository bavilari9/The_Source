import React, { Component } from "react";

export default class VerifyForm extends React.Component {
  constructor() {
    super();
    this.state = {
      inputs: {
        talentName:'',
        contactName:'',
        email:'',
        phoneNumber:'',
        bio:'', 
        socialMediaLink:''
      }
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
    this.props.submitForm(this.state.inputs);
  }
  render() {
    const { email,message,talentName,phoneNumber,socialMediaLink,bio,contactName} = this.state.inputs;
    return (
      <div className="contact-wrapper verification">
            <div className="container contact-form verify">
              <h2>Verify Profile</h2>
              {this.props.message?(
                <p className="error-message">{this.props.message}</p>
              ):(
                null
              )}
              <form onSubmit={this.submitForm.bind(this)}>
                <div className="form-group">
                  <input
                      type="text"
                      value={talentName}
                      name="talentName"
                      className="form-control"
                      placeholder="Talent Name"
                      onChange={this.handleChange.bind(this)}
                      required
                    />
                </div>
                <div className="form-group">
                  <input
                      type="text"
                      value={contactName}
                      name="contactName"
                      className="form-control"
                      placeholder="Contact Name"
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
                  <input
                      type="tel"
                      value={phoneNumber}
                      name="phoneNumber"
                      className="form-control"
                      placeholder="Phone Number"
                      onChange={this.handleChange.bind(this)}
                      required
                    />
                </div>
                <div className="form-group">
                    <textarea
                      type="text"
                      value={bio}
                      className="form-control"
                      name="bio"
                      placeholder="Message"
                      onChange={this.handleChange.bind(this)}
                      required
                    />  
                </div>
                <div className="form-group">
                  <input
                      type="url"
                      value={socialMediaLink}
                      name="socialMediaLink"
                      className="form-control"
                      placeholder="Social Media Link"
                      onChange={this.handleChange.bind(this)}
                      required
                    />
                </div>
                 
                <div className="form-submit">
                <input className="submit" type="submit" value="Send" name="submit"/>
                </div>
              </form>
              
              </div>
          </div>
    );
  }
}
