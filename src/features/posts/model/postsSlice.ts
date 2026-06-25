import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { useAppSelector } from "../../../app/model/store";

export interface Post {
    title: string,
    content: string,
}

type SliceState = Post[];

const initialState: SliceState = [
    { title: "First Post!", content: "Hello!"},
];


export const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        postAdded: (state: SliceState, action: PayloadAction<Post>) => ([ ...state, action.payload ]),
        postRemoved: (state: SliceState, action: PayloadAction<number>) => state.filter((_, i) => i !== action.payload),
        postUpdated: (state: SliceState, action: PayloadAction<Post & {index: number}>) => {
            const {index, title, content} = action.payload;
            const post = state[index];
            if (!post) return;
            post.title = title;
            post.content = content;
        }
    }
});


export const { postAdded, postRemoved, postUpdated } = postsSlice.actions;

// selector hooks
export const useSelectPosts = () => useAppSelector(rootState => rootState.posts);
export const useSelectPostByIndex = (index: number) => useAppSelector(rootState => rootState.posts[index]);