import Image from 'next/image';
import styles from './icon.module.css';

const Icon = ({ name, reversed, width = 25, height = 25, className = '' }) => (
  <Image
    src={`/icons/${name}`}
    className={className + ' ' + (reversed ? styles.reversed : '')}
    width={width}
    height={height}
  />
);

export default Icon;
