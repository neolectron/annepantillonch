import Button from '../Button/Button.jsx';
import { useEffect, useState } from 'react';
import { animated, useTransition } from 'react-spring';
import { 
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
} from 'react-share';

const SocialIcons = ({title, url, className = '', ...rest}) => (
  <div className={`flex ${className}`} {...rest}>
    <TwitterShareButton url={url} title={title} className="mr-2">
      <TwitterIcon size={25} round />
    </TwitterShareButton>
    <LinkedinShareButton url={url} title={title} className="mr-2">
      <LinkedinIcon size={25} round />
    </LinkedinShareButton>
    <FacebookShareButton url={url} title={title} className="mr-2">
      <FacebookIcon size={25} round />
    </FacebookShareButton>
  </div>
)

const AButton = animated(Button);
const ASocialIcons = animated(SocialIcons);

const ShareButton = ({title, url, className = ''}) => {

  const [opened, setOpen] = useState(false);
  const transitions = useTransition(opened, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0, position: 'absolute',  },
  });

  useEffect(() => {
    if(!opened) return null;
    const close = () => setOpen(false);
    const timer = setTimeout(close , 4 * 1000);
    return () => clearTimeout(timer);
  }, [opened]);


  return transitions.map(({item, key, props}) => 
    item 
      ? <ASocialIcons key={key} style={props} title={title} url={url} className={className} />
      : <AButton key={key} style={props} icon="share" onClick={() => setOpen(true)}  className={className} />
  );

}

export default ShareButton;