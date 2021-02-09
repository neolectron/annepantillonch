import Icon from '../Icon/Icon.jsx';

const Button = ({ icon, reversed, swaped, children, text, ...rest }) => (
  <button className={`flex uppercase text-2xl 
  focus:outline-none transform transition-transform hover:scale-105`} {...rest}>
    {swaped && (children || text)}
    <Icon reversed={reversed} name={icon} />
    {swaped || (children || text)}
  </button>
);


export default Button;