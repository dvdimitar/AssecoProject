import axios from "./custom-axios";

class BlogService {

    getBlogs(){
        return axios.get("/blogs")
    }
    createBlog(blog) {
        return axios.post("/blogs/add", blog).catch(function (error) {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            }
        })
    }

    getBlogById(blogId){
        return axios.get("blogs/" + blogId);
    }
    updateBlog(blog,blogId){
        return axios.put("/blogs/edit/" + blogId,blog)
    }
    deleteBlog(id){
        return axios.delete("/blogs/delete/" + id)
    }
}

export default new BlogService();