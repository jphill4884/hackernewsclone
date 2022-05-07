import React from 'react';
import TimeAgo from 'timeago-react';
import "./CommentCard.css";


export default function CommentCard({id, text, created_at, author}) {
  

 // const url = new URL(props.story.url);
  //const domain = url.hostname;

function writeText  () {
  return { __html:text}
}


  return (
    
        <div className="comment-card"> 
       
          <div className="comment-card-details">
          <p>{id}</p>
            <p>{author}</p>
            <p><TimeAgo datetime={created_at} locale='de'/></p>
          </div>
          <div className="textComment">
          
           <p dangerouslySetInnerHTML={ writeText() } />
           
          </div>
        </div>
    )
}