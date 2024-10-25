import { CommentOutlined, EyeOutlined, HeartOutlined, PauseCircleOutlined, PlayCircleOutlined } from '@ant-design/icons';
import { useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';

const Reel = () => {
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
        {posterVisible && <img src="src/assets/profile.jpg" />}
        {!posterVisible && <video ref={videoRef} onEnded={handleVideoEnd} poster="src/assets/profile.jpg" playsInline src="https://scontent-atl3-1.cdninstagram.com/o1/v/t16/f1/m86/CB45D8768D190F615BC6BCE25485C7AF_video_dashinit.mp4?stp=dst-mp4&efg=eyJxZV9ncm91cHMiOiJbXCJpZ193ZWJfZGVsaXZlcnlfdnRzX290ZlwiXSIsInZlbmNvZGVfdGFnIjoidnRzX3ZvZF91cmxnZW4uY2xpcHMuYzIuNzIwLmJhc2VsaW5lIn0&_nc_cat=100&vs=1074426770676677_1333596528&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC9DQjQ1RDg3NjhEMTkwRjYxNUJDNkJDRTI1NDg1QzdBRl92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dBc19xaHUtYV9qQmxua0VBS3IzOWRzSk44WjhicV9FQUFBRhUCAsgBACgAGAAbABUAACbKguHP5KOIQBUCKAJDMywXQEBRBiTdLxsYEmRhc2hfYmFzZWxpbmVfMV92MREAdf4HAA%3D%3D&_nc_rid=394f68a3b2&ccb=9-4&oh=00_AYCyt3MVouFh6-07K_thMu7-rPJql_hrdVmadyFoL-K8Pg&oe=671C0112&_nc_sid=10d13b" type="video/mp4" />}
        <div className={styles.stats}>
          <span className={styles.stat}>
            <HeartOutlined />
            <p>2k</p>
          </span>
          <span className={styles.stat}>
            <PlayCircleOutlined />
            <p>18k</p>
          </span>
          <span className={styles.stat}>
            <EyeOutlined />
            <p>20k</p>
          </span>
          <span className={styles.stat}>
            <CommentOutlined />
            <p>400</p>
          </span>
        </div>
        {!play && <PlayCircleOutlined className={styles.play} onClick={handlePlay} />}
        {play && <PauseCircleOutlined className={styles.play} onClick={handlePlay} />}
        <button className={styles.save}>Save</button>
      </div>
  )
}

export default Reel;