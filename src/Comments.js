import React, { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import CommentCard from "./CommentCard";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function Comments() {


    const [comments, setComments]=useState();
    //const [wordQuery, setWordQuery] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const {commentId} = useParams();
    const navigate=useNavigate();
  
/*   const searchWord=(word)=>{
    
   setWordQuery(word);
  }
  
  const  numOfResults=(num)=>{   
     setHitsPage(num);  
  } */
  
/*   const changePage =(num)=> {
    if(num+page<1)return;
    setPage(num+page)  
  }  */
  
  {/* <a href="https://news.ycombinator.com/item?id=27516212">171 comments</a> */}
  /* https://hacker-news.firebaseio.com/v0/item/30687212.json?print=pretty, where 30687212 is comment ID */
  /* http://hn.algolia.com/api/v1/search?tags=comment,story_X, where X is objectID for the story*/
  
  //const commentID=8422599;
  
 
  
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
    }, []);
  
   
    let sortedChildren;

    if (comments) {
    const children =comments.children;
    sortedChildren = [...children].sort( (objA, objB) => objA.created_at_i - objB.created_at_i,    );    
 
  }
  
     if (isLoading) {
        return (
          <div className="center">
           {/* <BarLoader color="black" size={30}/> */}
           <ClipLoader color="#000000" size={150} />
  
        </div>
      );  }  


  return (
    <div >
      <div style={{display:"flex"}}>
        <h2 style={{color: "grey", fontSize:"15px"}}>Here the comments under the new clicked (Object_id: {commentId}) </h2>
        <button style={{margin:"15px"}} onClick={()=>navigate ("/")}>Back</button>
      </div>
        <CommentCard indentation ={0} parentComment={sortedChildren}  />  
        
    </div>
  )
}

