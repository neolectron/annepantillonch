import React from 'react';
import Layout from '../components/Layout/Layout.jsx';
import { getLastImageForTag, getPageList, getTagList } from '../lib/ghost.js';
import Link from 'next/link';

export default function Works({ tagList }) {

  return (
    <Layout>
      <div className="flex text-5xl font-bold justify-center items-center h-28">
        Works
      </div>
      <div className={`px-8 pb-8 min-h-screen flex flex-wrap justify-between items-center gap-4 w-full md:pr-20`}>
        {tagList.map((tag) => (
          <Link key={tag.id} href={`/${tag.slug}`} >
            <a className={`h-48 flex justify-center items-center flex-grow 
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

  const [pages, rawTags] = await Promise.all([getPageList(), getTagList()]);

  // get All tags having a Page with the same name
  // also exclude the 'news' tag
  const tags = rawTags
    .filter( (tag) => (
      tag.slug !== 'news' && pages.map(p => p.slug).includes(tag.slug)
    ));

  // if the tag does not have a feature image,
  // we'll look for a feature image in posts (searching from last to first).
  // if it still does not have one, we'll search for any images in a tagged post
  // (from last to first still)
  const imgs = await Promise.all(
    tags.map(async (tag) => tag.feature_image || await getLastImageForTag(tag.slug) || '/technique.png')
  );
  const tagsWithImages = tags.map((tag, index) => ({...tag, feature_image: imgs[index]}));

  return {
    props: {
      tagList: [
        ...tagsWithImages,
      ]
    }
  }

}