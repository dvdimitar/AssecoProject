import React from "react";
import {Link} from "react-router-dom";
import BlogService from "../Service/BlogService";

const SingleBlogPage = (props) =>{
        return (
            <div className={"container"}>
                <link href="//netdna.bootstrapcdn.com/bootstrap/3.1.0/css/bootstrap.min.css" rel="stylesheet"
                      id="bootstrap-css"/>
                <script src="//netdna.bootstrapcdn.com/bootstrap/3.1.0/js/bootstrap.min.js"/>
                <script src="//code.jquery.com/jquery-1.11.1.min.js"/>

                <div className="col-md-10 blogShort">

                    <h1>Title</h1>
                    <article><p>
                        {console.log(props.blogs)}
                    </p>
                    </article>
                </div>
            </div>
        )
}
    export default SingleBlogPage;