import React from 'react';
import "./Footer.css";

export default function Footer({page, totalpages, changePage}) {
  
    return (
      
          <div className="footer">
            <div className="pagination">
              <button className="page-button left" onClick={()=>changePage(-1)}>{"<< Prev -- " + page+" / "}</button>
                  
              <button className="page-button right" onClick={()=>changePage(+1)}>&nbsp;{+totalpages+" -- Next >>"}</button>

            </div>  
          </div>
      )
  }