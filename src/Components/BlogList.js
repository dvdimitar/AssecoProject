import React from "react";
import BlogService from "../Service/BlogService";
import {Link,withRouter} from "react-router-dom";
import SingleBlogPage from "./SingleBlogPage";

class BlogList extends React.Component{
    constructor(props) {
        super(props);
    this.state = {
        blogs: []
    }
    this.editBlog = this.editBlog.bind(this);
    this.deleteBlog = this.deleteBlog.bind(this);
    }

    componentDidMount() {
       BlogService.getBlogs().then((res) =>{
           this.setState({
               blogs: res.data
           })
       });
    }

    editBlog(id){
        this.props.history.push(`/blogs/edit/${id}`)
    }

    readMore(id){
        this.props.history.push(`/blogs/${id}`)
    }

    deleteBlog(id){
        BlogService.deleteBlog(id).then((res)=>{
            this.setState({
                blogs:res.data
            })
        });
    }


    render() {

        return(
            <div>
                <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet"
                      id="bootstrap-css"/>
                <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"/>
                <script src="//code.jquery.com/jquery-1.11.1.min.js"/>

                <div className="index-content">
                    <div className="container">
                        {this.state.blogs.map(blog =>
                            <div className="col-lg-8" key={blog.id}>
                                <div className="card">
                                    <h4>{blog.title}</h4>
                                    <p>{blog.description}</p>
                                    <span id={"span_time"} className="badge pull-right">Posted: {blog.postTime}</span>
                                {/*    <Link to={{*/}
                                {/*    pathname: '/blogs/'+blog.id,*/}
                                {/*    state: {*/}
                                {/*        blogs:this.state.blogs*/}
                                {/*    }*/}
                                {/*}}>Read more</Link>*/}
                                    <a href={`/blogs/${blog.id}`} className="blue-button">Read More</a>
                                    {/*<button id="readMore" name="readMore" onClick={()=>this.readMore(blog.id)}  className={"btn btn-info"}>Read more</button>*/}
                                    <button id={"svg_button"} onClick={()=>this.deleteBlog(blog.id)}>
                                        <svg id={"svg"} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                             className="bi bi-trash" viewBox="0 0 16 16">
                                            <path
                                                d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                            <path fillRule="evenodd"
                                                  d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                        </svg>
                                    </button>
                                </div>
                                <button id="update" name="update" onClick={()=>this.editBlog(blog.id)}  className={"btn btn-primary"}>Update</button>
                            </div>)}
                    </div>
                </div>
            </div>
        )
    }

}



export default withRouter(BlogList);

//
// return(
//     <div>
//         <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet"
//               id="bootstrap-css"/>
//         <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"/>
//         <script src="//code.jquery.com/jquery-1.11.1.min.js"/>
//         <link rel="stylesheet" href="../bodyCss.css"/>
//
//         <div className="index-content">
//             <div className="container">
//                 <a href="blog-ici.html">
//                     <div className="col-lg-12">
//                     </div>
//                 </a>
//                 <div className="col-lg-8">
//                     {this.state.blogs.map(blog =>
//                         <div className="card">
//                         <h4>{blog.title}</h4>
//                         <p>{blog.description}</p>
//                         <a href="blog-ici.html" class="blue-button">Read More</a>
//                         </div>
//                     <a href={"/"}>
//                         <svg id={"svg"} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
//                              className="bi bi-trash" viewBox="0 0 16 16">
//                             <path
//                                 d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
//                             <path fill-rule="evenodd"
//                                   d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
//                         </svg>
//                     </a>
//
//                 </div>
//                 <a href="blog-ici.html">
//                     <div className="col-lg-8">
//                         <div className="card">
//                             <h4>Investment Strategy</h4>
//                             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
//                                 incididunt ut labore et dolore magna aliqua.</p>
//                             <a href="blog-ici.html" className="blue-button">Read More</a>
//                         </div>
//                     </div>
//                 </a>
//
//             </div>
//         </div>
//     </div>
// )


                    //
                    //
                    //     render() {
                    //     return(
                    //     <div>
                    //     <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css"/>
                    //     <h2 className="text-center">Blog List</h2>
                    //     <div className="row">
                    //
                    //     <table className={"table table-striped table-bordered"}>
                    //     <thead>
                    //     <tr>
                    //     <th>
                    //     Title
                    //     </th>
                    //     <th>
                    //     Description
                    //     </th>
                    //     <th>
                    //     Author
                    //     </th>
                    //     <th>
                    //     PostTime
                    //     </th>
                    //     <th>
                    //     Actions
                    //     </th>
                    //     </tr>
                    //     </thead>
                    //     <tbody>
                    // {this.state.blogs.map(blog =>
                    //     <tr key={blog.id}>
                    //     <td>{blog.title}</td>
                    //     <td>{blog.description}</td>
                    //     <td>{blog.author}</td>
                    //     <td>{blog.postTime}</td>
                    //     <td><button onClick={()=>this.editBlog(blog.id)}
                    //     className={"btn btn-info"}>Update</button>
                    //     </td>
                    //     <td><button onClick={()=>this.deleteBlog(blog.id)}
                    //     className={"btn btn-danger"}>Delete</button>
                    //     </td>
                    //     </tr>
                    //     )}
                    //     </tbody>
                    //     </table>
                    //     </div>
                    //     <div className="col mb-3">
                    //     <div className="row">
                    //     <div className="col-sm-12 col-md-12">
                    //     <Link className={"btn btn-block btn-dark"} to={"/blogs/add"}>Add new blog</Link>
                    //     </div>
                    //     </div>
                    //     </div>
                    //     </div>
                    //     )
                    // }
