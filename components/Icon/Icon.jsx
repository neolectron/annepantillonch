import * as icons from './index';

import styles from './icon.module.css';

const Icon = ({name, reversed, width = 25, height = 25}) => {

  const Image = icons[name];

  return (
    <Image className={reversed ? styles.white : styles.black} width={width} height={height} />
  );
};

export default Icon;