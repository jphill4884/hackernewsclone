import React, { useState, useEffect } from "react";
import './App.css';
import StoryCard from './StoryCard.js'
import NavSearch from './NavSearch.js'
import Footer from "./Footer.js"



function App() {

  const [news, setNews]=useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);


  useEffect(() => {
    setIsLoading(true);
    fetch("http://hn.algolia.com/api/v1/search_by_date?query=&restrictSearchableAttributes=url&tags=story&hitsPerPage=30") 
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
  }, []);



    if (news) {

      return (
        <div className="App">
          <NavSearch/> 
          {news.hits.filter(story => story.url !== null).map((story, index) => <StoryCard key={index} story={story} storyNum={index}/>)}
          <Footer />
        </div>
    );
  }
}

export default App;
