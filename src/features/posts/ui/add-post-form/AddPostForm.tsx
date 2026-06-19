import { useAppDispatch } from "../../../../app/model/store";
import { postAdded } from "../../model/postsSlice";
import styles from "./AddPostForm.module.css";

// will get form fields in React by their IDs
interface PostFormElements extends HTMLFormElement {
    postTitle: HTMLInputElement,
    postContent: HTMLTextAreaElement

}

export default function AddPostForm() {
    const dispatch = useAppDispatch();

    // PostFormElements will provide fields by IDs
    const handleSubmit = (event: React.SubmitEvent<PostFormElements>) => {
        event.preventDefault(); // prevent page refresh
        const {postTitle, postContent} = event.currentTarget; // get input and textarea by IDs
        if (!postTitle.value.trim() || !postContent.value.trim()) {
            alert("Empty fields not allowed");
        } else {
            dispatch(postAdded({ title: postTitle.value, content: postContent.value }));
            postTitle.value = postContent.value = "";
        }
    };

    return (
        <section className={styles.addPostForm}>
            <h2>Add new post</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="postTitle">Post Title:</label>
                <input id="postTitle" type="text" />

                <label htmlFor="postContent">Content:</label>
                <textarea id="postContent" />

                <div className={styles.submitBtnWrap}>
                    <button type="submit">Add</button>
                </div>

            </form>
        </section>
    );
}