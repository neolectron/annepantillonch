const transformCaption = (caption) => caption?.replace(/,/g, '\n');

const Cartel = ({ caption, children, className = '', ...rest }) => {
  if(!children && !caption) return null;
  return (
    <div className={`p-4 text-xl whitespace-pre-line bg-white ${className}`}
      {...rest}
    >
      {children || transformCaption(caption)}
    </div>
  );
}

export default Cartel;