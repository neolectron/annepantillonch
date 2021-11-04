import Button from '../Button/Button.jsx';
import Link from 'next/link';

const Header = ({ backTo, backText, title = null, goTo, goText, reversedIcon = false }) => (
  <header className="grid items-center grid-cols-3 p-4 text-2xl">
    {backTo && (
      <Link href={backTo}>
        <>
          <Button asAnchor icon="left.svg" text={backText || 'Précédent'} reversed={reversedIcon} />
        </>
      </Link>
    )}
    {!backTo && backText}
    {title && <div className="flex justify-center col-start-2">{title}</div>}
    {goTo && (
      <Link href={goTo}>
        <div className="col-start-3 justify-self-end">
          <Button asAnchor swaped icon="right.svg" text={goText || 'Suivant'} reversed={reversedIcon} />
        </div>
      </Link>
    )}
  </header>
);

export default Header;
