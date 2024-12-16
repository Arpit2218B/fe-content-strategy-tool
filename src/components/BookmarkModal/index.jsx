import React, { useState } from "react";
import styles from "./styles.module.scss";
import { useSelector } from "react-redux";
import Button from "../Button";

const BokmarkModal = ({ onSave, onClose }) => {
  const { tags } = useSelector(state => state.user);
  // const tags = ['Authority', 'Creative', 'Ideas', 'Viral', 'Brand', 'Authority', 'Creative', 'Ideas', 'Viral', 'Brand', 'Authority', 'Creative', 'Ideas', 'Viral', 'Brand', 'Authority', 'Creative', 'Ideas', 'Viral', 'Brand',];
  const [selectedBookmark, setSelectedBookmark] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [viewType, setViewType] = useState('select');

  const handleSave = () => {
    onClose(); // Close modal after saving
  };

  return (
    <>
      <button className={styles.saveButton} onClick={() => setModalOpen(true)}>Save</button>
      {
        modalOpen && (
          <div className={styles.modalOverlay} onClick={() => setModalOpen(false)}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
              <div className={styles.header}>
                <h4 className={styles.heading}>{viewType === 'select' ? 'Select Bookmark' : 'Create new bookmark'}</h4>
                <span onClick={() => setModalOpen(false)} className={styles.close}>x</span>
              </div>
              {
                viewType === 'select' && (
                  <>
                    <div className={styles.bookmarks}>
                      {tags.length === 0 && (
                        <p className={styles.noBookmark}>No bookmark added</p>
                      )}
                      {tags.map((bookmark, index) => (
                        <label key={index} className={styles.bookmarkOption}>
                          <input
                            type="radio"
                            name="bookmark"
                            value={bookmark}
                            onChange={(e) => setSelectedBookmark(e.target.value)}
                            checked={selectedBookmark === bookmark}
                          />
                          {bookmark}
                        </label>
                      ))}
                    </div>
                    <div className={styles.createNewButton}>
                      <button className={styles.button} onClick={() => setViewType('create')}>Create new bookmark</button>
                    </div>
                  </>
                )
              }
              {
                viewType === 'create' && (
                  <>
                    <div className={styles.newBookmark}>
                      <input
                        type="text"
                        placeholder="New bookmark name"
                        value={selectedBookmark}
                        onChange={(e) => setSelectedBookmark(e.target.value)}
                      />
                    </div>
                    <div className={styles.createNewButton}>
                      <button className={styles.button} onClick={handleSave} disabled={!selectedBookmark}>
                        Save
                      </button>
                    </div>
                  </>

                )
              }
            </div>
          </div>
        )
      }
    </>
  );
};

export default BokmarkModal;
