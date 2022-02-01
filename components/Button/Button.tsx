import Icon from '../Icon/Icon';

interface ButtonProps {
  children?: React.ReactNode;
  text?: string;
  icon?: string;
  swaped?: boolean;
  onClick?: () => void;
}

const Button = ({ icon, swaped, children, text, onClick }: ButtonProps) => (
  <button
    className="w-max focus:outline-none hover:scale-105 flex items-center text-2xl uppercase transition-transform transform cursor-pointer"
    onClick={onClick}
  >
    {swaped || (icon && <Icon name={icon} />)}
    {text || children}
    {swaped && icon && <Icon name={icon} />}
  </button>
);

export default Button;
