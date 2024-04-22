import styles from "./index.module.less";

function Title({ title, subTitle }) {
  return (
    <div className={styles.title_content}>
      <div className={styles.title}>{title}</div>
      <div className={styles.sub_title}>{subTitle}</div>
    </div>
  );
}

export default Title;
