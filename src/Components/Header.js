import React from "react";
import {Link} from "react-router-dom";
import AddBlog from "./AddBlog";

const Header = function (props){
    return(
        <div>
        <nav id={'menu'}>
            <input type={"checkbox"} id={"responsive-menu"}/>
            <ul>
                <li id={"home"}><a href='/'>React Blog</a></li>
                <li id={"home"}><a href='/register'>Register</a></li>
                <li id={"add"}>
                    <Link className={"btn btn-block btn-dark"} to={"/blogs/add"}>Add</Link>
                    </li>
                </ul>
        </nav>

        </div>
                    )
}
export default Header;