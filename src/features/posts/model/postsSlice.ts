import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

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
        postRemoved: (state: SliceState, action: PayloadAction<number>) => state.filter((_, i) => i !== action.payload)
    }
});


export const {postAdded, postRemoved} = postsSlice.actions;