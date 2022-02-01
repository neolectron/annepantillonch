import Button from '../Button/Button';

const Footer = ({ backTop = false }) => (
  <footer className="p-4">
    {backTop && (
      <div className={`my-14 flex justify-center items-center`}>
        <Button icon="up.svg" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
      </div>
    )}
  </footer>
);

export default Footer;
