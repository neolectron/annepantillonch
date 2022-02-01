import Icon from '../Icon/Icon';

interface ButtonLinkProps {
  children?: React.ReactNode;
  text?: string;
  icon?: string;
  swaped?: boolean;
  href?: string;
  target?: string;
}

const ButtonLink = ({ icon, swaped, children, text, href, target }: ButtonLinkProps) => {
  return (
    <a
      href={href}
      className="w-max focus:outline-none hover:scale-105 flex items-center text-2xl uppercase transition-transform transform cursor-pointer"
      target={target}
    >
      {swaped || (icon && <Icon name={icon} />)}
      {text || children}
      {swaped && icon && <Icon name={icon} />}
    </a>
  );
};

export default ButtonLink;
