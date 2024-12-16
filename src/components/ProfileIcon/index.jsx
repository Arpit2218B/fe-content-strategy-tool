import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';

const ProfileIcon = ({ data }) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(`/results?type=${data?.platform}&query=${data?.query}`);
  }

  return (
    <div className={styles.result} onClick={handleOnClick}>
      <span className={styles.profileImage}>
        <img src={data?.image} />
      </span>
      <span className={styles.userName}>@{data?.query}</span>
    </div>
  )
}

export default ProfileIcon