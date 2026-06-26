import { Outlet } from "react-router";
import { DEFAULT_META } from "../../shared/metadata/defaults";
import styles from "./Layout.module.css";
import LayoutPanel from "./ui/layout-panel/LayoutPanel";

export default function Layout() {

    return (
        <div className={styles.layout}>
            <LayoutPanel />
            
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