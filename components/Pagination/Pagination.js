import React from 'react'
import Button from '../../resources/icons/down_arrow.svg'
const Pagination = ({postPerPage, totalPosts, paginate, currentPage, className})=>{
    let lastIndex = currentPage+4;
    let firstIndex = lastIndex-5
    const pageNumbers =[]

    for(let i =1;i<=Math.ceil(totalPosts/postPerPage); i++){
        pageNumbers.push(i)
    }


    let currentShow = pageNumbers.slice(firstIndex,lastIndex)

    const paginationClass =(currentPage,number)=>{
       return currentPage == number? "pagination-number active" : "pagination-number";
    }

    return <div>
        <nav className={`pagination-nav ${className || ''}`}>
           {currentPage>1?(
               <div class="paginate-back-btn jump-back"onClick={()=>paginate(currentPage-1)}><Button/><p>Previous</p></div>
           ):(
                null
           ) } 
            <ul className="">
                {currentShow.map(number=>(
                    <li key={number} className={paginationClass(currentPage, number)} onClick={()=>paginate(number)}>
                            {number}
                    </li>
                ))}

            </ul>
            {currentPage<pageNumbers.length?(
               <div className="paginate-back-btn jump-last-page"onClick={()=>paginate(currentPage+1)}><Button/><p>Next</p></div>
           ):(
                null
           ) } 
        </nav>
    </div>
}

export default Pagination; 