import Button from '../Button/Button.jsx';
import Link from 'next/link';

const Header = ({ backTo, backText, title = null, goTo, goText }) => (
  <header className="grid items-center grid-cols-3 p-4 text-2xl">
    {backTo && (
      <Link href={backTo}>
        <Button asAnchor icon="left" text={backText || 'Précédent'} />
      </Link>
    )}
    {!backTo && backText}
    {title && <div className="flex justify-center col-start-2">{title}</div>}
    {goTo && (
      <Link href={goTo}>
        <Button
          asAnchor
          swaped
          icon="right"
          text={goText || 'Suivant'}
          className="col-start-3 justify-self-end"
        />
      </Link>
    )}
  </header>
);

export default Header;
