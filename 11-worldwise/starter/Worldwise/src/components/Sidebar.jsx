import App from "./AppNav"
import styles from "./Sidebar.module.css"
import Logo from "./Logo"
import { Outlet } from "react-router-dom"

function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <Logo />
            <App/>
           <Outlet />
            <footer className={styles.footer}>
                <p className={styles.copyright}>
                    &copy; Copyright {new Date().getFullYear()} by Woldwise Inc.
                </p>
            </footer>
        </div>
    )
}

export default Sidebar
