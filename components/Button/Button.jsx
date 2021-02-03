const Button = ({children, href}) => (
  <a className={`block py-2 px-4 rounded-sm font-bold cursor-pointer bg-gray-200
  transform transition-transform hover:scale-105
  hover:bg-white hover:text-gray-900 hover:border-gray-900 border`}
    href={href} target="_blank">
    {children}
  </a>
);

export default Button;