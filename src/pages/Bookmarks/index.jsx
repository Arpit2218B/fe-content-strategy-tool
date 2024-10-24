import styles from './styles.module.scss';
import Select from 'components/Select';
import MasonryGrid from 'components/MasonryGrid';

const Bookmarks = () => {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <div className={styles.toolbar}>
          <div className={styles.sort}>
            <Select 
              options={[{value: 'reels', label: 'REELS'}, {value: 'tiktok', label: 'TIKTOK'}]} 
              defaultValue={{value: 'reels', label: 'REELS'}}
            />
          </div>
        </div>
        <div className={styles.posts}>
          <MasonryGrid />
        </div>
      </div>
    </div>
  )
}

export default Bookmarks;