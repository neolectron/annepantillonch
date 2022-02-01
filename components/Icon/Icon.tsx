import Image from 'next/image';

interface IconProps {
  name: string;
  width?: string | number;
  height?: string | number;
}

const Icon = ({ name, width = 25, height = 25 }: IconProps) => (
  <Image src={`/icons/${name}`} width={width} height={height} alt={`icon ${name}`} />
);

export default Icon;
