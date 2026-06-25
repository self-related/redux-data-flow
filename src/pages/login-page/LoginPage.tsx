import { useNavigate } from "react-router";
import { useSelectAllUsers } from "../../features/users/model/usersSlice";
import styles from "./LoginPage.module.css";
import { useEffect, useRef } from "react";
import Button from "../../shared/ui/Button";
import { userLoggedIn } from "../../features/auth/model/authSlice";
import { useAppDispatch } from "../../app/model/store";
import { setMeta } from "../../shared/lib/seo";


const pageTitle = "Login";

export default function LoginPage() {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const users = useSelectAllUsers();
    const userSelectElement = useRef<HTMLSelectElement>(null);

    const handleLogin = () => {
        const userId = Number(userSelectElement.current?.value);
        const user = users[userId]

        if (!user) return;
        
        dispatch(userLoggedIn(user));
        navigate("/");
    };

    useEffect(() => {
        setMeta({
            title: pageTitle
        });
    }, []);

    
    return (
        <div className={styles.loginPage}>
            <select ref={userSelectElement} className={styles.userSelect}>
                <option value="" hidden>choose user</option>
                {
                    users?.map(({ id, name }) => (
                        <option key={id} value={id}>{name}</option>
                    ))
                }
            </select>

            <Button onClick={handleLogin}>
                Login
            </Button>
        </div>
    );
}