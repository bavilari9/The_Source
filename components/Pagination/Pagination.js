import React from 'react'
import Button from '../../resources/icons/down_arrow.svg'
const Pagination = ({postPerPage, totalPosts, paginate, currentPage})=>{
    let lastIndex = currentPage+4;
    let firstIndex = lastIndex-5
    const pageNumbers =[]

    console.log("fist index", totalPosts)

    for(let i =1;i<=Math.ceil(totalPosts/postPerPage); i++){
        pageNumbers.push(i)
    }
    console.log("page numbers", pageNumbers)

    let currentShow = pageNumbers.slice(firstIndex,lastIndex)

    const paginationClass =(currentPage,number)=>{
       return currentPage == number? "pagination-number active" : "pagination-number";
    }

    return <div>
        <nav className="pagination-nav">
           {currentPage>1?(
               <div class="paginate-back-btn"onClick={()=>paginate(currentPage-1)}><Button/><p>Previous</p></div>
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
               <div class="paginate-back-btn jump-last-page"onClick={()=>paginate(pageNumbers.length)}><Button/><p>Last</p></div>
           ):(
                null
           ) } 
        </nav>
    </div>
}

export default Pagination; 