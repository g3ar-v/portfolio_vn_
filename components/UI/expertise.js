import styles from "../../styles/Expertise.module.css";
import Article from "../article";

const Expertise = () => {
  return (
    <div className={styles.container}>
      <div className={styles.brick}>
        <p className={styles.item}>Machine Learning</p>
        <p className={styles.item}>Computer Vision</p>
        <p className={styles.item}>Embedded Programming</p>
        <p className={styles.item}>Internet of Thing</p>
        <p className={styles.item}>Front-end development</p>
        <p className={styles.item}>Back-end development</p>
      </div>
      <div className={styles.description}>
        <Article>
          I would like to think I am an all-rounder and I do not conform to a
          particular computer field. I have seasons were I work in an area and
          when projects require certain areas.
        </Article>
      </div>
    </div>
  );
};

export default Expertise;
