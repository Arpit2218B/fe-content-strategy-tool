import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';
import { useState } from 'react';

const ProfileIcon = ({ data }) => {
  const navigate = useNavigate();
  const [imgSrc, setImgSrc] = useState(data?.image);

  const handleOnClick = () => {
    navigate(`/results?type=${data?.platform}&query=${data?.query}`);
  }

  return (
    <div className={styles.result} onClick={handleOnClick}>
      <span className={styles.profileImage}>
        <img src={imgSrc} onError={() => setImgSrc('https://cdn.pixabay.com/photo/2022/01/26/23/18/instagram-6970242_1280.jpg')} />
      </span>
      <span className={styles.userName}>@{data?.query}</span>
    </div>
  )
}

export default ProfileIcon