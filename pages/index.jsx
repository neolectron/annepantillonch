import Layout from '../components/Layout/Layout.jsx';
import React from 'react';

export default function Home() {
  return (
    <Layout>
      <div className="h-full bg-cover bg-center flex" style={{ backgroundImage: 'url("/technique.png")'}}>
        <div className="ml-8 mr-4 flex flex-col justify-center text-white">
          <h1 className="text-5xl md:text-8xl font-bold px-4">Anne Pantillon</h1>
          <h2 className="text-2xl text-gray-300 shadow-xl px-4">Artiste Peintre</h2>
          <h2 className="text-2xl text-gray-300 shadow-xl px-4">Scrolled </h2>
        </div>
      </div>
    </Layout>
  )
}
