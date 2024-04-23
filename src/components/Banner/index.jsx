import styles from './index.module.less';

const banner = new URL('@/assets/images/banner/banner.png', import.meta.url)
  .href;

function Banner() {
  return (
    <div className={styles.banner}>
      <image
        // loading="lazy"
        // src={banner}
        alt={`banner`}
        className={styles.banner_img}
      />
    </div>
  );
}

export default Banner;
