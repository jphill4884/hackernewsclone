import React from 'react';
import "./Pagination.css";

export default function Pagination({page, totalpages, changePage}) {
  
    return (
      
          <div className="container">
            <div className="pagination">
              <button className="page-button left" onClick={()=>changePage(-1)}>{"<< Prev -- " + page+" / "}</button>                  
              <button className="page-button right" onClick={()=>changePage(+1)}>&nbsp;{+totalpages+" -- Next >>"}</button>
            </div>  
          </div>
      )
  }