import * as icons from './icons';

interface IconProps {
  name: string;
  width?: string | number;
  height?: string | number;
}

const Icon = ({ name, width = 25, height = 25 }: IconProps) => {
  //@ts-ignore
  const Image = icons[name.replace('.svg', '')];

  if (!Image) {
    throw new Error(`Icon ${name} does not exist, or is not imported in /components/Icon/index.js`);
  }

  return <Image width={width} height={height} alt={`icon ${name}`} />;
};

export default Icon;
