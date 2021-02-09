import { getPageBySlug, getTagList, getPostListByTags,  } from '../lib/ghost';
import Layout from '../components/Layout/Layout.jsx';
import Button from '../components/Button/Button.jsx';
import Article from '../components/Article/Article';
import Caroussel from '../components/Caroussel/Caroussel.jsx';
import Icon from '../components/Icon/Icon';
import Link from 'next/link';

export default function Page({ series, article }) {

  return (
    <Layout title={article?.title}>
      <div className="flex flex-col">
        <div className="px-2 md:px-10 grid grid-cols-1 md:grid-cols-3">
          <div className="p-4">
            <Link href="/works">
              <Button asAnchor icon="left" text="Works" />
            </Link>
          </div>
          <Article html={article?.html} />
        </div>
        <div className="flex flex-col gap-14">
          {series.map((serie) => <Caroussel key={serie.id} serie={serie} />)}
        </div>
        <div className={`my-14 flex justify-center items-center`}>
          <Icon name="up"/>
        </div>
      </div>
    </Layout>
  )
}


// Return a list of possible value for tag
export async function getStaticPaths() {

  const tags = await getTagList();

  return { 
    paths: tags.filter(t => t.slug !== 'news')
      .map((tag) => ({ params: { page: tag.slug } })),
    fallback: false,
  }
}

// Fetch necessary data for the blog post using params.tag
export async function getStaticProps({ params }) {

  const [series, article] = await Promise.all([getPostListByTags(params.page), getPageBySlug(params.page)]);

  return {
    props: {
      series: series || null,
      article: article || null,
    }
  };
}
