import React, { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import CommentCard from "./CommentCard";



export default function Comments() {


    const [comments, setComments]=useState();
    //const [wordQuery, setWordQuery] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
  
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
  const commentID= 8422771;
 
  
    useEffect(() => {
      setIsLoading(true);   
  
      const urlComment= "http://hn.algolia.com/api/v1/items/"+commentID;

  
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
          console.log(data)         
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setIsError(true);
          setIsLoading(false);
        });
    }, []);
  
    let objRender;

    if (comments) {
    const children =comments.children;
   // console.log(children);
    //console.log(children[0].created_at);
    //console.log(new Date(children[0].created_at));
    //const newChildren= children.map((x) => {return( {...x, created_at:new Date(x.created_at)} )})

    //const sortedChildren = newChildren.sort( (objA, objB) => new Date(objA.created_at) - new Date(objB.created_at),    );
    const sortedChildren = [...children].sort( (objA, objB) => objA.created_at_i - objB.created_at_i,    );
    //console.log(sortedChildren);
    

    objRender = sortedChildren.map ((x) =>
      {
        let myObj = {
          id: x.id,
          children:x.children,
          text:x.text,
          parentId:x.parent_id ,
          created_at:x.created_at ,
          author:x.author,
          
        }
        return myObj;
      })
      console.log(objRender);

 
  }
  
     if (isLoading) {
        return (
          <div className="center">
           {/* <BarLoader color="black" size={30}/> */}
           <ClipLoader color="#000000" size={150} />
  
        </div>
      );  
    } 

     function renderComments(parentComment) {
      parentComment && parentComment.map( (x, index)=>{ 

        let {
          id,
         
          text,
          created_at ,
          author          
        } =x;

       console.log(x.children); 
        if (x.children.length=0)
        return <CommentCard key={index} id= {id} text={text} created_at={created_at} author={author}  />
        if (x.children.length>0)
        return renderComments(x.children)
      } )
    } 
 
    





  return (
    <div>
      <h2>Here the comments to the New clicked id: {commentID} </h2>
      {objRender && renderComments(objRender)}
      
    </div>
  )
}

//{objRender && renderComments(objRender)}