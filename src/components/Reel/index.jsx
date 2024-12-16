import { CommentOutlined, EyeOutlined, HeartOutlined, PauseCircleOutlined, PlayCircleOutlined } from '@ant-design/icons';
import { useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';
import { formatNumber } from '@/utils/businessUtils';
import { config } from '@/utils/config';
import BookmarkModal from '../BookmarkModal';

const Reel = ({ reel }) => {
    const API_BASE_URL = config.API_BASE_URL;
    const [play, togglePlay] = useState(false);
    const [posterVisible, togglePosterVisible] = useState(true);
    const [isModalVisible, setIsModalVisible] = useState(false);  // State to control modal visibility
    const videoRef = useRef();

    const handlePlay = () => {
        togglePosterVisible(false);
        togglePlay(prev => !prev);
    };

    const handleVideoEnd = () => {
        togglePosterVisible(true);
        togglePlay(false);
    };

    const handleOpenModal = () => {
        setIsModalVisible(true);  // Open modal when user clicks on thumbnail
    };

    const handleCloseModal = () => {
        setIsModalVisible(false);  // Close modal
        togglePosterVisible(true);
        togglePlay(false);
    };

    // Control the video play state based on modal visibility
    useEffect(() => {
        if (play) {
            videoRef?.current?.play();
        } else {
            videoRef?.current?.pause();
        }
        return () => videoRef?.current?.pause();
    }, [play]);

    return (
        <div className={styles.reels}>
            {/* Thumbnail Image */}
            {posterVisible && (
                <img
                    loading="lazy"
                    src={`${API_BASE_URL}search/proxy-media?url=${encodeURIComponent(reel.thumbnailURL)}`}
                />
            )}

            {/* Stats Section */}
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

            {/* Play/Pause Button */}
            {!play && <PlayCircleOutlined className={styles.play} onClick={handleOpenModal} />}
            {/* {play && <PauseCircleOutlined className={styles.play} onClick={handlePlay} />} */}
            <BookmarkModal playlists={[]} onSave={() => null} onClose={() => null} />

            {/* Custom Modal */}
            {isModalVisible && (
                <div className={styles.modalOverlay} onClick={handleCloseModal}>
                    <div
                        className={styles.modalContent}
                        onClick={(e) => e.stopPropagation()} // Prevents closing the modal when clicking inside
                    >
                        <video
                            ref={videoRef}
                            onEnded={handleVideoEnd}
                            poster={`${API_BASE_URL}search/proxy-media?url=${encodeURIComponent(reel.thumbnailURL)}`}
                            playsInline
                            src={`${API_BASE_URL}search/proxy-media?url=${encodeURIComponent(reel.videoURL)}`}
                            type="video/mp4"
                            controls
                            autoPlay
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Reel;
