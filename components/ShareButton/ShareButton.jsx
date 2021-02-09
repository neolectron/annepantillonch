import { useState } from 'react';
import { a, useTransition } from 'react-spring';
import { 
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
} from 'react-share';

const ShareButton = ({title, className}) => {

  const [opened, setOpen] = useState(false);
  const transitions = useTransition(opened, null, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    transitions.map(({item, key, props}) => 
    item ? 
      <a.div key={key} className={className} style={props} onClick={() => setOpen(false)}>
        <TwitterShareButton url={location.href} title={title} className="mr-2">
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        <LinkedinShareButton url={location.href} title={title} className="mr-2">
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
        <FacebookShareButton url={location.href} title={title} className="mr-2">
          <FacebookIcon size={32} round />
        </FacebookShareButton>
      </a.div>
    :
      <a.svg key={key} className={className} style={props} onClick={() => setOpen(true)} height="24" width="24" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        <path d="m182.461 155.48 49.539-49.539v262.059a24 24 0 0 0 48 0v-262.059l49.539 49.539a24 24
        0 1 0 33.941-33.941l-90.509-90.51a24 24 0 0 0 -33.942 0l-90.509 90.51a24 24 0 1 0 33.941 33.941z" />
        <path d="m464 232a24 24 0 0 0 -24 24v184h-368v-184a24 24 0 0 0 -48 0v192a40 40 0 0 0 40 40h384a40 40 0 0 0 40-40v-192a24 24 0 0 0 -24-24z" />
      </a.svg>
    )
  )
}

export default ShareButton;