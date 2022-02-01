const transformCaption = (caption) => caption?.replace(/,/g, '\n').replace('vendu', '').replace(' x ', ' × ');

const Cartel = ({ caption, children, className = '', ...rest }) => {
  if (!children && !caption) return null;
  return (
    <div className={className || 'p-4 text-xl whitespace-pre-line flex bg-white'} {...rest}>
      {children || <div dangerouslySetInnerHTML={{ __html: transformCaption(caption) }}></div>}
      {caption?.includes('vendu') && <div className="bottom-2 right-2 absolute w-3 h-3 bg-red-500 rounded-full"></div>}
    </div>
  );
};

export default Cartel;
