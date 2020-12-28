import Link from 'next/link';


const PostCard = ({title, slug, text, author, avatar, date, img}) => {

  return (
    <Link href={`/posts/${slug}`}>
      <a class="max-w-3xl max-h-72 lg:max-h-60 w-full lg:flex transform hover:scale-105 transition-transform cursor-pointer">

        {img && <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" 
        style={{backgroundImage: `url(${img})`}} title="Image de l'article"></div>}

        <div class="bg-white border-r border-b border-l border-grey-light rounded-b
        lg:border-l-0 lg:border-t lg:border-grey-light lg:rounded-b-none lg:rounded-r
        p-4 flex flex-col justify-between leading-normal overflow-hidden">
          <div class="mb-8">
                {/* <p class="text-sm text-grey-dark flex items-center">
                <svg class="text-grey w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                </svg>
                Members only
                </p> */}
                <div class="text-black font-bold text-xl mb-2 truncate">{title.length > 3000 ? title.slice(0, 30) + '...' : title}</div>
                <p class="text-grey-darker text-base max-h-24 overflow-hidden">{text.length > 100 ? text.slice(0, 100) + '...' : text}</p>
          </div>

          <div class="flex items-center self-end">
            <img class="w-10 h-10 rounded-full mr-4" 
            src={avatar} alt={`Avatar de ${author}`} />
              <div class="text-sm">
                <p class="text-black leading-none">{author}</p>
                <p class="text-grey-dark">{new Date(date).toLocaleDateString()}</p>
              </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default PostCard