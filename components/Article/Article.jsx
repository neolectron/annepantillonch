import styles from './article.module.css';

const Article = ({html, ...rest}) => (
  !html ? null : <article className={styles.article} dangerouslySetInnerHTML={{__html: html}} {...rest} />
);

export default Article;