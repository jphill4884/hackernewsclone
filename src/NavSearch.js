import React, { useState } from "react";
import "./NavSearch.css";

export default function NavSearch({ searchWord, numOfResults, hitsPage }) {
  const [input, setInput] = useState("");
  const [results, setResults] = useState();
  console.log(results);

  const setResults1=(e)=>{
    e.preventDefault();
    setResults(e.target.value);
    console.log(e.target.value);
    numOfResults(e.target.value);
  }

  return (
    <>
      {" "}
      <div className="container1">
        <div className="logo"></div>

        <div className="container11">
          <h2>Hacker News</h2>
          <div className="nav">
            <a href="#new">new</a>
            <a href="#">|</a>
            <a href="#past">past</a>
            <a href="#">|</a>
            <a href="#comments">comments</a>
            <a href="#">|</a>
            <a href="#ask">ask</a>
            <a href="#">|</a>
            <a href="#show">show</a>
            <a href="#">|</a>
            <a href="#jobs">jobs</a>
            <a href="#">|</a>
            <a href="#submit">submit</a>
          </div>
        </div>

        <div className="container2">

        <div className="select">
        <select id="results" value={hitsPage}
           onChange={setResults1}
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
          <option value="500">500</option>
          <option value="1000">1000</option>
          
        </select>
        </div>

        
          <form onSubmit={(e) => {
            e.preventDefault();
            searchWord(input)
            }}>
            <input
              value={input}
              type="text"
              onChange={(e) => setInput(e.target.value)}
              placeholder="Search.."
            />
            <button className="Go">Go</button>
          </form>
        </div>
      </div>
    </>
  );
}
