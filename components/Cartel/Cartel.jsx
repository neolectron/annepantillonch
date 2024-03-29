const transformCaption = (caption) => caption
  ?.replace(/,/g, '\n')
  .replace('vendu','')
  .replace(' x ', ' × ')

const Cartel = ({ caption, children, className = '', ...rest }) => {
  if(!children && !caption) return null;
  return (
    <div className={`p-4 text-xl whitespace-pre-line bg-white ${className}`}
      {...rest}
    >
      {children || transformCaption(caption)}
      { caption?.includes('vendu') 
        &&
        <div className="absolute bottom-2 right-2 h-3 w-3 bg-red-500 rounded-full"></div>
      }
    </div>
  );
}

export default Cartel;