import axios from "axios";

class PostsService {
    constructor() {
        let service = axios.create({
            baseURL: `${process.env.REACT_APP_SERVER_API}/api`,
        });
        this.service = service
    }

    getAllPosts() {
        return this.service.get("/posts");
    }

    getPost(id) {
        return this.service.get(`/posts/${id}`);
    }

    getPostsByOwner(id) {
        return this.service.get(`/posts/owner/${id}`);
    }

    createPost(content) {
        return this.service.post("/posts", content);
    }

    editPost(content, id) {
        return this.service.put(`/posts/${id}`, content);
    }

    deletePost(id) {
        return this.service.delete(`/posts/delete/${id}`);
    }

}

export default PostsService;