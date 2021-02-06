import Flickity from 'react-flickity-component';
import styles from './caroussel.module.css';
import Button from '../Button/Button.jsx';
import ShareButton from '../ShareButton/ShareButton.jsx';

const Caroussel = ({ post, children}) => {
  const isServer = typeof window === 'undefined';
  
  return (
    <Flickity
      static
      className={`${styles.caroussel} w-full snap-start bg-white pt-14 md:pt-0`}
      options={{ cellAlign: 'left', 
        setGallerySize: false, 
        lazyLoad: 3, 
        imagesLoaded: true, 
        hash: true,
        fullscreen: true,
      }}
    >
      {children}
      {post.imgs.map((img, i) => (
        <div key={i} id={`${post.id}-${i+1}`} className="relative h-full w-full flex justify-center items-center md:items-stretch flex-col md:flex-row">

          <img src={'/loading.gif'} data-flickity-lazyload={img.src} 
            className={`min-w-0 h-full flex-shrink object-contain`} />

          {img.caption &&
            <div className={`${styles.carousselCaption} py-8 px-4 flex flex-col items-center self-end flex-shrink md:flex-shrink-0`}>
              <div className={`text-center flex justify-center whitespace-pre-line`} >
                {img.caption.replace(/,/g, '\n')}
              </div>
              <Button href={`mailto:annepantillon@gmail.com?subject=a propos de la serie ${post.slug}`}>Contacter l'artiste</Button>
            </div>
          }

          <div className="cursor-pointer absolute top-10 right-10">
            <ShareButton 
            url={isServer ? '' : location.href} 
            title={`J'aime une publication d'Anne pantillon : ${post.title}`} />
          </div>
        </div>
      ))}
    </Flickity>
  );
}

export default Caroussel;