import ButtonLink from '../ButtonLink/ButtonLink';
import Link from 'next/link';
import type { linkType } from '../../types/link';
import clsx from 'clsx';

interface NavbarProps {
  title?: string | undefined;
  prev?: linkType | undefined;
  next?: linkType | undefined;
}

const Navbar = ({ prev, next, title }: NavbarProps) => (
  <nav
    className={clsx('grid items-center grid-cols-3 p-4 text-2xl uppercase', {
      'text-white': prev?.href === '/',
    })}
  >
    {prev && (
      <Link href={prev.href} passHref>
        <ButtonLink icon={prev.href === '/' ? '' : 'left.svg'} text={prev.name || 'Précédent'} />
      </Link>
    )}
    {title && <div className="flex justify-center col-start-2">{title}</div>}
    {next && (
      <Link href={next.href} passHref>
        <div className="justify-self-end col-start-3">
          <ButtonLink swaped icon="right.svg" text={next.name || 'Suivant'} />
        </div>
      </Link>
    )}
  </nav>
);

export default Navbar;
