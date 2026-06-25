import { useParams } from "react-router";
import { Post } from "../../features/posts/ui/post/Post";
import styles from "./PostsPage.module.css";
import { useSelectPostByIndex } from "../../features/posts/model/postsSlice";


export default function PostPage() {
   const postIndex = Number(useParams().postIndex); 
   const post = useSelectPostByIndex(postIndex);
   
   if (!post) {
    return (
        <div className={styles.warning}>
            <p>Post not found!</p>
        </div>
    );
   }

   return (
    <Post index={postIndex} {...post} page />
   );
}