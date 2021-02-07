import React from 'react';
import Layout from '../components/Layout/Layout.jsx';
import { getLastImageForTag, getPageList, getTagList } from '../lib/ghost.js';
import Link from 'next/link';

export default function Works({ tagList }) {

  return (
    <Layout title="works">
      <div className="h-28 flex justify-center items-center text-5xl font-bold">
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
  // and pagination data in the "meta" property,
  // because tag.slug is undefined
  const pageTags = rawTags
    .filter( (tag) => (
      tag.slug && tag.slug !== 'news' && pages.map(p => p.slug).includes(tag.slug)
    ));

  // sort tags according to this order
  // if they are not in this list, push them after 
  const sortOrder = [
    'interieur',
    'oscillography',
    'small-papers-dessins',
    'performances',
    'rivers-rocks',
    'papiers-colles',
    'livres',
    'carnets-de-voyage',
    'fashion-design',
  ];

  const sortedTags = pageTags.sort((a, b) => {

    const indexA = sortOrder.indexOf(a.slug);
    const indexB = sortOrder.indexOf(b.slug);

    // if they are both not in the sorted array
    // do not sort them
    if (indexA === -1 && indexB === -1)
      return 0;

    // if they are both in the sorted array
    // sort them
    if (indexA !== -1 && indexB !== -1)
      return indexA - indexB;
    
    // if the second is not found, return -1
    // if the second is found return its index
    return indexB;

  })

  // if the tag does not have a feature image,
  // we'll look for a feature image in posts (searching from last to first).
  // if it still does not have one, we'll search for any images in a tagged post
  // (from last to first still)
  const imgs = await Promise.all(
    sortedTags.map(async (tag) => tag.feature_image || getLastImageForTag(tag.slug) || '/technique.png')
  );

  return {
    props: {
      tagList: sortedTags.map((tag, index) => ({ ...tag, feature_image: imgs[index] }))
    }
  }

}