import ButtonLink from '../ButtonLink/ButtonLink';
import Link from 'next/link';
import type { linkType } from '../../types/link';

interface HeaderProps {
  title?: string;
  prev?: linkType;
  next?: linkType;
}

const Header = ({ prev, next, title }: HeaderProps) => (
  <header className="grid items-center grid-cols-3 p-4 text-2xl">
    {prev && (
      <Link href={prev.href} passHref>
        <ButtonLink icon="left.svg" text={prev.name || 'Précédent'} />
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
  </header>
);

export default Header;
