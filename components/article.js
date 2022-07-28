import styles from "../styles/Article.module.css";

const Article = (props) => {
  return <div className={styles.articleContainer}>{props.children}</div>;
};

export default Article;
