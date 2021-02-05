import styles from '../../styles/ghost-post.module.css';
import overrides from '../../styles/ghost-post-overrides.module.css';

const RichContent = ({post}) => (
  <div className={`${styles['post-full-content']} ${overrides['post-full-content']}`}
  dangerouslySetInnerHTML={{ __html: post.html }}>
  </div>
);

export default RichContent;