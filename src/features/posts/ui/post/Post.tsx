import { Link } from "react-router";
import { useAppDispatch } from "../../../../app/model/store";
import { postRemoved, type Post } from "../../model/postsSlice";
import styles from "./Post.module.css";

type PostProps = {
    index: number,
    page?: boolean
} & Post; // handle all Post fields from slice

export function Post({ title, content, index, page }: PostProps) {
    const dispatch = useAppDispatch();
    const handleRemovePost = () => dispatch(postRemoved(index));

    const pageClass = (page) ? styles.page : "";

    return (
        <article className={`${styles.post} ${pageClass}`}>
            <h3>
                <Link to={`/posts/${index}`}> 
                    {title}
                </Link>
            </h3>
            <p>{content}</p>
            <div className={styles.postButtons}>
                <button onClick={handleRemovePost} className={styles.removePostBtn}>
                    Remove
                </button>
            </div>
        </article>
    );
}