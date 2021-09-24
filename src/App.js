import './App.css';
import BlogCard from './BlogCard';

function App() {
  const blogObj = {
    title: "Blog 1",
    author: "Vivek Verma"
  }
  const blogArray = [{
    title: "Blog 1",
    author: "Vivek Verma"
  }, {
    title: "Blog 1",
    author: "Vivek Verma"
  }, {
    title: "Blog 1",
    author: "Vivek Verma"
  },{
    title: "Blog 1",
    author: "Vivek Verma"
  },{
    title: " Crazy Blog 1",
    author: "Not Vivek Verma"
  },{
    title: "Blog 1",
    author: "Vivek Verma"
  },{
    title: "Blog 1",
    author: "Vivek Verma"
  }]

  const blogCards = blogArray.map((item, pos) =>{
    return (
      <BlogCard key ={pos}/>
    )
  })
  return (
    <div className="App">
     {blogCards}
    </div>
  );
}

export default App;
