import styles from "./HomePage.module.css";
import { setMeta } from "../../shared/lib/seo";
import { useEffect } from "react";
import { DEFAULT_META } from "../../shared/metadata/defaults";
import AddPostForm from "../../features/posts/ui/add-post-form/AddPostForm";
import PostsList from "../../features/posts/ui/posts-list/PostsList";

const title = "Home - " + DEFAULT_META.title;
const description = DEFAULT_META.description;

export default function HomePage() {
    useEffect(() => setMeta({
        title, 
        description
    }), []);

   return (
    <div className={styles.homePage}>
        <section className={styles.postsWrap}>
            <AddPostForm />
            <PostsList />
        </section>
    </div>
   );
}