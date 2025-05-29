import React from 'react';
import axios from 'axios';
import {useState,useEffect} from 'react';
import Card from './Card';
import './Card.css';
import ReactPaginate from 'react-paginate';
import './Wrapper.css';
import Detailed from './Detailed';


 function Wrapper() {

    const [data,setData]= useState([]);
    const [loading ,setLoading]= useState(true);
    const [err,setError]= useState(null);
    const [pageNumber,setPageNumber]= useState(0);

     useEffect(()=>{
         
        axios.get("https://dummyjson.com/products?limit=194&skip=0")
        .then(res=>{
            setData(res.data.products);
            setLoading(false);

        })
        .catch((err)=>{
            
             setError(err);
             setLoading(false);
        })

        

     },[])

     if(loading) return <div>Loading...</div>
     if(err) return <div> Error: {err}</div>

     

    const productsPerPage= 25;
    const pagesVisited= pageNumber * productsPerPage;

    const displayProducts = data.slice(pagesVisited,pagesVisited+productsPerPage);
   
     const pageCount=Math.ceil(data.length/productsPerPage);

     const changePage= ({selected})=>{

         setPageNumber(selected)
     };

  return (
    <div >
      
     <Card data={displayProducts}/>
     <Detailed data={displayProducts}/>

   <div className="pagination-info">
     <ReactPaginate 
       
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount= {pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
         previousLinkClassName={"previousBttn"}
         nextLinkClassName={"nextBttn"}
         disabledClassName={"paginationDisabled"}
         activeClassName={"paginationActive"}
        
     />
     </div>

     

    </div>
  );
}

export default Wrapper;
