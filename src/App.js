import React, { useState, useEffect } from "react";
import './App.css';
import StoryCard from './StoryCard.js'
import NavSearch from './NavSearch.js'

//  import BarLoader from "react-spinners/BarLoader";
 import ClipLoader from "react-spinners/ClipLoader";


function App() {

  const [news, setNews]=useState();
  const [wordQuery, setWordQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [Page, setPage] = useState(false);
  
  // const [tags, setTag] = useState("story");
  const [hitsPage, setHitsPage] = useState("10");

const searchWord=(word)=>{
  
 setWordQuery(word);
}

const  numOfResults=(num)=>{   
   setHitsPage(num);  
}


/* http://hn.algolia.com/api/v1/search?query=&restrictSearchableAttributes=url&tag=story&hitsPerPage=100*/



  useEffect(() => {
    setIsLoading(true);   

    const urlSearch= new URL("http://hn.algolia.com/api/v1/search_by_date");
    urlSearch.searchParams.set("query", wordQuery);
    urlSearch.searchParams.set("restrictSearchableAttributes", "url");
    urlSearch.searchParams.set("tags", "story");
    urlSearch.searchParams.set("hitsPerPage", hitsPage);
    urlSearch.searchParams.set("Page", 1);
   
     console.log("Hello URL:"+ urlSearch); 

    fetch(urlSearch) 
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
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsError(true);
        setIsLoading(false);
      });
  }, [wordQuery,hitsPage]);


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

    // if (news) {
    // array = Object.values(news)
    
    /* console.log(array); */
   

  return (
    <div className="App">

    <NavSearch searchWord={searchWord} numOfResults={numOfResults}/> 
    {news && news.hits.filter(story => story.url !== null).map((story, index) => <StoryCard key={index} story={story} storyNum={index} />)}
  {/*   {news && news.hits.map((story, index) => <StoryCard key={index} story={story}/>)} */}

    </div>
    );
  
}

export default App;
