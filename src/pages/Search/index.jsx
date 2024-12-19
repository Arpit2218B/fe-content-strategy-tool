import ProfileIcon from 'components/ProfileIcon';
import styles from './styles.module.scss';
import { CloseCircleOutlined, SearchOutlined } from '@ant-design/icons';
import Select from 'components/Select';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { MEDIA_TYPES } from '@/utils/constants';

const Search = () => {
  const navigate = useNavigate();
  const [platformType, setPlatFormType] = useState('REELS');
  const [searchString, setSearchString] = useState('');
  const { recentSearches } = useSelector(state => state.user);

  const onChange = (e) => {
    setSearchString(e.target.value);
  }

  const search = (e) => {
    if (e.key == 'Enter') {
      navigate(`/results?type=${platformType}&query=${searchString}`)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.topSection}>
        <h3>Search a creator</h3>
      </div>
      <div className={styles.bottomSection}>
        <div className={styles.searchBar}>
          <div className={styles.input}>
            <SearchOutlined />
            <input placeholder='Search a profile' onKeyDown={(e) => search(e)} onChange={onChange} value={searchString}></input>
            <CloseCircleOutlined style={{ cursor: 'pointer' }} onClick={() => setSearchString('')} />
          </div>
          <div className={styles.select}>
            <Select 
              options={MEDIA_TYPES} 
              onChange={setPlatFormType} 
              value={{value: 'reels', label: 'REELS'}}
            />
          </div>
        </div>
        <div className={styles.recentSearch}>
          {
            recentSearches?.map(r => (
              <ProfileIcon key={r?._id} data={r} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Search;