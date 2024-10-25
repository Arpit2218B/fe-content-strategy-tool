import { Suspense } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import styles from './styles.module.scss';
import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/clerk-react";
import Authentication from "pages/Authentication";
import Loader from "../Loader";

const Layout = () => {
    const { isSignedIn } = useUser();
    const { pathname } = useLocation();
    const isSearchPage = pathname === '/';

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.navigate}>
                    {isSignedIn && isSearchPage && <Link to="/bookmarks">Bookmarks</Link>}
                    {isSignedIn && !isSearchPage && <Link to="/">Search</Link>}
                </div>
                <div className={styles.logo}>
                    <span>Curate</span>
                </div>
                <div className={styles.profile}>
                    <span>
                        <UserButton />
                    </span>
                </div>
            </header>
            <main className={styles.mainContainer}>
                <div className={styles.main}>
                    <SignedIn>
                        <Suspense fallback={<Loader />}>
                            <Outlet />
                        </Suspense>
                    </SignedIn>
                    <SignedOut>
                        <Authentication />
                    </SignedOut>
                </div>                
                <div className={styles.footer}>
                    Curate @ 2024    |    All Rights Reserved
                </div>
            </main>
        </div>
    )
}

export default Layout;