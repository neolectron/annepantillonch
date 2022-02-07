import Button from '../Button/Button';
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

const SocialIcons = ({ title, url, ...rest }) => (
  <div className={`flex`} {...rest}>
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
);

const AButton = animated(Button);
const ASocialIcons = animated(SocialIcons);

const ShareButton = ({ title, url }) => {
  const [opened, setOpen] = useState(false);
  const transitions = useTransition(opened, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0, position: 'absolute' },
  });

  setTimeout(() => setOpen(false), 3000);

  useEffect(() => {
    if (!opened) return null;

    const close = () => setOpen(false);

    const timer = setTimeout(close, 4 * 1000);
    return () => clearTimeout(timer);
  }, [opened]);

  return transitions((props, item) =>
    item ? (
      <ASocialIcons style={props} title={title} url={url} />
    ) : (
      <AButton style={props} icon="share.svg" onClick={() => setOpen(true)} />
    )
  );
};

export default ShareButton;
