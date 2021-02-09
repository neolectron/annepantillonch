import Flickity from 'react-flickity-component';
import styles from './caroussel.module.css';
import Button from '../Button/Button.jsx';
import ShareButton from '../ShareButton/ShareButton.jsx';

const Caroussel = ({ post, children}) => {

  return (
    <Flickity
      static
      className={`${styles.caroussel} w-full snap-start bg-white my-4`}
      options={{ cellAlign: 'left', 
        setGallerySize: false, 
        lazyLoad: 3, 
        imagesLoaded: true, 
        hash: true,
      }}
    >
      {children}
      {post.imgs.map((img, i) => (
        <div key={i} id={`${post.id}-${i+1}`} className="relative h-full w-full flex justify-center items-center md:items-stretch flex-col md:flex-row">

          <img src={'/loading.gif'} data-flickity-lazyload={img.src} 
            className={`min-w-0 h-full flex-shrink object-contain`} />

          {img.caption &&
            <div className={`py-2 px-2 md:py-8 flex flex-col flex-shrink md:self-end md:flex-shrink-0`}>
              <div className={`flex whitespace-pre-line`} >
                {img.caption.replace(/,/g, '\n')}
              </div>
              <Button swaped text="Contacter l'artiste" icon="right" />
            </div>
          }

          <div className="cursor-pointer absolute top-4 right-10">
            <ShareButton title={`J'aime une publication d'Anne Pantillon : ${post.title}`} />
          </div>
        </div>
      ))}
    </Flickity>
  );
}

export default Caroussel;