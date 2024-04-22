import styles from './index.module.less';

// eslint-disable-next-line react/prop-types
function Title({ title }) {
  return (
    <div className={styles.title_content}>
      <div className={styles.title}>{title}</div>
    </div>
  );
}

export default Title;
