import {FC} from "react";
import {IPost} from "../../models/IPost.ts";
import Post from "./post/Post.tsx";


interface IProps{
    posts:IPost[]
}
const Posts:FC<IProps> = ({posts}) => {
    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export default Posts;