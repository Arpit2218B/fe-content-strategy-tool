import { Suspense, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/clerk-react";
import Authentication from "pages/Authentication";
import { usePostQueryHook } from "hooks/restApiHooks/usePostQuery";
import Loader from "../Loader";
import Payment from "../Payment";
import styles from './styles.module.scss';
import { trialPeriod } from "@/utils/businessUtils";

const Layout = () => {
    const { isSignedIn, isLoaded, user } = useUser();
    const { pathname } = useLocation();
    const isSearchPage = pathname === '/';

    const { 
        postData: getUserData,
        data: userData,
        loading: userDataLoading,
    } = usePostQueryHook('/user/authenticate');

    useEffect(() => {
        if (isLoaded && user) {
            const userDataFromClerk = {
                id: user?.id,
                data: {
                    fullName: user?.fullName,
                    userName: user?.username,
                    email: user?.emailAddresses?.[0]?.emailAddress,
                }
            }
            getUserData({}, userDataFromClerk)
        }
    }, [isSignedIn]);

    const { isTrialPeriod, daysLeft } = trialPeriod(userData?.data?.data?.freeTrialStartDate);
    
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
                    {isSignedIn && isTrialPeriod && !userData?.data?.subscription?.subscriptionId && <span className={styles.freeTrial}>Free Trial expires in {daysLeft} days</span>}
                    <span>
                        <UserButton />
                    </span>
                </div>
            </header>
            <main className={styles.mainContainer}>
                <div className={styles.main}>
                    <SignedIn>
                        {
                            (!isLoaded || userDataLoading) && <Loader />
                        }
                        {
                            (isLoaded && !userDataLoading) && (
                                <Suspense fallback={<Loader />}>
                                    <>
                                        <Outlet />
                                        {!userData?.data?.isSubscribed && <Payment getUserData={getUserData} user={user} />}
                                    </>
                                </Suspense>
                            )
                        }
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