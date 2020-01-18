import React, {  useContext, useState } from "react";

import Select from "react-select";
import Slider, { createSliderWithTooltip } from 'rc-slider';
const Range = createSliderWithTooltip(Slider.Range);


import '../public/search.css'
import 'rc-slider/assets/index.css';
import {customStyles} from '../helpers/customStyles'

import dataContext from '../components/DataContext'

import Filter from '../resources/icons/filter.svg'
import Reset from '../resources/icons/reset.svg'



function AdvancedSearch({advancedQuery, countries}) {
  let { queries,setQueries,onSliderChange, clearState} = useContext(dataContext);
  let [searchActive, setSearchActive] = useState(false)
  let [showDropDown, setShowDropDown] = useState(false)
  let [rangeClass, setRangeClass] = useState('input-age')
        
        

        const credits = [
          { value: '', label: 'All' },
          { value: 'acting', label: 'Acting' },
          { value: 'directing', label: 'Directing' },
          { value: 'writing', label: 'Writing' },
          { value: 'showrunning', label: 'Showrunning' }
        ];
        
        const genderOptions = [
          { value: '', label: 'All' },
          { value: 'female', label: 'Female' },
          { value: 'male', label: 'Male' },
          { value: 'non-binary', label: 'Non-Binary' }
        ];
        const country=[]
        countries.map((data)=>{
          country.push({value:`${data.country}`, label:`${data.country}`})
         })

        

        const setSliderVal=(e,meta)=>{
          onSliderChange(e,advancedQuery)
          setSearchActive(true)
          if(e){
              console.log("setting slider", showDropDown)
            setTimeout(()=>{
              setShowDropDown(false)
              setRangeClass('input-age active')
            },3000  )
           
          }
        }

        const closeDropDown=()=>{
          console.log("clode")
          setSearchActive(true)
        
// to do : close on click
          setShowDropDown(false)

          console.log("setting slider on close ", showDropDown)
          // setRangeClass('input-age active')
        }


        const clearQuery=()=>{
          clearState(setRangeClass,advancedQuery)
          setSearchActive(false)
          console.log("clear query")
          setRangeClass('input-age active')
        }        
   
          
      return (
        <div className="advanced-search">
          <Filter className="filter-btn"/>
          <Select 
          name="credit"
          options={credits}
          value={credits.find(o => o.value === queries['credit']) || 0}
          placeholder  = "Credits"
          onChange={(e,meta)=>setQueries(e,meta,advancedQuery,setSearchActive)}
          classNamePrefix="select-input"
          styles={customStyles}
          />

          <Select 
          name="gender"
          options={genderOptions}
          placeholder  = "Gender"
          value={genderOptions.find(o => o.value === queries['gender']) || 0}
          onChange={(e,meta)=>setQueries(e,meta,advancedQuery,setSearchActive)}
          classNamePrefix="select-input"
          styles={customStyles}
          />
          <label className={rangeClass} onClick={(()=>setShowDropDown(true))}>
          <span>Age {queries.age.min !== '' ? `(${queries.age.min} - ${queries.age.max})` : `(16-99)`}</span>
          <span className="down-icon"> <i class="arrow down"></i></span>
          {showDropDown ?(
           <div className="range-dropdown">
             {/* <div onClick={(()=>closeDropDown())} className="close-btn">x</div> */}
           <Range 
             defaultValue={[20, 40]}  
             step={10}
             min={0} 
             max={100}
             onChange={((e,meta)=>setSliderVal(e,meta))}
             tipFormatter={value => `${value}`}
             tipProps={{visible:true}}
           />
          </div>
            ):(
           null
         )}  
          </label>
          <Select 
          name="country"
          options={country}
          value={country.find(o => o.value === queries['country']) || 0 }
          placeholder  = "Country of Origin"
          onChange={(e,meta)=>setQueries(e,meta,advancedQuery,setSearchActive)}
          multiple={false}
          classNamePrefix="select-input"
          styles={customStyles}
          /> 
          {searchActive? <div onClick={(()=>{clearQuery()})}><Reset className="reset-btn"/></div> : <div></div>}     
          
        </div>
      );
  }

  export default AdvancedSearch;