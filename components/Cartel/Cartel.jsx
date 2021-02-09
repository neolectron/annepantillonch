const Cartel = ({ caption, className, ...rest }) => (
  <div className={`uppercase text-2xl ${className}`} {...rest}>
    {caption?.replace(/,/g, '\n')}
  </div>
);


export default Cartel;