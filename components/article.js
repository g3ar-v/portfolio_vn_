import styles from "../styles/Article.module.css";

const Article = (props) => {
  return (
    <div className={styles.articleContainer}>
      <>
        <h1 className={styles.article_sub_heading}>{props.subheading}</h1>
        {props.children}
      </>
    </div>
  );
};

export default Article;
