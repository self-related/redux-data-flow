import { Outlet } from "react-router";
import { DEFAULT_META } from "../../shared/metadata/defaults";
import styles from "./Layout.module.css";

export default function Layout() {

    return (
        <div className={styles.layout}>
            <nav className={styles.navbar}>
                <h1>{DEFAULT_META.title}</h1>
            </nav>
 
            <main className={styles.main}>
                <Outlet />
            </main>

            <footer className={styles.footer}>
                <p>{DEFAULT_META.description}</p>
                <p>2026</p>
            </footer>
        </div>
    );
}