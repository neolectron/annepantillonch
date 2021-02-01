import Layout from '../components/Layout/Layout.jsx';
import { getTagList, getPostListByTags, getPageByTag } from '../lib/ghost';
import Caroussel from '../components/Caroussel/Caroussel.jsx';
import styles from '../styles/markdown.module.css';
import Link from 'next/link';

export default function Tag({ postList, tag, page }) {
  return (
    <Layout title={`${tag} works`}>
      <div className="flex flex-col gap-14 mt-14 md:mt-0 md:mr-12">
        <div className={`p-8`}>
          <div className={styles.markdown} dangerouslySetInnerHTML={{ __html: page.html }}></div>
        </div>
        {postList.map((post) => (
          <Caroussel key={post.id} imgs={post.imgs}>
            <div className="snap-start h-full w-full flex flex-col justify-center items-center text-5xl">
              <div className='p-14 flex flex-col justify-center items-center flex-grow'>
                <div>{post.title}</div>
                <div className="text-xl p-4">{post.description}</div>
              </div>
              <div className="pb-4 text-center w-full text-lg text-blue-600">
                {post.tags.map(t => (
                  <Link key={t.slug} href={`/${t.slug}`}>
                    <a>#{t.slug}</a>
                  </Link>
                ))}
              </div>
            </div>
          </Caroussel>
        ))}
      </div>
    </Layout>
  )
}


// Return a list of possible value for tag
export async function getStaticPaths() {

  const tags = await getTagList();

  return { 
    paths: tags.filter((tag) => tag !== 'news')
      .map((tag) => ({ params: { tag: tag.slug } })),
    fallback: false
  }
}

// Fetch necessary data for the blog post using params.tag
export async function getStaticProps({ params }) {

  const [postList, page] = await Promise.all([getPostListByTags(params.tag), getPageByTag(params.tag)]);

  return {
    props: {
      postList,
      page,
      tag: params.tag
    }
  };
}
