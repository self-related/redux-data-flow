import { useParams } from "react-router";
import { Post } from "../../features/posts/ui/post/Post";
import styles from "./PostsPage.module.css";
import { useSelectPostByIndex } from "../../features/posts/model/postsSlice";
import { useEffect } from "react";
import { setMeta } from "../../shared/lib/seo";
import { DEFAULT_META } from "../../shared/metadata/defaults";

export default function PostPage() {
    const postIndex = Number(useParams().postIndex); 
    const post = useSelectPostByIndex(postIndex);

    // meta
    const pageTitle = post?.title ?? "Not found";
    const pageDescription = post?.content.slice(0, 255) ?? "";
    
    useEffect(() => setMeta({ 
        title: `${pageTitle} - ${DEFAULT_META.title}`, 
        description: pageDescription 
    }), [pageTitle, pageDescription]);
   
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