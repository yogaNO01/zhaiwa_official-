import styles from './index.module.less';
import SubTitle from '@/components/SubTitle';
import GlobalBtn from '@/components/GlobalBtn';
/* eslint-disable */

function Article({
  children,
  btnText,
  imgSrc,
  subTitle,
  imgDirection = 'right',
}) {
  return (
    <div
      className={styles.article_box}
      style={{
        justifyContent: imgDirection === 'right' ? 'right' : 'left',
      }}>
      {imgDirection === 'left' ? (
        <img
          loading="lazy"
          src={imgSrc}
          alt="article_img"
          className={styles.article_img}
        />
      ) : null}

      <div
        className={styles.article_content}
        style={{
          padding: imgDirection === 'right' ? '0 50px 0 0' : '0 0 0 50px',
        }}>
        <SubTitle title={subTitle} />
        {children}
        {btnText ? <GlobalBtn text={btnText} /> : null}
      </div>

      {imgDirection === 'right' ? (
        <img
          loading="lazy"
          src={imgSrc}
          alt="article_img"
          className={styles.article_img}
        />
      ) : null}
    </div>
  );
}

export default Article;
