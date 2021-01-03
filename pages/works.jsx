import Layout from '../components/Layout/Layout.jsx';
import { React, } from 'react';
import { getTagList } from '../lib/ghost.js';
import Link from 'next/link';

export default function Works({ tagList }) {

  return (
    <Layout>
      <div>
        { 
          tagList.map((tag) => {
            return (
              <Link key={tag.id} href={`/${tag.slug}`} >
                <a className="text-5xl flex">
                  {tag.name}
                </a>
              </Link>
            );
          }) 
        }
      </div>
    </Layout>
  )
}

// Fetch necessary data for the blog post using params.slug
export async function getStaticProps() {

  const tags = await getTagList();
  const usableTags = tags.filter((t) => (!['works', 'news'].includes(t.slug)));

  return {
    props: {
      tagList: [
        ...usableTags,
      ]
    }
  }

}