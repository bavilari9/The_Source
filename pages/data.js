import React, { Component, useContext, useState} from 'react'
import {withAuthSync} from '../utils/auth'
import dataContext from '../components/DataContext'
import fetch from 'isomorphic-unfetch'
import Profile from '../components/Profile'
import Pagination from '../components/Pagination/Pagination'
import Form from '../components/form'
import '../public/data.css'

import AdvancedSearch from '../components/AdvancedSearch'
import {advancedQuery} from '../api/api'
import {queryString} from '../helpers/QueryString'
 
const Data = props => {
  let {data,countries,queries, setData, submitFormData,setDeleteData, setSubmitEdit, handleAdminChange} = useContext(dataContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(20);

  const submitForm =(data)=>{
    fetch(`${process.env.MANAGEMENT}/profile`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(response=>response.json())
    .then(res=>{
      submitFormData(res)
    })
  }
  const submitDelete=(id)=>{
    fetch(`${process.env.MANAGEMENT}/profile/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(res=>{
      setDeleteData(id)
    })
  }
  
  const submitEdit = (id)=>{
    let edit = data.filter( s=> s.id === id);
    fetch(`${process.env.MANAGEMENT}/profile/${id}`, {
      method: 'PUT',
      body: JSON.stringify(edit),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(res=>{
      setSubmitEdit(id,edit)
    })
  }
  const dataQuery =(query)=>{
    setCurrentPage(1)
    advancedQuery(query,setData)

  }

  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
  };


  const indexOfTheLastPost = currentPage * postPerPage;
  const indexOfFirstPage = indexOfTheLastPost - postPerPage;
  const curentProfile =data.slice(indexOfFirstPage, indexOfTheLastPost);
  return (
    <div>  
      
      <Form
      submitForm = {submitForm}
      />
        <AdvancedSearch
          advancedQuery = {dataQuery}
          countries= {countries}
        />
      <div>
      {data.length > 700?(
        <h2><span>Showing all talent</span></h2>
      ):(
        <h2 className="search-query">{data.length} Results for <span>{queryString(queries)}</span> </h2>
      )}
        <p>Edit: hover and modify the field, click on edit button   </p>
      </div>
      <Profile 
      data={curentProfile}
      delete = {submitDelete}
      update = {submitEdit}
      handleChange= {handleAdminChange}
      />
      <Pagination
          postPerPage={20}
          totalPosts={data.length}
          paginate={paginate}
          currentPage={currentPage}
        />
  </div>
  )
}

// Data.getInitialProps = async function(ctx) {
//   console.log("this is initial props form data", ctx)
//   return {}
// }


export default Data;