import { useAppDispatch, useAppSelector } from "../../../../app/model/store";
import { postRemoved, type Post } from "../../model/postsSlice";
import styles from "./PostsList.module.css"


export default function PostsList() {
    const posts = useAppSelector(({posts}) => posts);

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


type PostProps = {
    index: number
} & Post; // handle all Post fields from slice

function Post({ title, content, index }: PostProps) {
    const dispatch = useAppDispatch();
    const handleRemovePost = () => dispatch(postRemoved(index));

    return (
        <article className={styles.post}>
            <h3>{title}</h3>
            <p>{content}</p>
            <div className={styles.postButtons}>
                <button onClick={handleRemovePost} className={styles.removePostBtn}>
                    Remove
                </button>
            </div>
        </article>
    );
}