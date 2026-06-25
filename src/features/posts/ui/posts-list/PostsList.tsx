import { useSelectPosts } from "../../model/postsSlice";
import { Post } from "../post/Post";
import styles from "./PostsList.module.css"


export default function PostsList() {
    const posts = useSelectPosts();

    return (
        <section className={styles.postsList}>
            {
                posts.map((post, index) => (
                    <Post index={index} key={index} {...post} />
                ))
            }
        </section>
    );
}