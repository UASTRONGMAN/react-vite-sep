import {useEffect, useState} from "react";
import {IPost} from "../models/IPost.ts";
import {apiServices} from "../services/api.services.ts";
import Posts from "../components/posts/Posts.tsx";

const PostsPage = () => {
    const [posts, setPosts] = useState<IPost[]>([])
    useEffect(() => {
        apiServices.posts.getAllPosts()
            .then(({posts}:IPost[]) => setPosts(posts))
    }, []);
    return (
        <div>
            <Posts posts={posts}/>
        </div>
    );
};

export default PostsPage;