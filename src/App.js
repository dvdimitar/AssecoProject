import './App.css';
import BlogList from "./Components/BlogList";
import {BrowserRouter as Router,Route} from "react-router-dom";
import AddBlog from './Components/AddBlog'
import UpdateBlog from "./Components/UpdateBlog";
import Header from "./Components/Header";
import Register from "./Components/LogIn/Register";



function App() {
  return (
    <Router>
   <div className={"container"}>
       <Header/>
       <Route path={"/register"}
              exact render={()=>
           <Register/>}/>
       <Route path={"/blogs/edit/:id"}
              exact render={()=>
           <UpdateBlog/>}/>
       <Route path={"/blogs/add"}
              exact render={()=>
           <AddBlog/>}/>
       <Route path={"/blogs"}
              exact render={()=>
           <BlogList blogs/>}/>
       <Route path={"/"}
       exact render={()=>
       <BlogList blogs/>}/>
   </div>
    </Router>
  );
}

export default App;
