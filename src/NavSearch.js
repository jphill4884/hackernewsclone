import React from "react";
import "./NavSearch.css";



export default function NavSearch(props) {
  return (
        <>  <div class="container">
                <div class="logo"></div>

                 <div class="container2">
                    <h2>Hacker News</h2>
                        <div class="nav">
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
                <div class="input">
                   <input type="text" placeholder="Search.."/>
                </div> 
            </div>

        </>   
  );
}
