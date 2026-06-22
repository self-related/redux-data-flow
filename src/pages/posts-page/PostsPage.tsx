import { useParams } from "react-router";
import { useAppSelector } from "../../app/model/store";
import { Post } from "../../features/posts/ui/post/Post";
import styles from "./PostsPage.module.css";


export default function PostPage() {
   const postIndex = Number(useParams().postIndex); 
   const post = useAppSelector(state => state.posts.find((_, index) => index === postIndex));
   
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