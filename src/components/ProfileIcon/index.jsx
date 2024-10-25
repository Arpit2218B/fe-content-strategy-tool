import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';

const ProfileIcon = ({ url, name }) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate('/results');
  }

  return (
    <div className={styles.result} onClick={handleOnClick}>
      <span className={styles.profileImage}>
        <img src="public/profile.jpg" />
      </span>
      <span className={styles.userName}>@rastum</span>
    </div>
  )
}

export default ProfileIcon