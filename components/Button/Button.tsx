import Icon from '../Icon/Icon.jsx';

const Wrap = ({ asAnchor, children, ...rest }) =>
  asAnchor ? <a {...rest}>{children}</a> : <button {...rest}>{children}</button>;

const Button = ({
  icon,
  reversed,
  swaped,
  children = null,
  text = null,
  asAnchor,
  className = '',
  iconClassName = '',
  ...rest
}) => {
  return (
    <Wrap
      asAnchor={asAnchor}
      className={
        className ||
        'flex items-center w-max uppercase text-2xl focus:outline-none transform transition-transform hover:scale-105 cursor-pointer'
      }
      {...rest}
    >
      {swaped || <Icon reversed={reversed} name={icon} className={iconClassName} />}
      {text || children}
      {swaped && <Icon reversed={reversed} name={icon} className={iconClassName} />}
    </Wrap>
  );
};

export default Button;