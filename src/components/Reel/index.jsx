import { CommentOutlined, EyeOutlined, HeartOutlined, PauseCircleOutlined, PlayCircleOutlined } from '@ant-design/icons';
import { useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';
import { formatNumber } from '@/utils/businessUtils';

const Reel = ({ reel }) => {
    console.log(reel?.thumbnailURL, reel?.videoURL);
  const API_BASE_URL = 'http://localhost:2101';
  const videoRef = useRef();
  const [play, togglePlay] = useState(false);
  const [posterVisible, togglePosterVisible] = useState(true);
  const handlePlay = () => {
    togglePosterVisible(false);
    togglePlay(prev => !prev);
  }

  useEffect(() => {
    if (play) {;
      videoRef?.current?.play();
    }
    else
      videoRef?.current?.pause();
    return () => videoRef?.current?.pause();
  }, [play]);

  const handleVideoEnd = () => {
    togglePosterVisible(true);
    togglePlay(false);
  }
  return (
    <div className={styles.reels}>
        {posterVisible && <img loading="lazy" src={`${API_BASE_URL}/search/proxy-media?url=${encodeURIComponent(reel.thumbnailURL)}`} />}
        {!posterVisible && <video ref={videoRef} onEnded={handleVideoEnd} poster={`${API_BASE_URL}/search/proxy-media?url=${encodeURIComponent(reel.thumbnailURL)}`} playsInline src={`${API_BASE_URL}/search/proxy-media?url=${encodeURIComponent(reel.videoURL)}`} type="video/mp4" />}
        <div className={styles.stats}>
          <span className={styles.stat}>
            <HeartOutlined />
            <p>{formatNumber(reel?.likeCount)}</p>
          </span>
          <span className={styles.stat}>
            <PlayCircleOutlined />
            <p>{formatNumber(reel?.playCount)}</p>
          </span>
          <span className={styles.stat}>
            <EyeOutlined />
            <p>{formatNumber(reel?.viewCount)}</p>
          </span>
          <span className={styles.stat}>
            <CommentOutlined />
            <p>{formatNumber(reel?.commentCount)}</p>
          </span>
        </div>
        {!play && <PlayCircleOutlined className={styles.play} onClick={handlePlay} />}
        {play && <PauseCircleOutlined className={styles.play} onClick={handlePlay} />}
        <button className={styles.save}>Save</button>
      </div>
  )
}

export default Reel;