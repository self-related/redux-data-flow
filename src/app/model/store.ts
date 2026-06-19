import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { postsSlice } from "../../features/posts/model/postsSlice";

export const store = configureStore({
    reducer: {
        posts: postsSlice.reducer
    }
});


// Store inferred types
type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

// typed hooks
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();