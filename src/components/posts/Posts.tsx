import {useEffect, useState} from "react";
import {IPost} from "../../models/IPost.ts";
import Post from "./post/Post.tsx";
import {apiServices} from "../../services/api.services.ts";


const Posts = () => {
    const [posts, setPosts] = useState<IPost[]>([])
    useEffect(() => {
        apiServices.posts.getAllPosts()
            .then(({posts}:IPost[]) => setPosts(posts))
    }, []);
    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export default Posts;