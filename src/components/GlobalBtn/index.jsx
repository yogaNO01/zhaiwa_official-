import styles from './index.module.less';
import btnImg from '@/assets/images/global/btn.png';

// eslint-disable-next-line react/prop-types
function Title({ text }) {
  return (
    <div className={styles.global_btn}>
      {text}
      <img
        src={btnImg}
        alt="btn_icon"
      />
    </div>
  );
}

export default Title;
