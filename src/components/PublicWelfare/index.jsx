import styles from './index.module.less';
import Title from '@/components/Title';

import banner from '@/assets/images/publicWelfare/public_welfare4.png';

import Arrow from '@/assets/images/publicWelfare/arrow.png';

const list = [
  {
    date: '02/29',
    content: '寨娃科技荣获金寨县爱心企业',
  },
  {
    date: '02/29',
    content: '我们每一瓶的的收入都将为更美好的生活助力',
  },
  {
    date: '02/29',
    content: '慈善是我们一辈子矢志不移的选择',
  },
  {
    date: '02/29',
    content: '大连使用数字人民币完成首笔缴纳社保费的业务',
  },
  {
    date: '02/29',
    content: '鲜花小学是我们一直都牵挂',
  },
];

function PublicWelfare() {
  return (
    <div className={styles.content_box}>
      <Title
        title="公益事业"
        subTitle="WELFARE"
      />

      <div className={styles.content_top}>
        <img
          className={styles.content_top_banner}
          src={banner}
        />

        <div className={styles.content_top_right}>
          {list.map((item, index) => (
            <div
              key={index}
              className={styles.content_top_right_item}>
              <div className={styles.content_top_right_item_date}>
                {item.date}
              </div>
              <div className={styles.content_top_right_item_content}>
                {item.content}
                <img
                  className={styles.content_top_right_item_content_arrow}
                  src={Arrow}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PublicWelfare;
