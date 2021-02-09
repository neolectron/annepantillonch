import Flickity from 'react-flickity-component';
import Article from '../Article/Article.jsx';
import Photo from '../Photo/Photo.jsx';
import ShareButton from '../ShareButton/ShareButton.jsx';

import Link from 'next/link';

import styles from './caroussel.module.css';

const Caroussel = ({ serie }) => {

  return (
    <div className="relative">
      <Flickity
        static
        className={`${styles.caroussel} w-full snap-start bg-white`}
        options={{ cellAlign: 'left', 
          setGallerySize: false, 
          lazyLoad: 3, 
          imagesLoaded: true, 
          hash: true,
        }}
      >
        <div id={`${serie.id}-0`} className="snap-start h-full w-full flex flex-col justify-center items-center text-3xl md:text-5xl">
          <div className='px-2 md:px-14 flex-grow flex w-full h-full flex-col justify-center items-center flex-wrap'>
            <div>{serie.title}</div>
            <Article html={serie.html} hideFigure />
          </div>
          <div className="pb-4 text-center w-full text-lg text-blue-600">
            {serie.tags.map(t => (
              <Link key={t.slug} href={`/${t.slug}`}>
                <a>#{t.slug} </a>
              </Link>
            ))}
          </div>
        </div>

        {serie.imgs.map((img, i) => <Photo img={img} key={i} />)}

      </Flickity>
      <ShareButton className="absolute top-4 right-4" title={`J'aime une publication d'Anne Pantillon: ${serie.title}`}/>
    </div>
  );
}

export default Caroussel;