import clsx from 'clsx';
import { useEffect } from 'react';
import { articleStyles, hideFigureStyles } from './article.module.css';

const Article = ({ html, className, hideFigure, ...rest }) => {
  useEffect(() => {
    setTimeout(() => {
      if (window.instgrm) window.instgrm.Embeds.process();
    }, 400);
  }, []);

  return (
    <article
      dangerouslySetInnerHTML={{ __html: html }}
      className={clsx(className, articleStyles, {
        hideFigureStyles: hideFigure,
      })}
      {...rest}
    />
  );
};

export default Article;
