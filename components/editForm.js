import React, { Component } from "react";

export default class Form extends React.Component {
  constructor() {
    super();
    // set default state
    this.state = {
      // we have 2 inputs that we will be changing
      inputs: {
        name:'',
        gender:'',
        dob:1,
        production:'',
        network:'',
        season:'',
        country:'',
        role:'',
        imdb_link:'',
        imgLink:''
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
    const { name,gender,dob,production,network,season, country,role,imdb_link } = this.state.inputs;
    return (
      <div className="page-wrapper">
            <div className="form-content">
            <div className="form">
              <form onSubmit={this.submitForm.bind(this)}>
                <div className="form-group form-input">
                  <label>
                    Name:
                  <input
                      type="text"
                      value={name}
                      name="name"
                      onChange={this.handleChange.bind(this)}
                    />
                   </label>
                </div>
                <div className="form-group form-input">
                  <label>
                    Gender
                    <select name='gender' value={gender} onChange={this.handleChange}>
                      <option value="female">Female</option>
                      <option value="male">Male</option>
                      <option value="non-Binary">Non-Binary</option>
                    </select>
                  </label>
                </div>
                <div className="form-group form-input">
                  <label>
                    DOB:
                  <input
                      type="date"
                      value={dob.split(' ')[0]}
                      name="dob"
                      onChange={this.handleChange.bind(this)}
                    />
                   </label>
                </div>
                <div className="form-group form-input">
                  <label>
                    Production:
                  <input
                      type="text"
                      value={production}
                      name="production"
                      onChange={this.handleChange.bind(this)}
                    />
                   </label>
                </div>
                <div className="form-group form-input">
                  <label>
                    Network:
                  <input
                      type="text"
                      value={network}
                      name="network"
                      onChange={this.handleChange.bind(this)}
                    />
                   </label>
                </div>
                <div className="form-group form-input">
                  <label>
                    Season
                    <select name='season' value={season} onChange={this.handleChange}>
                      <option value="winter">Winter</option>
                      <option value="spring">spring</option>
                      <option value="summer">summer</option>
                      <option value="fall">fall</option>
                    </select>
                  </label>
                </div>
                <div>
                  <label>
                    country:
                    <br />
                    <input
                      type="text"
                      value={country}
                      name="country"
                      onChange={this.handleChange.bind(this)}
                    />
                  </label>
                </div>
                <div className="form-group form-input">
                  <label>
                    Role
                    <select name='role' value={role} onChange={this.handleChange}>
                      <option value="acting">acting</option>
                      <option value="directin">directin</option>
                      <option value="writing">writing</option>
                      <option value="showrunning">showrunning</option>
                    </select>
                  </label>
                </div>
                <div className="form-group form-input">
                  <label>
                    IMBD Link:
                  <input
                      type="text"
                      value={imdb_link}
                      name="imdb_link"
                      onChange={this.handleChange.bind(this)}
                    />
                   </label>
                </div>
                <div className="form-submit">
                <input className="submit" type="submit" value="Submit" />
                </div>
              </form>
              </div>
            </div>
          </div>
    );
  }
}