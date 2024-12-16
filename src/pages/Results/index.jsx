import styles from './styles.module.scss';
import Statistic from './components/Statistic';
import Select from 'components/Select';
import MasonryGrid from 'components/MasonryGrid';
import CalendarWrapper from 'components/Calendar';
import useGetQueryHook from '@/hooks/restApiHooks/useGetQuery';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { SET_SUBSCRIPTION_STEP } from '@/store/constants';
import { SORTER, SUBSCRIPTION_STEP } from '@/utils/constants';
import { toast } from 'react-toastify';
import Loader from '@/components/Loader';
import { useMemo, useState } from 'react';
import moment from 'moment';

const Results = () => {

  const { search } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [sortBy, setSortBy] = useState();
  const [dateRnge, setDateRange] = useState([moment().subtract(90, 'd').toDate(), moment().toDate()]);
  const [mediaLoading, setMediaLoading] = useState(true);

  const {
    fetchData,
    data: result,
    loading,
  } = useGetQueryHook(`/search${search}`, '', {
    onSuccess: () => {
      setMediaLoading(false);
    },
    onError: (error) => {
      if (error.status === 402) {
        navigate('/');
        dispatch({
          type: SET_SUBSCRIPTION_STEP,
          payload: SUBSCRIPTION_STEP.NO_ACTIVE_SUBSCRIPTION,
        });
      }
      if (error.status === 404) {
        navigate('/');
        toast.error(error?.response?.data?.message);
      }
    }
  });

  const sortedData = useMemo(() => {
    setMediaLoading(true);
    const finalData = result?.data?.media?.sort((a, b) => {
      const aValue = a[sortBy.value];
      const bValue = b[sortBy.value];

      // Handle numeric sorting
      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return bValue - aValue; // Sort in descending order
      }

      // Handle string sorting (e.g., for caption or user names)
      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return bValue.localeCompare(aValue); // Sort in descending order (alphabetically)
      }

      return 0;
    });

    setMediaLoading(false);
    return finalData;
  }, [sortBy?.value])

  return (
    <div className={styles.container}>
      <div className={styles.profileData}>
        <div className={styles.profile}>
          <span className={styles.profileImage}>
            <img src={result?.data?.profile?.profile_picture_url} />
          </span>
          <span className={styles.name}>{result?.data?.profile?.name || '--'}</span>
          <span className={styles.userName}>@{result?.data?.query || '--'}</span>
        </div>
        <div className={styles.statistics}>
          <Statistic data={result?.data?.profile?.statistics?.mediaCount || '--'} label="POSTS" />
          <Statistic data={result?.data?.profile?.statistics?.followerCount || '--'} label="FOLLOWERS" />
          <Statistic data={result?.data?.profile?.statistics?.followsCount || '--'} label='FOLLOWING' />
        </div>
      </div>
      <div className={styles.grid}>
        <div className={styles.toolbar}>
          <div className={styles.sort}>
            <Select 
              options={SORTER} 
              onChange={setSortBy}
              value={sortBy}
              placeholder="Sort media by"
            />
          </div>
          <div className={styles.calendar}>
            <CalendarWrapper />
          </div>
        </div>
        <div className={styles.posts}>
          <MasonryGrid data={sortedData || result?.data?.media} loading={loading} fetchData={fetchData} />
        </div>
      </div>
    </div>
  )
}

export default Results;