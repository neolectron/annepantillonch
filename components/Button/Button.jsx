import Icon from '../Icon/Icon.jsx';

const Wrap = ({ asAnchor, children, ...rest }) => asAnchor ? <a {...rest}>{children}</a> : <button {...rest}>{children}</button>

const Button = ({ icon, reversed, swaped, children = null, text = null, asAnchor, className = '', ...rest }) => {
  return (
    <Wrap asAnchor={asAnchor} className={`flex w-max uppercase text-2xl 
    focus:outline-none transform transition-transform hover:scale-105 cursor-pointer ${className}`}
    {...rest}>
      {swaped || <Icon reversed={reversed} name={icon} />}
      {text || children}
      {swaped && <Icon reversed={reversed} name={icon} />}
    </Wrap>
  )
}


export default Button;