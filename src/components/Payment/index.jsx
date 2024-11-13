import styles from './styles.module.scss';

const Payment = () => {
  return (
    <div className={styles.container}>
      <div className={styles.pay}>
        <p>You don't seem to have a subscription to Curate</p>
        <h2>Start a subscription to use Curate</h2>
        <button>Pay now</button>
      </div>
    </div>
  )
}

export default Payment;