import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import Profile from './Profile'
import Form from './form'
import Layout from './layout';

export default class AdminData extends Component {
  constructor(){
    super();
    this.state = {
      data:[]
    }
  }
  getDerivedStateFromProps(){
    this.setState({data: this.props.data})
  }

submitDelete (id) {
  fetch(`${process.env.MANAGEMENT}/profile/${id}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
  .then(res=>{
    this.setState(prev =>{
        prev.data = prev.data.filter( s=> s.id !== id);
        return prev;
    })
  })
}

submitEdit(id){

  const data = this.state.data.filter( s=> s.id === id);
  fetch(`${process.env.MANAGEMENT}/profile/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
  .then(res=>{
    this.setState(prev =>{
       data[id] = data 
    })
  })
}

handleChange(id,e) {
  const val = e.target.value;
  const name = e.target.name;
  this.setState(prev => {
    prev.data[id][name] = val;
    return prev;
  });
}

  render() {
      const data = this.props.data;
    return (
        <Layout>
        <Form
        submitForm = {this.submitForm.bind(this)}
        />
        <Profile 
          data={data}
          delete = {this.submitDelete.bind(this)}
          update = {this.submitEdit.bind(this)}
          handleChange= {this.handleChange.bind(this)}
        />
        </Layout>
    )
  }
}