import Link from 'next/link';
import React from 'react';

const PostCard = ({ title, slug, excerpt, authors, created_at, feature_image }) => {

  return (
    <Link href={`/posts/${slug}`}>
      <a className="block my-4 max-w-3xl max-h-72 md:max-h-60 w-full md:flex transform hover:scale-105 transition-transform cursor-pointer">

        {/* {feature_image && <img className="h-48 md:h-auto md:w-48 flex-none bg-cover bg-center rounded-t md:rounded-t-none md:rounded-l text-center overflow-hidden"
          src={feature_image} alt="Image de l'article" />} */}

        {feature_image && <div className="h-48 md:h-auto md:w-48 flex-none bg-cover bg-center rounded-t md:rounded-t-none md:rounded-l text-center overflow-hidden"
          style={{ backgroundImage: `url(${feature_image})` }} title="Image de l'article"></div>}

        <div className="bg-white w-full border-r border-b border-l border-grey-light rounded-b
        md:border-l-0 md:border-t md:border-grey-light md:rounded-b-none md:rounded-r
        p-4 flex flex-col justify-between leading-normal overflow-hidden">
          <div className="mb-8">
            {/* <p class="text-sm text-grey-dark flex items-center">
            <svg class="text-grey w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
            </svg>
            Members only
            </p> */}
            <div className="text-black font-bold text-xl mb-2 truncate">{title.length > 3000 ? title.slice(0, 30) + '...' : title}</div>
            <p className="text-grey-darker text-base max-h-24 overflow-hidden">{(excerpt?.length > 100) ? excerpt.slice(0, 100) + '...' : excerpt}</p>
          </div>

          <div className="flex items-center self-end">
            <img className="w-10 h-10 rounded-full mr-4" 
            src={authors[0].profile_image} alt={`Avatar de ${authors[0].name}`} />
              <div className="text-sm">
              <p className="text-black leading-none">{authors[0].name}</p>
              <p className="text-grey-dark">{new Date(created_at).toLocaleDateString()}</p>
              </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default PostCard