import { formatNumber } from '@/utils/businessUtils';
import styles from '../styles.module.scss';

const Statistic = ({ data, label }) => {
  return (
    <div className={styles.statistic}>
      <span className={styles.data}>{formatNumber(data)}</span>
      <span className={styles.label}>{label}</span>
    </div>
  )
}

export default Statistic;