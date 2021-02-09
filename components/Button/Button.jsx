import Icon from '../Icon/Icon.jsx';

const Button = ({icon, reversed, children, text}) => (
  <button className={`flex uppercase text-2xl text-gray-300 transform transition-transform hover:scale-105`}>
    {children || text} <Icon reversed={reversed} name={icon} />
  </button>
);


export default Button;