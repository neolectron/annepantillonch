import React from 'react';
import Layout from '../components/Layout/Layout.jsx';
import { getPostListByTags } from '../lib/ghost.js';


export default function News({ news }) {

  return (
    <Layout>
      {news.map((n) => `${n.title} `)}
    </Layout>
  )
}

// Fetch necessary data for the blog post using tags
export async function getStaticProps() {
  const news = await getPostListByTags('news');
  return {props: {news}}
}