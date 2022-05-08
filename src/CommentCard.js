import React from 'react';
import TimeAgo from 'timeago-react';
import "./CommentCard.css";
import parse from 'html-react-parser';


export default function CommentCard({indentation, parentComment}) {

function writeText  (text) { 
    const textParsed =parse(""+text);  
   return textParsed
}


  return (
    <>
       {parentComment&& parentComment.map( (x, index) =>{console.log(x);
         return(      
            
       
        <div key={index} className="comment-card">         
          <div className={"identation"+indentation}>

            <div className="comment-card-details">
              <button className="upvote">▲</button>
              <p>{x.id}</p>
              <p>{x.author}</p>
              <p>{new Date(x.created_at).toGMTString()}  (<TimeAgo datetime={x.created_at} locale='de'/>)</p>
              <p>{x.points} points</p>
            </div>

            <div className="textComment">            
                {writeText(x.text) }            
            </div> 
            { x.children.length>0 && <CommentCard indentation ={indentation+1} parentComment={x.children}   /> }
             </div>
        </div>     

        ) } )}
    </>
    )
}