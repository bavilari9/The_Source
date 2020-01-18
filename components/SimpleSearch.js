import React, { Component } from "react";

export default class AdvancedQuery extends React.Component {
  constructor() {
    super();
    // set default state
    this.state = {
     query:''
    };
  }
  handleChange(e) {
    const val = e.target.value;
    const name = e.target.name;
    this.setState(prev => {
      prev[name] = val;
      return prev;
    });
  }
  submitForm(e) {
    e.preventDefault();
    this.props.queryForm(this.state.query);
  }

  render() {
    const { query} = this.state;
    return (
      <div className="page-wrapper">
            <div className="form-content">
            <div className="simple-form">
              <form onSubmit={this.submitForm.bind(this)}>
                <div className="form-group form-input">
                  <label>
                    Talent Directory
                  <input
                      type="text"
                      value={query}
                      name="query"
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
