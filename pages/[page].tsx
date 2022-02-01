import { getPageBySlug, getTagList, getPostListByTags } from '../lib/ghost';
import Layout from '../components/Layout/Layout';
import Button from '../components/Button/Button';
import Article from '../components/Article/Article';
import Caroussel from '../components/Caroussel/Caroussel';
import Link from 'next/link';

export default function Page({ series, article }) {
  return (
    <Layout title={article?.title}>
      <div className="flex flex-col">
        <div className="md:px-10 md:grid-cols-3 grid grid-cols-1 px-2">
          <div className="p-4">
            <Link href="/works">
              <Button asAnchor icon="left.svg" text="Travaux" />
            </Link>
          </div>
          {article && article.html && (
            <div className="flex flex-col items-center py-4">
              <Article html={article.html} />
              <Button icon="down.svg" />
            </div>
          )}
        </div>
        <div className=" flex flex-col">
          {series.map((serie, i) => (
            <Caroussel key={serie.id} serie={serie} snap={i} />
          ))}
        </div>
        <div className={`my-14 flex justify-center items-center`}>
          <Button icon="up.svg" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
        </div>
      </div>
    </Layout>
  );
}

// Return a list of possible value for tag
export async function getStaticPaths() {
  const tags = await getTagList();

  return {
    paths: tags.filter((t) => t.slug !== 'news' && t.slug !== 'about').map((tag) => ({ params: { page: tag.slug } })),
    fallback: false,
  };
}

// Fetch necessary data for the blog post using params.tag
export async function getStaticProps({ params }) {
  const [series, article] = await Promise.all([getPostListByTags(params.page), getPageBySlug(params.page)]);

  return {
    props: {
      series: series || null,
      article: article || null,
    },
  };
}
