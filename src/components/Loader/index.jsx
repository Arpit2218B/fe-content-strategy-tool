import styles from './styles.module.scss';

const Loader = () => {
  return (
    <div className={styles.container}>
      <svg id="Layer_1" x="0px" y="0px"
        viewBox="0 0 100 100" enable-background="new 0 0 100 100">
        <rect fill="#000" width="3" height="10" transform="translate(0) rotate(180 3 50)">
          <animate
            attributeName="height"
            attributeType="XML"
            dur="1s"
            values="30; 100; 30"
            repeatCount="indefinite" />
        </rect>
        <rect x="17" fill="#000" width="3" height="10" transform="translate(0) rotate(180 20 50)">
          <animate
            attributeName="height"
            attributeType="XML"
            dur="1s"
            values="30; 100; 30"
            repeatCount="indefinite"
            begin="0.1s" />
        </rect>
        <rect x="40" fill="#000" width="3" height="10" transform="translate(0) rotate(180 40 50)">
          <animate
            attributeName="height"
            attributeType="XML"
            dur="1s"
            values="30; 100; 30"
            repeatCount="indefinite"
            begin="0.3s" />
        </rect>
        <rect x="60" fill="#000" width="3" height="10" transform="translate(0) rotate(180 58 50)">
          <animate
            attributeName="height"
            attributeType="XML"
            dur="1s"
            values="30; 100; 30"
            repeatCount="indefinite"
            begin="0.5s" />
        </rect>
        <rect x="80" fill="#000" width="3" height="10" transform="translate(0) rotate(180 76 50)">
          <animate
            attributeName="height"
            attributeType="XML"
            dur="1s"
            values="30; 100; 30"
            repeatCount="indefinite"
            begin="0.1s" />
        </rect>
      </svg>
    </div>
  )
}

export default Loader;