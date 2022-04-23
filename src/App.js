import { useState, useEffect } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import './App.css';

function App() {

  const [news,setNews]=useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);


  useEffect(() => {
    setIsLoading(true);
    fetch("http://hn.algolia.com/api/v1/search?query=""&restrictSearchableAttributes=url") // GET by default
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
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsError(true);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="center">
        <BeatLoader color="black" size={30} />
      </div>
    );
  }


  return (
    <div className="App">
    <h1>Hello world!</h1>
    </div>
  );
}

export default App;
