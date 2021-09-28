/* eslint-disable no-labels */
import React from "react"

 
// import './BlogCard.css'

import classes from './BlogCard.module.css'

const BlogCard = (props) => {
  // dumpLOGS(props)

 
  return (
      <div className={classes.BlogCard}>
        <h2>{props.title}</h2>
        <h5>{props.author}</h5>
        <p>{props.blogText}</p>
        <p>Likes: {props.likes} </p>
        <button onClick ={props.onLikeButtonClick} >Like</button>
      </div>
    );
}

export default BlogCard;