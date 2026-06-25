import { useNavigate } from "react-router";
import { useSelectAllUsers } from "../../features/users/model/usersSlice";
import styles from "./LoginPage.module.css";
import { useRef } from "react";


export default function LoginPage() {
    const users = useSelectAllUsers();
    const navigate = useNavigate();

    const userSelectElement = useRef<HTMLSelectElement>(null);

    const handleLogin = () => {
        if (!userSelectElement.current?.value) return;
        navigate("/");
    };


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
            
            <button className={styles.loginBtn} onClick={handleLogin}>
                Login
            </button>
        </div>
    );
}