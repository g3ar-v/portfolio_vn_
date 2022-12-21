import styles from "../../styles/Projects.module.css";

const Projects = () => {
  return (
    <div id="projects" className={styles.container}>
      <div className={styles.row_flex}>
        <div className={styles.past_projects}>
          <p>attendance monitoring system</p>
        </div>
        <div className={styles.present_projects}>
          <p>attendance monitoring system</p>
        </div>
        <div className={styles.future_projects}>
          <p>attendance monitoring system</p>
        </div>
      </div>
    </div>
  );
};
export default Projects;
