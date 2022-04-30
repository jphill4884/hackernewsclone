import React from 'react';
import TimeAgo from 'timeago-react';
import "./StoryCard.css";


export default function StoryCard(props) {

  const url = new URL(props.story.url);
  const domain = url.hostname;

  // seconds
  // minutes
  // hours
  // days
  // years

  // 1. Do everything yourself by using the internal JS date ❌
  // 2. Do yourself manually a few things, but delegate the rest to a library 🎉 date-fns https://date-fns.org/v2.28.0/docs/differenceInMinutes
  // 3. Delegate everything to the library ✅ date-fns https://date-fns.org/v2.28.0/docs/formatDistanceToNow
  // 4. There's probably an npm package for that 🦄 https://www.npmjs.com/package/timeago-react

  return (
    
        <div className="story-card">
          <div className="story-card-title">
            <p>{props.storyNum+1}.</p>
            <button className="upvote">▲</button>
            <a href={props.story.url} target="_blank" rel="noopener noreferrer" className="story-title">{props.story.title}</a>
            <a href={url} target="_blank" rel="noopener noreferrer" className="story-domain">({domain})</a>
          </div>  
          <div className="story-card-details">
            <p>{props.story.points} points</p>
            <p>by {props.story.author}</p>
            <p><TimeAgo datetime={props.story.created_at} locale='de'/></p>
            <p>| hide |</p>
            <p>{props.story.num_comments} comments</p>
          </div>
        </div>
    )
}
