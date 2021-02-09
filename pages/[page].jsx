import { getPageBySlug, getTagList, getPostListByTags,  } from '../lib/ghost';
import Layout from '../components/Layout/Layout.jsx';
import Button from '../components/Button/Button.jsx';
import Article from '../components/Article/Article';
import Caroussel from '../components/Caroussel/Caroussel.jsx';
import Icon from '../components/Icon/Icon';

export default function Page({ series, article }) {

  return (
    <Layout title={article.title}>
      <div className="flex flex-col">
        <div className="px-2 md:px-10">
          <Button icon="left" text="Works"/>
          <Article html={article.html} />
        </div>
        {series.map((serie) => <Caroussel key={serie.id} serie={serie} />)}
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
    paths: tags.map((tag) => ({ params: { page: tag.slug } })),
    fallback: false,
  }
}

// Fetch necessary data for the blog post using params.tag
export async function getStaticProps({ params }) {

  const [series, article] = await Promise.all([getPostListByTags(params.page), getPageBySlug(params.page)]);

  return {
    props: {
      series,
      article,
    }
  };
}
