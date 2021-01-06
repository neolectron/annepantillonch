import React from 'react';
import Layout from '../components/Layout/Layout.jsx';
import { getLastImageForTag, getTagList } from '../lib/ghost.js';
import Link from 'next/link';

export default function Works({ tagList }) {

  return (
    <Layout>
      <div className={`p-8 h-full flex flex-wrap justify-between gap-4 w-full pt-12 md:pr-20`} >
        {tagList.map((tag) => (
          <Link key={tag.id} href={`/${tag.slug}`} >
            <a className={`h-auto flex justify-center items-center flex-grow 
            px-4 rounded-sm
            text-xl md:text-3xl md:whitespace-nowrap font-bold text-white text-center uppercase
            bg-zoom bg-center duration-1000 ease-in-out`}
              style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${tag.feature_image})`, 
              flexBasis: `${Math.random() > 0.5 ? 30 : 45}%`}}>
              {tag.name}
            </a>
          </Link>
        ))}
      </div>
    </Layout>
  )
}

// Fetch necessary data for the blog post using params.slug
export async function getStaticProps() {

  const tags = await getTagList().then(async (rawTags) => {
    return rawTags.filter( (t) => (!['works', 'news'].includes(t.slug)) );
  });

  const imgs = await Promise.all(tags.map((tag) => {
    if(tag.feature_image) {
      return Promise.resolve(tag.feature_image);
    }
    else {
      return getLastImageForTag(tag.slug)
    }
  }));


  const tagsWithImages = tags.map((tag, index) => ({...tag, feature_image: imgs[index]}));

  return {
    props: {
      tagList: [
        ...tagsWithImages,
      ]
    }
  }

}