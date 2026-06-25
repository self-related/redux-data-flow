import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { User } from "../../users/model/usersSlice";
import { useAppSelector } from "../../../app/model/store";



interface AuthSliceState {
    currentUser: User | null
}

const initialState: AuthSliceState = {
    currentUser: null
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        userLoggedIn: (state: AuthSliceState, { payload: user }: PayloadAction<User>) => {
            state.currentUser = user;
        },
        
        userLoggedOut: (state: AuthSliceState) => {
            state.currentUser = null;
        }
    }
});

export const { userLoggedIn, userLoggedOut } = authSlice.actions;

// selector hooks
export const useSelectCurrentUser = () => useAppSelector(rootState => rootState.auth.currentUser);