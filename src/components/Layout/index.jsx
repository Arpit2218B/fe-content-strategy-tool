import { Suspense, useState } from "react";
import PathConstants from "routes/constants";
import { Navigate, Outlet } from "react-router-dom";
import styles from './styles.module.scss';

const Layout = () => {
    const isUserAuthenticated = true;

    const [toggleMenu, updateToggleMenu] = useState(false);

    if(!isUserAuthenticated) {
        return <Navigate to={PathConstants.SIGNUP} />
    }

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.navigate}>
                    <span>Bookmarks</span>
                </div>
                <div className={styles.logo}>
                    <span>Curate</span>
                </div>
                <div className={styles.profile}>
                    <span>User</span>
                </div>
            </header>
            <main className={styles.mainContainer}>
                <div className={styles.main}>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Outlet />
                    </Suspense>
                </div>                
                <div className={styles.footer}>
                    Curate @ 2024    |    All Rights Reserved
                </div>
            </main>
        </div>
    )
}

export default Layout;