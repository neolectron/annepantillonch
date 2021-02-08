import React from 'react';
import Layout from '../components/Layout/Layout.jsx';
import { getPageList, getTagList, findImageForPage } from '../lib/ghost.js';
import Link from 'next/link';

export default function Works({ pageList }) {

  return (
    <Layout title="works" mainClassName="bg-white">
      <div className="h-28 flex justify-center items-center text-2xl">
        WORKS
      </div>
      <div className={`px-8 pb-8 min-h-screen flex flex-wrap justify-between items-center gap-4 w-full`}>
        {pageList.map((page) => (
          <Link key={page.id} href={`/${page.slug}`} >
            <a className={`h-48 flex justify-center items-center flex-grow 
            px-4 rounded-sm
            text-xl md:text-2xl md:whitespace-nowrap text-white text-center uppercase
            bg-zoom bg-center duration-1000 ease-in-out`}
              style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${page.feature_image})`, 
              flexBasis: `${Math.random() > 0.5 ? 30 : 45}%`}}>
              {page.title}
            </a>
          </Link>
        ))}
      </div>
    </Layout>
  )
}

// Fetch necessary data for the blog post using params.slug
export async function getStaticProps() {

  const [pages, tags] = await Promise.all([getPageList(), getTagList()]);

  // 1 - Get all the pages that have a tag with the same slug.
  // 2 - Insert an image wherever you'll find it. (1: posts features_imgs, 2: posts_imgs).
  const workPages = pages
    .filter((page) => tags.map(t => t.slug).includes(page.slug))
    .map(async (page) => ({
      ...page,
      feature_image: (page.feature_image || await findImageForPage(page.slug))
    }));

  return {
    props: {
      pageList: await Promise.all(workPages)
    }
  }

}