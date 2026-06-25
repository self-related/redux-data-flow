import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { postsSlice } from "../../features/posts/model/postsSlice";
import { usersSlice } from "../../features/users/model/usersSlice";
import { authSlice } from "../../features/auth/model/authSlice";

export const store = configureStore({
    reducer: {
        posts: postsSlice.reducer,
        users: usersSlice.reducer,
        auth: authSlice.reducer
    }
});


// Store inferred types
type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

// typed hooks
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();