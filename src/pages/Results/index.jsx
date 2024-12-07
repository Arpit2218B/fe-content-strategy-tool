import styles from './styles.module.scss';
import Statistic from './components/Statistic';
import Select from 'components/Select';
import MasonryGrid from 'components/MasonryGrid';
import CalendarWrapper from 'components/Calendar';
import useGetQueryHook from '@/hooks/restApiHooks/useGetQuery';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { SET_SUBSCRIPTION_STEP } from '@/store/constants';
import { SUBSCRIPTION_STEP } from '@/utils/constants';
import { toast } from 'react-toastify';
import Loader from '@/components/Loader';

const Results = () => {

  const { search } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    fetchData,
    data: result,
    loading,
  } = useGetQueryHook(`/search${search}`, '', {
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
        toast.error('Inavlid user id');
      }
    }
  });

  if (loading) {
    <Loader />
  }

  return (
    <div className={styles.container}>
      <div className={styles.profileData}>
        <div className={styles.profile}>
          <span className={styles.profileImage}>
            <img src={result?.data?.profile?.profile_picture_url} />
          </span>
          <span className={styles.name}>{result?.data?.profile?.name}</span>
          <span className={styles.userName}>@{result?.data?.query}</span>
        </div>
        <div className={styles.statistics}>
          <Statistic data={result?.data?.profile?.statistics?.mediaCount} label="POSTS" />
          <Statistic data={result?.data?.profile?.statistics?.followerCount} label="FOLLOWERS" />
          <Statistic data={result?.data?.profile?.statistics?.followsCount} label='FOLLOWING' />
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
          <MasonryGrid data={result?.data?.media} />
        </div>
      </div>
    </div>
  )
}

export default Results;