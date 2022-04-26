import React from 'react';
//import hits from './testdata.json';
import "./StoryCard.css";


export default function StoryCard(props) {
  
  return (
    
        <div className="story-card">
          <div className="story-card-title">
            <p>10.</p>
            <button className="upvote">▲</button>
            <a href={props.story.url} target="_blank" rel="noreferrer" className="story-title">{props.story.title}</a>
            <a href="https://www." target="_blank" rel="noreferrer" className="story-domain">()</a>
          </div>  
          <div className="story-card-details">
            <p>{props.story.points} points</p>
            <p>by {props.story.author}</p>
            <p>3 hours ago</p>
            <p>| hide |</p>
            <p>{props.story.num_comments} comments</p>
          </div>
        </div>
    )
}
