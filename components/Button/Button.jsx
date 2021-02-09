import Icon from '../Icon/Icon.jsx';

const Wrap = ({ asAnchor, children, ...rest }) => asAnchor ? <a {...rest}>{children}</a> : <button {...rest}>{children}</button>

const Button = ({ icon, reversed, swaped, children, text, asAnchor, ...rest }) => (
  <Wrap asAnchor={asAnchor} className={`flex uppercase text-2xl 
  focus:outline-none transform transition-transform hover:scale-105 cursor-pointer`}
  {...rest}>
    {swaped && (children || text)}
    <Icon reversed={reversed} name={icon} />
    {swaped || (children || text)}
  </Wrap>
);


export default Button;