import { useEffect } from 'react';
import styles from './article.module.css';

const Article = ({html, className, hideFigure, ...rest}) => {

  useEffect(() => {
    setTimeout(() => {
      if (window.instgrm)
        window.instgrm.Embeds.process();
    }, 400)
  }, []);

  return (
    <article dangerouslySetInnerHTML={{ __html: html }}
    className={`${styles.article} ${hideFigure ? styles.hideFigure : ''} ${className}`}
    {...rest} />
  )
};

export default Article;