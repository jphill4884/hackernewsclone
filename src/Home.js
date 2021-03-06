import React, { useState, useEffect } from "react";
import "./Home.css";
import StoryCard from "./StoryCard.js";
import NavSearch from "./NavSearch.js";
import Pagination from "./Pagination";
import Footer from "./Footer";

//  import BarLoader from "react-spinners/BarLoader";
import ClipLoader from "react-spinners/ClipLoader";

function Home() {
  const [news, setNews] = useState();
  const [wordQuery, setWordQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [totalpages, setTotalPages] = useState();

  // const [tags, setTag] = useState("story");
  const [hitsPage, setHitsPage] = useState("50");

  const searchWord = (word) => {
    setWordQuery(word);
  };

  const numOfResults = (num) => {
    setHitsPage(num);
  };

  const changePage = (num) => {
    if (num + page < 1) return;
    setPage(num + page);
  };

  /* http://hn.algolia.com/api/v1/search?query=&restrictSearchableAttributes=url&tag=story&hitsPerPage=100*/

  useEffect(() => {
    setIsLoading(true);

    const urlSearch = new URL("https://hn.algolia.com/api/v1/search_by_date");
    urlSearch.searchParams.set("query", wordQuery);
    urlSearch.searchParams.set("restrictSearchableAttributes", "url");
    urlSearch.searchParams.set("tags", "story");
    urlSearch.searchParams.set("hitsPerPage", hitsPage);
    urlSearch.searchParams.set("page", page);

    //console.log("Hello URL:"+ urlSearch);

    fetch(urlSearch)
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
        //console.log(data)
        setTotalPages(data.nbPages);

        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsError(true);
        setIsLoading(false);
      });
  }, [wordQuery, hitsPage, page]);

  // https://www.npmjs.com/package/react-paginate

  // npm install --save react-spinners

  // let array = [];

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
  } else {
    return (
      <div className="Home">
        <NavSearch
          searchWord={searchWord}
          numOfResults={numOfResults}
          hitsPage={hitsPage}
        />
        {news &&
          news.hits
            .filter((story) => story.url !== null)
            .map((story, index) => (
              <StoryCard key={index} story={story} storyNum={index} />
            ))}
        <Pagination
          page={page}
          totalpages={totalpages}
          changePage={(num) => changePage(num)}
        />
        <Footer />
      </div>
    );
  }
}

export default Home;
