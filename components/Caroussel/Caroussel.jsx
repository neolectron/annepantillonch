import Flickity from 'react-flickity-component';
import Article from '../Article/Article.jsx';
import Photo from '../Photo/Photo.jsx';
import TagList from '../TagList/TagList.jsx';
import ShareButton from '../ShareButton/ShareButton.jsx';
import Cartel from '../Cartel/Cartel.jsx';
import Icon from '../Icon/Icon.jsx';

import styles from './caroussel.module.css';
import { useEffect, useRef, useState } from 'react';

const Caroussel = ({ serie }) => {

  const flickity = useRef(null);
  const [pos, setPos] = useState(0);

  useEffect(() => {
    if(!flickity.current)
      return null;

    flickity.current.on('change', setPos);
    return () => flickity.current.off('change', setPos);

  }, [pos, setPos]);

  return (
    <div className="relative">
      <Flickity
        static
        flickityRef={ref => flickity.current = ref}
        className={`${styles.caroussel} w-full snap-start bg-white`}
        options={{ 
          cellAlign: 'left', 
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
          <div className="text-center w-full">
            <TagList tags={serie.tags} />
          </div>
        </div>

        {serie.imgs.map((img, i) => <Photo img={img} key={i} />)}

      </Flickity>
      <ShareButton className="absolute top-4 right-4" title={`J'aime une publication d'Anne Pantillon: ${serie.title}`}/>
      <Cartel className="absolute bottom-4 right-10" caption={serie.imgs[pos - 1]?.caption} />
      {(pos === serie.imgs.length) && 
        <div className="absolute top-1/2 right-10 cursor-pointer">
          <Icon name="left" />
        </div>
      }
    </div>
  );
}

export default Caroussel;