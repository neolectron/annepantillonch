import Flickity from 'react-flickity-component';
import styles from './caroussel.module.css';
import Button from '../Button/Button.jsx';

const Caroussel = ({ post, children}) => (
  <Flickity
    static
    className={`${styles.caroussel} w-full snap-start bg-white pt-14 md:pt-0`}
    options={{ cellAlign: 'left', 
      setGallerySize: false, 
      lazyLoad: 3, 
      imagesLoaded: true, 
      hash: true,
      fullscreen: true 
    }}
    // elementType={'div'} // default 'div'
    // disableImagesLoaded={false} // default false
    // reloadOnUpdate // default false
    //"mailto:annepantillon@gmail.com"
  >
    {children}
    {post.imgs.map((img, i) => (
      <div key={i} className="h-full w-full flex justify-center items-center md:items-stretch flex-col md:flex-row">

        <img src={'/loading.gif'} data-flickity-lazyload={img.src} 
          className={`min-w-0 h-full flex-shrink object-contain`} />

        {img.caption &&
          <div className={`${styles.carousselCaption} py-8 px-4 flex flex-col items-center self-end flex-shrink md:flex-shrink-0`}>
            <div className={`text-center flex justify-center`} >
              {img.caption}
            </div>
            <Button href={`mailto:annepantillon@gmail.com?subject=a propos de la serie ${post.slug}`}>Contacter l'artiste</Button>
          </div>
        }

      </div>
    ))}
  </Flickity>
);

export default Caroussel;