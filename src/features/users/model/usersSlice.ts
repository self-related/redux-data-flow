import { createSlice } from "@reduxjs/toolkit";
import { useAppSelector } from "../../../app/model/store";


export interface User {
    id: string,
    name: string
}

type UsersSliceState = User[];

const initialState: UsersSliceState = [
    { id: "0", name: "Sasha" },
    { id: "1", name: "Petya" },
    { id: "2", name: "Vasya" }
];


export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {}
});


export const useSelectAllUsers = () => useAppSelector(rootState => rootState.users);