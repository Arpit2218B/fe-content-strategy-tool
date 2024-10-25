import styles from './styles.module.scss';
import Statistic from './components/Statistic';
import Select from 'components/Select';
import MasonryGrid from 'components/MasonryGrid';
import CalendarWrapper from 'components/Calendar';

const Results = () => {
  return (
    <div className={styles.container}>
      <div className={styles.profileData}>
        <div className={styles.profile}>
          <span className={styles.profileImage}>
            <img src="src/assets/profile.jpg" />
          </span>
          <span className={styles.name}>Rastum Specisa</span>
          <span className={styles.userName}>@rastum</span>
        </div>
        <div className={styles.statistics}>
          <Statistic />
          <Statistic />
          <Statistic />
          <Statistic />
          <Statistic />
          <Statistic />
        </div>
      </div>
      <div className={styles.grid}>
        <div className={styles.toolbar}>
          <div className={styles.sort}>
            <Select 
              options={[{value: 'reels', label: 'REELS'}, {value: 'tiktok', label: 'TIKTOK'}]} 
              defaultValue={{value: 'reels', label: 'REELS'}}
            />
          </div>
          <div className={styles.calendar}>
            <CalendarWrapper />
          </div>
        </div>
        <div className={styles.posts}>
          <MasonryGrid />
        </div>
      </div>
    </div>
  )
}

export default Results;