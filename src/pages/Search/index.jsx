import ProfileIcon from 'components/ProfileIcon';
import styles from './styles.module.scss';
import { CloseCircleOutlined, SearchOutlined } from '@ant-design/icons';
import Select from 'components/Select';
import { useState } from 'react';

const Search = () => {
  const [platformType, setPlatFormType] = useState();

  return (
    <div className={styles.container}>
      <div className={styles.topSection}>
        <h3>Search a creator</h3>
      </div>
      <div className={styles.bottomSection}>
        <div className={styles.searchBar}>
          <div className={styles.input}>
            <SearchOutlined />
            <input placeholder='Search a profile'></input>
            <CloseCircleOutlined style={{ cursor: 'pointer' }} />
          </div>
          <div className={styles.select}>
            <Select 
              options={[{value: 'reels', label: 'REELS'}, {value: 'tiktok', label: 'TIKTOK'}]} 
              onChange={setPlatFormType} 
              defaultValue={{value: 'reels', label: 'REELS'}}
            />
          </div>
        </div>
        <div className={styles.recentSearch}>
          <ProfileIcon />
          <ProfileIcon />
          <ProfileIcon />
          <ProfileIcon />
          <ProfileIcon />
          <ProfileIcon />
          <ProfileIcon />
          <ProfileIcon />
          <ProfileIcon />
        </div>
      </div>
    </div>
  )
}

export default Search;