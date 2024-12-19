import Button from '../Button';
import Loader from '../Loader';
import Reel from '../Reel';
import styles from './styles.module.scss';

const MasonryGrid = ({ actualData, data, loading, setMediaLoading, fetchData }) => {
  if (loading) {
    return <Loader />
  }

  const refetchDataHandler = () => {
    setMediaLoading(true);
    fetchData();
  }

  if (actualData?.length === 0) {
    return (
      <div className={styles.refetchMedia}>
        <div>
          <p>Fetching your media in the background. This takes an approx of 2 minutes</p>
          <Button 
            label="Refresh"
            loadingText="Fetching recent media"
            onClick={refetchDataHandler}
            loading={loading}
          />
        </div>
      </div>
    )
  }

  return (
    <div className={styles.grid}>
      {
        data?.map(d => (
          <Reel reel={d} key={d?.contentURL} />
        ))
      }
    </div>
  )
}

export default MasonryGrid;