import { Navigate, Outlet } from "react-router";
import { useSelectCurrentUser } from "../model/authSlice";


export default function AuthRouter() {
    const currentUser = useSelectCurrentUser();

    if (!currentUser) {
        return <Navigate to="/login" />
    }
        
    return (
        <Outlet />
    );
}