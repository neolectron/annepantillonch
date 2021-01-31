import Flickity from 'react-flickity-component';
import styles from './caroussel.module.css';

const Caroussel = ({imgs, children, appendChildren = false}) => (
  <Flickity
    static
    className={`${styles.caroussel} w-full snap-start bg-white pt-14 md:pt-0`}
    options={{ cellAlign: 'left', 
      setGallerySize: false, 
      lazyLoad: 3, 
      imagesLoaded: true, 
      hash: true }
    }
    // elementType={'div'} // default 'div'
    // disableImagesLoaded={false} // default false
    // reloadOnUpdate // default false
  >
    {!appendChildren && children}
    {imgs.map((img, i) => (
      <div key={i} className="h-full w-full flex justify-center items-center md:items-stretch flex-col md:flex-row">

        <img src={'/loading.gif'} data-flickity-lazyload={img.src} 
          className={`min-w-0 h-full flex-shrink object-contain`} />

        {img.caption &&
          <div className={`${styles.carousselCaption} py-8 px-4 text-center flex-shrink md:flex-shrink-0 flex justify-center items-end`} >
            {img.caption}
          </div>
        }

      </div>
    ))}
    {appendChildren && children}
  </Flickity>
);

export default Caroussel;