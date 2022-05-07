import React from 'react';
import TimeAgo from 'timeago-react';
import "./CommentCard.css";


export default function CommentCard(props) {

  const url = new URL(props.story.url);
  const domain = url.hostname;

  return (
    
        <div className="comment-card"> 
          <div className="comment-card-details">
            <p>{props}</p>
            <p><TimeAgo datetime={props.comment.created_at} locale='de'/></p>
          </div>
          <div>
              <span>{props}</span>
          </div>
        </div>
    )
}