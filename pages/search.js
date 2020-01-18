
import React, { useState, useContext} from "react";
import fetch from "isomorphic-unfetch";
import { Nav } from "../components/nav";
import { Content } from "../components/Search/Content";
import AdvancedSearch from "../components/AdvancedSearch";
import "../public/main.css";




import dataContext from "../components/DataContext";

function Search({ }) {
  let { data,countries, setData} = useContext(dataContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(20);



  const advancedQuery = query => {
    fetch(
      `${process.env.MANAGEMENT}/search/advanced/${JSON.stringify(query)}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }
    )
      .then(res => res.json())
      .then(res => {
        setData(res);
        setCurrentPage(1)
      });
  };

  const paginate = pageNumber => {
    if(pageNumber >0 ){
      setCurrentPage(pageNumber);
    }
   
  };


  data = !data? [] :data;
  const indexOfTheLastPost = currentPage * postPerPage;
  const indexOfFirstPage = indexOfTheLastPost - postPerPage;
  const curentProfile =data.slice(indexOfFirstPage, indexOfTheLastPost);


  return (
    <div>
        <Nav/>
        <AdvancedSearch
          advancedQuery = {advancedQuery}
          countries= {countries}
        />
        <Content
          data={curentProfile}
          postPerPage={postPerPage}
          totalPosts={data.length}
          paginate={paginate} 
          currentPage={currentPage}
          indexOfFirstPage = {indexOfFirstPage}
          indexOfTheLastPost={indexOfTheLastPost}
        />

        <div id="search-section"className="verify-section">
          <h1>Want to be included on the list?</h1>
          <p>Get in touch to have us add your profile.</p>
          <a href={"/contact"}>Request my profile</a>
        </div>


    </div>
  );
}


export default Search;