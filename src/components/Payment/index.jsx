import useRazorpaySubscription from 'hooks/useRazorpaySubscription';
import { config } from '@/utils/config';
import PaymentSuccess from './PaymentSuccess';
import NoSubscription from './NoSubscription';
import { SUBSCRIPTION_STEP } from '@/utils/constants';
import ManualPayment from './ManualPayment';
import { useDispatch, useSelector } from 'react-redux';
import PaymentFailure from './PaymentFailure';
import styles from './styles.module.scss';
import { CloseOutlined } from '@ant-design/icons';
import { SET_SUBSCRIPTION_STEP } from '@/store/constants';

const Payment = ({ user }) => {
  const { step: subscriptionStep } = useSelector((state) => state?.subscription);

  const [error, loading, success, createOrder] = useRazorpaySubscription({
    orderURL: `${config.API_BASE_URL}user/subscription/subscribe`,
    verifyURL: `${config.API_BASE_URL}user/subscription/success`,
    key: 'rzp_test_lo1yGxMSOwwntZ',
    user: {
      id: user?.id,
      data: {
          fullName: user?.fullName,
          userName: user?.username,
          email: user?.emailAddresses?.[0]?.emailAddress,
      }
    },
  });

  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch({
      type: SET_SUBSCRIPTION_STEP,
      payload: SUBSCRIPTION_STEP.CLOSED,
    });
  }


  if (
    subscriptionStep === SUBSCRIPTION_STEP.CLOSED ||
    subscriptionStep === SUBSCRIPTION_STEP.FREE_TRIAL
  ) {
    return null;
  }

  return (
    <div className={styles.container}>
      <div className={styles.pay}>
        <CloseOutlined className={styles.closeButton} onClick={handleClose}/>
        {subscriptionStep === SUBSCRIPTION_STEP.PAYMENT_SUCCESS && <PaymentSuccess />}
        {subscriptionStep === SUBSCRIPTION_STEP.PAYMENT_FAILURE && <PaymentFailure />}
        {subscriptionStep === SUBSCRIPTION_STEP.NO_ACTIVE_SUBSCRIPTION && <NoSubscription createOrder={createOrder} loading={loading} />}
        {subscriptionStep === SUBSCRIPTION_STEP.MANUAL_PAYMENT && <ManualPayment createOrder={createOrder} loading={loading} />}
      </div>
    </div>
  )
}

export default Payment;