import { getTagList, getPostListByTags, getPageBySlug } from '../lib/ghost';
import Layout from '../components/Layout/Layout.jsx';
import Caroussel from '../components/Caroussel/Caroussel.jsx';
import RichContent from '../components/RichContent/RichContent.jsx';
import Button from '../components/Button/Button.jsx';
import Link from 'next/link';

export default function Tag({ postList, tag, page }) {
  return (
    <Layout title={`${tag} works`}>
      <div className="flex flex-col gap-14 mt-14 md:mt-0 md:mr-12">
        <div className="px-8 mt-1"><Button asLink href="/works" > &lt; Works </Button></div>
        {page && page.html && <div className="px-8"><RichContent post={page} /></div>}
        {postList.map((post) => (
          <Caroussel key={post.id} post={post}>
            <div id={`${post.id}-0`} className="snap-start h-full w-full flex flex-col justify-center items-center text-3xl md:text-5xl">
              <div className='p-4 md:p-14 w-full flex flex-col justify-center items-center flex-grow'>
                <div>{post.title}</div>
                <div className="text-xl p-4">{post.description}</div>
              </div>
              <div className="pb-4 text-center w-full text-lg text-blue-600">
                {post.tags.map(t => (
                  <Link key={t.slug} href={`/${t.slug}`}>
                    <a>#{t.slug} </a>
                  </Link>
                ))}
              </div>
            </div>
          </Caroussel>
        ))}

        <div className={`mb-32 flex justify-center items-center`}>
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
    paths: tags.filter((tag) => tag.slug !== 'news')
      .map((tag) => ({ params: { tag: tag.slug } })),
    fallback: false
  }
}

// Fetch necessary data for the blog post using params.tag
export async function getStaticProps({ params }) {

  const [postList, page] = await Promise.all([getPostListByTags(params.tag), getPageBySlug(params.tag)]);

  return {
    props: {
      postList,
      page: page || null,
      tag: params.tag
    }
  };
}
