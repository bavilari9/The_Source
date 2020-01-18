import React, { Component } from "react";
import '../public/form.css'
export default class Form extends React.Component {
  constructor() {
    super();
    // set default state
    this.state = {
      inputs: {
        name:'',
        gender:'female',
        dob:1,
        production:'',
        network:'',
        season:'summer',
        country:'',
        credit:'acting',
        imdb_link:'',
        main_profile:'false'
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
    const {name,gender,dob,production,network,season,country,credit,imdb_link,main_profile } = this.state.inputs;

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
                    <select name='gender' value={gender} onChange={this.handleChange.bind(this)}>
                      <option value="female">Female</option>
                      <option value="male">Male</option>
                      <option value="non-binary">Non-Binary</option>
                    </select>
                  </label>
                </div>
                <div className="form-group form-input">
                  <label>
                    DOB:
                  <input
                      type="date"
                      value={dob}
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
                    <select name='season' value={season} onChange={this.handleChange.bind(this)}>
                      <option value="winter">Winter</option>
                      <option value="spring">spring</option>
                      <option value="summer">summer</option>
                      <option value="fall">fall</option>
                    </select>
                  </label>
                </div>
                <div></div>
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
                    credit
                    <select name='credit' value={credit} onChange={this.handleChange.bind(this)}>
                      <option value="acting">acting</option>
                      <option value="directing">directing</option>
                      <option value="writing">writing</option>
                      <option value="showrunning">showrunning</option>
                    </select>
                  </label>
                </div>
                <div className="form-group form-input">
                  <label>
                    IMDB Link:
                  <input
                      type="text"
                      value={imdb_link}
                      name="imdb_link"
                      onChange={this.handleChange.bind(this)}
                    />
                   </label>
                </div>
                <div className="form-group form-input">
                  <label>
                    Prioritize Profile
                    <select name='main_profile' value={main_profile} onChange={this.handleChange.bind(this)}>
                      <option value="true">True</option>
                      <option value="false">False</option>
                    </select>
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