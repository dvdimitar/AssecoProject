import React from "react";
import {withRouter} from "react-router-dom";
import BlogService from "../Service/BlogService";
import { useHistory } from "react-router-dom";
import Body from "./Body";

class AddBlog extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            title:"",
            description: "",
            author: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event){
        event.preventDefault();
        let blog = {title: this.state.title, description: this.state.description, author: this.state.author};
            BlogService.createBlog(blog).then(res => {
                this.props.history.push("/blogs");
            });
    }

    cancel(){
        this.props.history.push("/")
    }



    render() {
        return(
            <div>
                <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet"
                      id="bootstrap-css"/>
                <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"/>
                <script src="//code.jquery.com/jquery-1.11.1.min.js"/>

                <div className="container">
                    <form className="form-horizontal">
                        <div className="form-group">
                            <label className="control-label col-sm-2" htmlFor="title">Title:</label>
                            <div className="col-sm-10">
                                <input id="title" name="title" value={this.state.title} type="text" placeholder="Title"
                                       className="form-control input-md" onChange={this.handleChange}>
                                </input>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-sm-2" htmlFor="description">Description:</label>
                            <div className="col-sm-10">
                                <input id="description" name="description" value={this.state.description} type="text" placeholder="Description"
                                       className="form-control input-md" onChange={this.handleChange}>
                                </input>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-sm-2" htmlFor="author">Author:</label>
                            <div className="col-sm-10">
                                <input id="author" name="author" type="text" value={this.state.author} placeholder="Author"
                                       className={"form-control input-md"} onChange={this.handleChange}>
                                </input>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-offset-2 col-sm-10">
                                <button id="submit" name="submit" onClick={this.handleSubmit} className={"btn btn-primary"}>Save</button>
                            </div>
                            <div className="form-group">
                            </div>
                            <div className="col-sm-offset-2 col-sm-10">
                                <button id="cancel" name="cancel" onClick={this.cancel} className={"btn btn-primary"}>Cancel</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

    )
    }
}

export default withRouter(AddBlog);

