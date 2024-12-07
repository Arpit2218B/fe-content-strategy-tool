import { Suspense, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { SignedIn, SignedOut, useUser } from "@clerk/clerk-react";

import Authentication from "pages/Authentication";
import { trialPeriod } from "utils/businessUtils";
import { usePostQueryHook } from "hooks/restApiHooks/usePostQuery";

import Loader from "../Loader";
import Payment from "../Payment";
import Header from "./Header";

import styles from './styles.module.scss';
import { useDispatch } from "react-redux";
import { SET_SUBSCRIPTION_DATA, SET_SUBSCRIPTION_STEP, SET_USER_DATA } from "@/store/constants";
import { SUBSCRIPTION_STEP } from "@/utils/constants";

const Layout = () => {
    const { isSignedIn, isLoaded, user } = useUser();
    const dispatch = useDispatch();
    const { 
        postData: getUserData,
        loading: userDataLoading,
    } = usePostQueryHook('/user/authenticate', {
        onSuccess: (response) => {
            const userDataResponse = response?.data;
            const { isTrialPeriod, daysLeft } = trialPeriod(userDataResponse?.data?.freeTrialStartDate);
            const isSubscribed = userDataResponse?.isSubscribed;
            dispatch({
                type: SET_SUBSCRIPTION_DATA,
                payload: {
                    isSubscribed: isSubscribed,
                    freeTrial: {
                        daysLeft: daysLeft,
                        active: isTrialPeriod,
                    }
                }
            });
            dispatch({
                type: SET_USER_DATA,
                payload: userDataResponse,
            });
            if (!isSubscribed && !isTrialPeriod)
                dispatch({
                    type: SET_SUBSCRIPTION_STEP,
                    payload: SUBSCRIPTION_STEP.NO_ACTIVE_SUBSCRIPTION,
                });
        }
    });

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

    const pageLoading = !isLoaded || userDataLoading;
    
    return (
        <div className={styles.container}>
            <Header isSignedIn={isSignedIn} pageLoading={pageLoading} />
            <main className={styles.mainContainer}>
                <div className={styles.main}>
                    <SignedIn>
                        {
                            pageLoading && <Loader />
                        }
                        {
                            !pageLoading && (
                                <Suspense fallback={<Loader />}>
                                    <>
                                        <Outlet />
                                        <Payment getUserData={getUserData} user={user} />
                                    </>
                                </Suspense>
                            )
                        }
                    </SignedIn>
                    <SignedOut>
                        <Authentication />
                    </SignedOut>
                </div>
            </main>
            <footer className={styles.footer}>
                Curate @ 2024    |    All Rights Reserved
            </footer>
        </div>
    )
}

export default Layout;