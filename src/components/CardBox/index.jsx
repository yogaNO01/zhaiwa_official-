import styles from './index.module.less';

// eslint-disable-next-line react/prop-types
function CardBox({ item }) {
  // eslint-disable-next-line react/prop-types
  const { img, title, content } = item;

  return (
    <div className={styles.card_box}>
      <div className={styles.card_title}>{title}</div>
      <div className={styles.card_content}>{content}</div>
      <img
        loading="lazy"
        src={img}
        alt={`card_img`}
        className={styles.card_img}
      />
    </div>
  );
}

export default CardBox;
