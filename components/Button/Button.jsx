import Link from 'next/link';

const Button = ({children, href, asLink}) => {

  const className = `block my-1 py-2 px-4 w-max 
    rounded-sm font-bold cursor-pointer bg-gray-200
    transform transition-transform hover:scale-105
    hover:bg-white hover:text-gray-900 hover:border-gray-900 border border-gray-500`;

  if(asLink) {
    return (
      <Link href={href} >
        <a className={className}>{children}</a>
      </Link>
    )
  }

  return (
    <a className={className} href={href} target="_blank">
      {children}
    </a>
  )
}


export default Button;