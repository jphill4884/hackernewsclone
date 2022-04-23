import React, { useState, useEffect } from "react";
/*  import ClipLoader from "react-spinners/ClipLoader"; */ 
import './App.css';
import StoryCard from './StoryCard.js'

function App() {

  const [news,setNews]=useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);


  useEffect(() => {
    setIsLoading(true);
    fetch("http://hn.algolia.com/api/v1/search?query=&restrictSearchableAttributes=url") // GET by default
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `An error has occured while fetching the data. Status code: ${response.status}`
          );
        }
        return response.json();
      })
      .then((data) => {
        setNews(data);
         console.log(data.hits);
        
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsError(true);
        setIsLoading(false);
      });
  }, []);
  console.log(news.hits); 

/*    if (isLoading) {
    return (
      <div className="center">
        <ClipLoader color="black" size={30} />
      </div>
    );
  } */ 


  return (
    <div className="App">
    </div>
  );
}

export default App;
