import Flickity from 'react-flickity-component';
import Article from '../Article/Article.jsx';
import Photo from '../Photo/Photo.jsx';
import TagList from '../TagList/TagList.jsx';
import ShareButton from '../ShareButton/ShareButton.jsx';
import Button from '../Button/Button.jsx';
import Cartel from '../Cartel/Cartel.jsx';

import styles from './caroussel.module.css';
import { useEffect, useRef, useState } from 'react';

const Caroussel = ({ serie, snap = true }) => {
  const flickity = useRef(null);
  const [pos, setPos] = useState(0);

  useEffect(() => {
    if (!flickity.current) return null;

    flickity.current.on('change', setPos);
    return () => flickity.current.off('change', setPos);
  }, [pos, setPos]);

  const isClient = typeof window !== 'undefined';

  return (
    <div className="relative">
      <Flickity
        static
        flickityRef={(ref) => (flickity.current = ref)}
        className={`${styles.caroussel} w-full ${snap ? 'snap-start' : ''} bg-white`}
        options={{
          cellAlign: 'left',
          setGallerySize: false,
          lazyLoad: 3,
          imagesLoaded: true,
          hash: true,
          friction: 0.5,
        }}
      >
        <div id={`${serie.id}-0`} className="grid w-full h-full grid-rows-2 px-2 md:px-14">
          <div className="flex items-end justify-center text-3xl md:text-5xl">{serie.title}</div>
          <div className="flex flex-col items-center">
            <div className="grid flex-grow grid-cols-1 md:grid-cols-3">
              <Article html={serie.html} hideFigure className="col-start-2 text-center" />
            </div>
            <TagList tags={serie.tags} />
          </div>
        </div>

        {serie.imgs.map((img, i) => (
          <Photo img={img} key={i} />
        ))}
      </Flickity>

      <Cartel className="absolute bottom-7 right-7" caption={serie.imgs[pos - 1]?.caption} />
      <div className="absolute flex bottom-7 left-7">
        <Cartel className="flex mr-2">
          <ShareButton
            url={isClient && location.href}
            title={`J'aime une publication d'Anne Pantillon: ${serie.title}`}
          />
        </Cartel>
        <Cartel className="flex">
          <Button
            asAnchor
            target="_blank"
            icon="email.svg"
            href={`mailto:atelier.annepantillon@gmail.com?body=A propos de ${pos ? `l'œuvre ${pos} de` : ''} la série ${
              serie.title
            } - ${isClient ? location.href : ''}`}
          />
        </Cartel>
      </div>

      {pos === serie.imgs.length && (
        <Button
          reversed
          className="flickity-button flickity-prev-next-button next"
          icon="flickityArrow.svg"
          iconClassName="flickity-button-icon"
          onClick={() => flickity.current.selectCell(0)}
        />
      )}
    </div>
  );
};

export default Caroussel;
