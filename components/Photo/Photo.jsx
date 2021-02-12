
const Photo = ({ img, lazyload, ...rest }) => (
  <div className="h-full w-full flex flex-col justify-center items-center md:items-stretch md:flex-row" 
  {...rest}>
    <img src={lazyload ? '/loading.gif' : img.src}
    data-flickity-lazyload={img.src}
    className={`min-w-0 h-full flex-shrink object-contain`} />
  </div>
);


export default Photo;