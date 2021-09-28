import './App.css';
import BlogCard from './BlogCard';
import {isArrayEmpty } from './Utils';
import React from 'react';

class App extends React.Component {

  state = {
    showBlogs: true,
    blogArray: [{
      title: "Blog 1",
      author: "Vivek Verma",
      likes: 0
    }, {
      title: "Blog 2",
      author: "Vivek Verma",
      likes: 0
    }, {
      title: "Blog 3",
      author: "Vivek Verma",
      likes: 0
    },{
      title: "Blog 4",
      author: "Vivek Verma",
      likes: 0
    },{
      title: "Blog 5",
      author: "Vivek Verma",
      likes: 0
    }]
  }
  
    onLikeButtonClick = (position) => {
      // alert()
      const blogs = this.state.blogArray;
      const updatedBlogobj = blogs[position]
      updatedBlogobj.likes = updatedBlogobj.likes+1;
      blogs[position]=updatedBlogobj
      this.setState({blogArray: blogs})
      }
  
     

  // showBlogs = true;

   
   hideBlogs =() => {

    this.setState( (prevState, prevProps) => {
      return {showBlogs: !prevState.showBlogs}
    } )
  }
  

  render (){
    const blogCards = isArrayEmpty(this.state.blogArray) ? [] : this.state.blogArray.map((item, pos) =>{
      return (
        <BlogCard 
        key ={pos} 
        title = {item.title}
        author = {item.author}
        likes = {item.likes}
        onLikeButtonClick = { () => this.onLikeButtonClick(pos)}
        position ={pos}
        blogText = "And welcome back to my quarters in this video.We will learn about props in the booth.We do we created this blog guide complement."
        />
      )
    })
    // console.log("Render called")
    return (
      <div className="App">
        <button onClick={this.hideBlogs}>{this.state.showBlogs ? "Hide" : "Show"}</button>
        <br></br>
       {this.state.showBlogs ? blogCards: null}
      </div>
    );
  }
  
}

export default App;
