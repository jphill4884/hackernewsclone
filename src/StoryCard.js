import React from 'react';
import hits from './testdata.json';
import "./StoryCard.css";

const story = hits.hits[1];

const url = new URL(story.url);
const domain = url.hostname;

const StoryCard = () => {

    return (
        <div className="story-card">
          <div className="story-card-title">
            <h3>1.</h3>
            <button className="upvote">▲</button>
            <a href={url} className="story-title">{story.title}</a>
            <a href={domain} className="story-domain">({domain})</a>
          </div>  
          <div className="story-card-details">
            <p>{story.points} points</p>
            <p>by {hits.author}</p>
            <p>3 hours ago</p>
            <p>| hide |</p>
            <p>{story.num_comments} comments</p>
          </div>
        </div>
    )
}

export default StoryCard;