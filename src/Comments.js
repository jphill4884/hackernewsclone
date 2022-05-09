import React, { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import CommentCard from "./CommentCard";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './Comments.css';
import Footer from "./Footer";


export default function Comments() {


    const [comments, setComments]=useState();
    //const [wordQuery, setWordQuery] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const {commentId} = useParams();
    const navigate=useNavigate();
  
  
 
  
    useEffect(() => {
      setIsLoading(true);   
  
      const urlComment= "http://hn.algolia.com/api/v1/items/"+commentId;

  
      fetch(urlComment) 
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              `An error has occured while fetching the data. Status code: ${response.status}`
            );
          }
          return response.json()
        })
        .then((data) => {
          setComments(data);
          //console.log(data)         
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setIsError(true);
          setIsLoading(false);
        });
    }, [commentId]);
  

    if (isError) {
    return (
      <div className="Home">
        <h1>Error loading page, please refresh your page and try again</h1>
      </div>
    );
  } else if (isLoading) {
    return (
      <div className="spinner">
        {/* <BarLoader color="black" size={30}/> */}
        <ClipLoader color="#ff6600" size={350} speed={20} />
      </div>
    );
  }






   
    let sortedChildren;

    if (comments) {
    const children =comments.children;
    sortedChildren = [...children].sort( (objA, objB) => objA.created_at_i - objB.created_at_i,    );    
 
  }
  
/*      if (isLoading) {
        return (
          <div className="spinner">
          
           <ClipLoader color="#ff6600" size={350} speed={20}/>
  
        </div>
      );  } 
      
    */


  return (
    <div >
      <div style={{display:"flex"}}>
        <h2 style={{color: "grey", fontSize:"15px"}}>Here the comments under the new clicked (Object_id: {commentId}) </h2>
        <button style={{margin:"15px"}} onClick={()=>navigate ("/")}>Back</button>
      </div>
      <div className="containerComments">
        <CommentCard indentation ={0} parentComment={sortedChildren}  />  
      </div>  
        <Footer/>
    </div>
  )
}

