import React from 'react'

const Pagination = ({postPerPage, totalPosts, paginate, currentPage})=>{
    let lastIndex = currentPage+4;
    console.log(lastIndex)
    let firstIndex = lastIndex-5
    const pageNumbers =[]
 

    for(let i =1;i<=Math.ceil(totalPosts/postPerPage); i++){
        pageNumbers.push(i)
    }
    

    let currentShow = pageNumbers.slice(firstIndex,lastIndex)

    const paginationClass =(currentPage,number)=>{
       return currentPage == number? "pagination-number active" : "pagination-number";
    }

    const test =(number)=>{
  
     
       paginate(number)
       
    }

    return <div>
        <nav>
            <ul className="">
                {currentShow.map(number=>(
                    <li key={number} className={paginationClass(currentPage, number)} onClick={()=>paginate(number)}>
                            {number}
                    </li>
                ))}

            </ul>
        </nav>
    </div>
}

export default Pagination; 