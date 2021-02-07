import styles from '../../styles/ghost-post.module.css';
import overrides from '../../styles/ghost-post-overrides.module.css';
import { useEffect } from 'react';

const RichContent = ({post}) => {
  
  useEffect(() => {
    setTimeout(() => {
      if (window.instgrm)
        window.instgrm.Embeds.process();
    },2000)
  }, []);
  
  return (
    <div className={`${styles['post-full-content']} ${overrides['post-full-content']} break-words`}
      dangerouslySetInnerHTML={{ __html: post.html }}>
    </div>
  );

}

export default RichContent;