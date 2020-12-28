import Head from 'next/head';
// import FadeIn from 'react-fade-in';
import Layout from '../components/Layout/Layout.jsx';
import PostCard from '../components/PostCard/PostCard.jsx';

export default function Home() {

  const lorem = " loremipsum dolor sit amet"
  return (
    <Layout>
      <Head>
        <title>Anne Pantillon - Artiste Peintre</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text-center w-full">
        <h1 className="text-4xl">Anne Pantillon</h1>
        <h2 className="text-xl text-gray-600">Artiste Peintre</h2>
      </div>
      <div className="flex justify-center h-full pt-4">
        <PostCard
          title={`la peinture c'est cool cool cool cool cool cool cool cool cool cool cool `.repeat(10)}
          img="http://localhost:2368/content/images/2020/12/Untitled-1.png"
          slug="la-peinture-c-est-cool"
          text={lorem.repeat(11)}
          author="Anne Pantillon"
          avatar="https://pbs.twimg.com/profile_images/885868801232961537/b1F6H4KC_400x400.jpg"
          date="2020-12-14T09:28:29.000+00:00">
          prout
        </PostCard>
      </div>
    </Layout>
  )
}
