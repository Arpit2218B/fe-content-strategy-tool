import { SignIn } from '@clerk/clerk-react';
import styles from './styles.module.scss';

const Authentication = () => {
  return (
    <div className={styles.container}>
      <div className={styles.signup}>
        <SignIn signInForceRedirectUrl='/search' />
      </div>
    </div>
  )
}

export default Authentication;

