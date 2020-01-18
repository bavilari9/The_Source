import React , {useContext, useState}from "react";
import '../../public/landingContent.css'
import ProfileItem from "../Profile/ProfileItem";
import Pagination from '../Pagination/Pagination'

import dataContext from '../DataContext'
import {queryString} from '../../helpers/QueryString'
import Select from "react-select";
import Sort from '../../resources/icons/sort.svg'

// import {customStyles} from '../../helpers/customStyles'

export function Content({ postPerPage, totalPosts,paginate, currentPage,indexOfFirstPage, indexOfTheLastPost}) {
  let  {data, queries, sortSetter} = useContext(dataContext);
  const [test, setTest] = useState(undefined);

  console.log("test", test)
    data = !data ? [] : data;
    data = data.slice(indexOfFirstPage, indexOfTheLastPost) 
    const handleChange = e => {
      setTest(e.value)
      sortSetter ()

    }; 
  const opts = [{value: 'Best Match', label: 'Best Match'}]
  const customStyles = {
    control: (base, state) => ({
      ...base,
      backgroundColor: state.isSelected ? 'none' : "none",
      // match with the menu
      borderRadius: 0,
      // Overwrittes the different states of border
      borderColor:  "none",
      // Removes weird border around container
      boxShadow: null,
      background:"none",
      color:'#ffffff',
    
      border: "solid 2px #848c8e",
      "&:hover": {
        // Overwrittes the different states of border
        borderColor: state.isFocused ? "none" : "none"
      }
    }),
    menu: base => ({
      ...base,
      background:"none",
      color:'#ffffff',
      // override border radius to match the box
      borderRadius: 0,
      // beautify the word cut by adding a dash see https://caniuse.com/#search=hyphens for the compatibility
      hyphens: "auto",
      // kill the gap
      marginTop: 0,
      textAlign: "left",
      // prevent menu to scroll y
      wordWrap: "break-word",

    }), placeholder: (base) => ({
          ...base,
          color: '#848c8e',
    }),
    menuList: (base,state)=> ({
      ...base,
      // kill the white space on first and last option
      padding: 0,
      paddingBotton: 20,
      background:"none",
      backgroundColor:state.isSelected ? 'black' : 'none',
      marginTop:-13,
      border: " solid 2px #848c8e",

    }),
    option: (base, state) => ({
           ...base,
           background:"none",
           backgroundColor:state.isSelected ? 'black' : 'none',
           color: state.isSelected ? '#ff4848' : '#848c8e',
           "&:hover": {
            // Overwrittes the different states of border
            color:'#ff4848',
            cursor:'pointer'
            
          }
    })
  };
  return ( 
    <div className="landing-content">

      {totalPosts > 700?(
        <h2><span>Showing all talent</span></h2>
      ):(
        <h2 className="search-query">{totalPosts} Results for <span>{queryString(queries)}</span> </h2>
      )}
      <div className="sort-wrapper">
          <Sort className="sort" />
          <Select 
          name="credit"
          value={opts.find(o => o.value === test) || 0}
          options={opts}
          placeholder  ="Sort by"
          onChange={(e)=> handleChange(e)}
          classNamePrefix="sort"
          styles={customStyles}
          />
      </div>
      <div className="card-wrapper">
       {data.map((data,key)=><ProfileItem key={key} profile={data}/>)}
      </div>
      {totalPosts?(
        <div>
          <Pagination
          postPerPage={postPerPage}
          totalPosts={totalPosts}
          paginate={paginate}
          currentPage={currentPage}
        />
        <p className="pagination-data">{currentPage}-{indexOfTheLastPost}/{totalPosts}</p>
        </div>
      ):(
        null
      )}
      
    </div>
  )
}