import useRazorpaySubscription from 'hooks/useRazorpaySubscription';
import styles from './styles.module.scss';
import { CheckCircleOutlined } from '@ant-design/icons';

const Payment = ({ user, getUserData }) => {
  const [error, loading, success, createOrder] = useRazorpaySubscription({
    orderURL: 'http://localhost:2101/user/subscription/subscribe',
    verifyURL: 'http://localhost:2101/user/subscription/success',
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

  return (
    <div className={styles.container}>
      <div className={styles.pay}>
        {success && <CheckCircleOutlined style={{ fontSize: '10rem', color: 'rgb(38, 151, 38)'}} /> }
        <p>{success ? 'Payment done successfully' : 'You do not seem to have any active subscription'}</p>
        {!success && <h2>Start a subscription to use Curate</h2>}
        {!success && <button onClick={() => createOrder()} disabled={loading}>{loading ? 'Payment in progress...' : 'Pay now'}</button>}
        {success && <button onClick={() => window.location.reload()}>Start using Curate</button>}
      </div>
    </div>
  )
}

export default Payment;