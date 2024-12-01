import { UserButton } from "@clerk/clerk-react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from './styles.module.scss';
import { SET_SUBSCRIPTION_STEP } from "@/store/constants";
import { SUBSCRIPTION_STEP } from "@/utils/constants";

const Header = ({ isSignedIn, pageLoading }) => {
  const { freeTrial, isSubscribed } = useSelector(state => state?.subscription);
  const dispatch = useDispatch();

  const handlePayNowClick = () => {
    dispatch({
      type: SET_SUBSCRIPTION_STEP,
      payload: freeTrial?.active ? SUBSCRIPTION_STEP.MANUAL_PAYMENT : SUBSCRIPTION_STEP.NO_ACTIVE_SUBSCRIPTION,
    });
  }

  return (
    <header className={styles.header}>
      {isSignedIn && (
        <div className={styles.navigate}>
          <Link to="/">Dashboard</Link>
          <Link to="/bookmarks">Bookmarks</Link>
        </div>
      )}
      <div className={styles.logo}>
        <span>Curate</span>
      </div>
      {isSignedIn && (
        <div className={styles.profile}>
          {
            !isSubscribed && !pageLoading && (
              <span className={styles.freeTrial}>
                {freeTrial?.active && <span>Free Trial expires in {freeTrial?.daysLeft} days</span>}
                {!freeTrial?.active && <span>No active subscription</span>}
                <span className={styles.cta} onClick={handlePayNowClick}>PAY NOW</span>
              </span>
            )
          }
          <span>
            <UserButton />
          </span>
        </div>
      )}
    </header>
  )
}

export default Header;