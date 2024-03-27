import { useState } from "react";
import { data } from "../../helper/data";
import styles from "../LessonCard/Lesson.module.css";

export default function LessonCards() {


  const [isBodyVisible, setIsBodyVisible] = useState(true)
  const [isBodyInVisible, setIsBodyInVisible] = useState(false)
const [lessonCount, setLessonCount] = useState(6);

const handleClearList = () => {
  setIsBodyVisible(false);
  setLessonCount(0);
  setIsBodyInVisible(true); // İkinci state'i ayarla
};

const handleRevertVisibility = () => {
  setIsBodyVisible(true);
  setIsBodyInVisible(false);
  setLessonCount(6)
};
return (
  <div>
    <div className={styles.container}>
      <div className={styles.lessonCard__Header}>
        <h2>
          <span> {lessonCount}</span> lessons today
        </h2>
      </div>

      {isBodyVisible && (
        <div className={styles.container__body}>
          {data.map((lesson, index) => (
            <div className={styles.lessonCard} key={index}>
              <div className={styles.lessonCard1__image}>
                <img src={lesson.image} alt="logo" />
              </div>
              <div className={styles.lessonCard2__name}>
                <p>Lesson Name : {lesson.name}</p>
                <p>Lesson Hour :{lesson.hour}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className={styles.container__Button}>
      {isBodyVisible && !isBodyInVisible && (
        <button onClick={handleClearList}>Clear List</button>
      )}
        {isBodyInVisible && ( // İkinci state kontrolü
          <button onClick={handleRevertVisibility}>Back</button>
        )}
      </div>
    </div>
  </div>
);
}