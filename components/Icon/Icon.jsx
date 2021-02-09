import Image from 'next/image';

const iconsPath = '/icons';

const Icon = ({name, width = 25, height = 25}) => <Image src={`${iconsPath}/${name}.svg`} width={width} height={height} />

export default Icon;