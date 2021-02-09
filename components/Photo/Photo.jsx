
const Photo = ({ img, lazyload, ...rest }) => (
  <div className="h-full w-full flex flex-col justify-center items-center md:items-stretch md:flex-row">
    <img src={lazyload ? '/loading.gif' : img.src}
    data-flickity-lazyload={img.src}
    className={`min-w-0 h-full flex-shrink object-contain`} />

    {/* {img.caption &&
      <div className={`py-2 px-2 md:py-8 flex flex-col flex-shrink md:self-end md:flex-shrink-0`}>
        <div className={`flex whitespace-pre-line`} >
          {img.caption.replace(/,/g, '\n')}
        </div>
        <Button swaped text="Contacter l'artiste" icon="right" />
      </div>
    }*/}
  </div>
);


export default Photo;