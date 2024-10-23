import styles from './styles.module.scss';

const ProfileIcon = ({ url, name }) => {
  return (
    <div className={styles.result}>
      <span className={styles.profileImage}>
        <img src="src/assets/profile.jpg" />
      </span>
      <span className={styles.userName}>@rastum</span>
    </div>
  )
}

export default ProfileIcon