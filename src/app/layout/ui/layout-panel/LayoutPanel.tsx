import { Link } from "react-router";
import { userLoggedOut, useSelectCurrentUser } from "../../../../features/auth/model/authSlice";
import { DEFAULT_META } from "../../../../shared/metadata/defaults";
import { useAppDispatch } from "../../../model/store";
import styles from "./LayoutPanel.module.css";
import Button from "../../../../shared/ui/Button";
import { useState } from "react";



export default function Panel() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    
    const currentUser = useSelectCurrentUser();
    const userSectionModifier = (currentUser) ? "" : styles.hidden; // hide if no current user
    const dropdownModifier = (dropdownOpen) ? styles.dropdownOpen : "";

    const dispatch = useAppDispatch();

    const handleUserLogOut = () => {
        dispatch(userLoggedOut());
    };

    
    return (
        <nav className={styles.layoutPanel}>

            {/* Additional info section 1/3 witdh */}
            <section></section> 

            <h1>
                <Link to="/">
                    {DEFAULT_META.title}
                </Link>
            </h1>

            {/* User section */}
            <section className={userSectionModifier}>
                <div className={styles.userSectionFull}>
                    <p>{currentUser?.name}</p>
                    <Button onClick={handleUserLogOut}>
                        Logout
                    </Button>
                </div>

                <div className={styles.userSectionShort}>
                    <button onClick={() => setDropdownOpen(val => !val)}>
                        <p>|||</p>
                    </button>

                    <div className={`${styles.dropdown} ${dropdownModifier}`}>
                        <p>User: {currentUser?.name}</p>
                        <Button onClick={handleUserLogOut}>Logout</Button>
                    </div>
                </div>
            </section>
        </nav>

    );
}