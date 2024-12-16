import Reel from '../Reel';
import styles from './styles.module.scss';

const MasonryGrid = ({ data }) => {
  return (
    <div className={styles.grid}>
      {
        data?.map(d => (
          <Reel reel={d} />
        ))
      }
    </div>
  )
}

export default MasonryGrid;