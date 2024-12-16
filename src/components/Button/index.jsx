import styles from './styles.module.scss';

const Button = ({
  label,
  onClick,
  disabled,
  type,
  loadingText,
  loading,
}) => {
  return (
    <div className={styles.container}>
      <button
        onClick={disabled || loading ? null : onClick}
        disabled={disabled || loading}
        data-type={type}
        className={styles.button}
      >
        {loading ? loadingText : label}
      </button>
    </div>
  )
}

export default Button;