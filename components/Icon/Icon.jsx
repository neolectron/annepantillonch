import * as icons from './index';

import styles from './icon.module.css';

const Icon = ({name, reversed, width = 25, height = 25}) => {

  const Image = icons[name];

  if(!Image) {
    throw new Error(`Icon ${name} does not exist, or is not imported in index.js`);
  }

  return (
    <Image className={reversed ? styles.white : styles.black} width={width} height={height} />
  );
};

export default Icon;