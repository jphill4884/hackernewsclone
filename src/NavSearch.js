import React, { useState } from "react";
import "./NavSearch.css";

export default function NavSearch({ searchWord, numOfResults }) {
  const [input, setInput] = useState("");
  const [results, setResults] = useState("10");
  console.log(input);

  const setResults1=(val)=>{
    setResults(val);
    numOfResults(val);
  }

  return (
    <>
      {" "}
      <div className="container">
        <div className="logo"></div>

        <div className="container2">
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

        <div className="select">
        <select id="results" value={results}
           onChange={(e) => setResults1(e.target.value)}
        >
          <option value="10">10</option>
          <option value="100">100</option>
          <option value="500">500</option>
          <option value="1000">1000</option>
          
        </select>
        </div>

        <div className="input">
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
