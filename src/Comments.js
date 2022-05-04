import React, { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";





export default function Comments() {


    const [news, setNews]=useState();
    const [wordQuery, setWordQuery] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [page, setPage] = useState(1);
    const [totalpages, setTotalPages] = useState();
    
    // const [tags, setTag] = useState("story");
    const [hitsPage, setHitsPage] = useState("10");
  
  const searchWord=(word)=>{
    
   setWordQuery(word);
  }
  
  const  numOfResults=(num)=>{   
     setHitsPage(num);  
  }
  
  const changePage =(num)=> {
    if(num+page<1)return;
    setPage(num+page)  
  } 
  
  
  /* https://hacker-news.firebaseio.com/v0/item/30687212.json?print=pretty, where 30687212 is comment ID */
  /* http://hn.algolia.com/api/v1/search?tags=comment,story_X, where X is objectID for the story*/
  
  const commentID=30687212;
  
    useEffect(() => {
      setIsLoading(true);   
  
      const urlComment= "https://hacker-news.firebaseio.com/v0/item/"+commentID+ ".json?print=pretty";
   
     
        console.log("Hello URL:"+urlComment);  
  
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
          setNews(data);
          console.log(data)
          setTotalPages(data.nbPages)
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setIsError(true);
          setIsLoading(false);
        });
    }, [wordQuery,hitsPage, page]);
  
  
    // https://www.npmjs.com/package/react-paginate
  
    // npm install --save react-spinners
   
    // let array = [];
  
  
     if (isLoading) {
        return (
          <div className="center">
           {/* <BarLoader color="black" size={30}/> */}
           <ClipLoader color="#000000" size={150} />
  
        </div>
      );  
    } 




  return (
    <div>
      <h2>This is a comment</h2>
    </div>
  )
}
