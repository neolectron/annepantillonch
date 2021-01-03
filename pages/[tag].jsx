import Layout from '../components/Layout/Layout.jsx';
import { React, } from 'react';
import { getTagList, getPostListByTags } from '../lib/ghost';
import PostCard from '../components/PostCard/PostCard.jsx';


export default function Tag({ postList, tag }) {



  return (
    <Layout title={`${tag} works`}>
      <div>
        <h1>Liste des posts du tag {tag} :</h1>
        {
          postList.map((post) => {
            return (<PostCard key={post.slug} {...post}  />)
          })
        }
      </div>
    </Layout>
  )
}


// Return a list of possible value for tag
export async function getStaticPaths() {

  const tags = await getTagList();
  const usableTags = tags.filter((t) => (!['works', 'news'].includes(t.slug)));

  return { 
    paths: usableTags.map((tag) => ({ params: { tag: tag.slug }}) ),
    fallback: false
  }
}

// Fetch necessary data for the blog post using params.slug
export async function getStaticProps({ params }) {

  const posts = await getPostListByTags(params.tag);

  return {
    props: {
      postList: [...posts],
      tag: params.tag
    }
  }

}

