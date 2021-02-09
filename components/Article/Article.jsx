import styles from './article.module.css';

const Article = ({html, className, hideFigure, ...rest}) => (
  !html 
  ? 
    null 
  : 
    <article dangerouslySetInnerHTML={{ __html: html }}
    className={`${styles.article} ${hideFigure ? styles.hideFigure : ''} ${className}`}
    {...rest} />
);

export default Article;