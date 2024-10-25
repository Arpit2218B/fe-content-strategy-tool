import styles from '../styles.module.scss';

const Statistic = ({ data, label }) => {
  return (
    <div className={styles.statistic}>
      <span className={styles.data}>78</span>
      <span className={styles.label}>POSTS</span>
    </div>
  )
}

export default Statistic;