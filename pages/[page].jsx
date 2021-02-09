import Link from 'next/link';

import { getPageBySlug, getTagList, getPostListByTags,  } from '../lib/ghost';
import Layout from '../components/Layout/Layout.jsx';
import Caroussel from '../components/Caroussel/Caroussel.jsx';
import RichContent from '../components/RichContent/RichContent.jsx';
import Button from '../components/Button/Button.jsx';

import styles from '../styles/ghost-post-overrides.module.css';
import Article from '../components/Article/Article';

export default function Page({ series, article }) {

  return (
    <Layout title={article.title}>
      <div className="flex flex-col">
        <div className="px-2 md:px-10">
          <Button icon="left" text="Works"/>
          <Article html={article.html} />
        </div>
        {series.map((serie) => (
          <Caroussel key={serie.id} post={serie}>
            <div id={`${serie.id}-0`} className="snap-start h-full w-full flex flex-col justify-center items-center text-3xl md:text-5xl">
              <div className='p-4 md:p-14 flex-grow flex w-full h-full flex-col justify-center items-center flex-wrap'>
                <div>{serie.title}</div>
                <div className={`${styles.textOnly} text-xl p-4`} dangerouslySetInnerHTML={{__html : serie.html}}></div>
              </div>
              <div className="pb-4 text-center w-full text-lg text-blue-600">
                {serie.tags.map(t => (
                  <Link key={t.slug} href={`/${t.slug}`}>
                    <a>#{t.slug} </a>
                  </Link>
                ))}
              </div>
            </div>
          </Caroussel>
        ))}

        <div className={`my-14 flex justify-center items-center`}>
          <svg onClick={() => scrollTo({ top: 0, behavior: 'smooth' })} xmlns="http://www.w3.org/2000/svg"
          width="100" height="50" viewBox="0 0 240.835 240.835"
          className={`cursor-pointer transition-transform transform hover:-translate-y-2`} >
            <path d={`M129.007,57.819c-4.68-4.68-12.499-4.68-17.191,0L3.555,165.803c-4.74,4.74-4.74,12.427,0,17.155
            c4.74,4.74,12.439,4.74,17.179,0l99.683-99.406l99.671,99.418c4.752,4.74,12.439,4.74,17.191,0c4.74-4.74,4.74-12.427,0-17.155
            L129.007,57.819z`} />
          </svg>
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
