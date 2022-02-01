import { useEffect } from 'react';
import type { PostOrPageExtended } from '../../lib/ghost';

interface ArticleProps {
  article: PostOrPageExtended;
}

const Article = ({ article }: ArticleProps) => {
  useEffect(() => {
    // tslint:disable-next-line
    setTimeout(() => window.instgrm && window.instgrm.Embeds.process(), 400);
  }, []);

  if (!article.html) return null;
  return <article dangerouslySetInnerHTML={{ __html: article.html }} />;
};

export default Article;
