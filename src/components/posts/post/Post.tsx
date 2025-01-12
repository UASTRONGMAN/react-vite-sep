import {FC} from "react";
import {IPost} from "../../../models/IPost.ts";

interface IProps{
    post:IPost
}
const Post:FC<IProps> = ({post}) => {

    return (
        <div>
            {post.id}. {post.title}. User id - {post.userId}.
        </div>
    );
};

export default Post;