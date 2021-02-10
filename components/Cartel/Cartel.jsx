const Cartel = ({ caption, className, ...rest }) => (
  caption ? <div className={`p-4 text-xl whitespace-pre-line bg-white ${className}`} {...rest} 
  >
    {caption?.replace(/,/g, '\n')}
  </div>
  : null
);
export default Cartel;