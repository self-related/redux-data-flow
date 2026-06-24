import { Link } from "react-router";
import { useAppDispatch } from "../../../../app/model/store";
import { postRemoved, postUpdated, type Post } from "../../model/postsSlice";
import styles from "./Post.module.css";
import { useState } from "react";

interface PostProps extends Post {
    index: number,
    page?: boolean
}

interface EditForm extends HTMLFormElement {
    newPostTitle: HTMLInputElement,
    newPostContent: HTMLTextAreaElement,
}


export function Post({ title, content, index, page }: PostProps) {
    const pageClass = (page) ? styles.page : "";

    const [editMode, setEditMode] = useState(false);
    const dispatch = useAppDispatch();

    const handleRemovePost = () => dispatch(postRemoved(index));

    const handleEditPostSubmit = (e: React.SubmitEvent<EditForm>) => {
        e.preventDefault();
        const {newPostTitle, newPostContent} = e.currentTarget;
        
        dispatch(postUpdated({index, title: newPostTitle.value, content: newPostContent.value,}));
        setEditMode(val => !val); 
    };


    const PostWrap= (
        <div className={styles.postWrap}>
            <h3>
                <Link to={`/posts/${index}`}> 
                    {title}
                </Link>
            </h3>
            <p>{content}</p> 
        </div>
    );

    const EditPostForm = (
        <form onSubmit={handleEditPostSubmit} className={styles.editPostForm}>
            <input type="text" defaultValue={title} id="newPostTitle" />
            <textarea defaultValue={content} id="newPostContent" />

            <div className={styles.buttonsWrap}>
                <button>save</button>
            </div>
        </form>
    );


    return (
        <article className={`${styles.post} ${pageClass}`}>
            {
                editMode 
                ? EditPostForm 
                : PostWrap
            }
            <div className={styles.buttonsWrap}>
                <button onClick={() => setEditMode(true)}>
                    Edit
                </button>

                <button onClick={handleRemovePost} className={styles.removePostBtn}>
                    Remove
                </button>
            </div>
        </article>
    );
}