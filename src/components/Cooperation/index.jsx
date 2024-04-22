import { Row, Col } from 'antd';
import styles from './index.module.less';
import Title from '@/components/Title';

const list = [
  {
    name: '中国人寿',
    img: new URL('@/assets/images/cooperation/logo1.png', import.meta.url).href,
  },
  {
    name: '平安人寿',
    img: new URL('@/assets/images/cooperation/logo2.png', import.meta.url).href,
  },
  {
    name: '新华人寿',
    img: new URL('@/assets/images/cooperation/logo3.png', import.meta.url).href,
  },
  {
    name: '太平人寿',
    img: new URL('@/assets/images/cooperation/logo4.png', import.meta.url).href,
  },
  {
    name: '国联人寿',
    img: new URL('@/assets/images/cooperation/logo5.png', import.meta.url).href,
  },
  {
    name: '国华人寿',
    img: new URL('@/assets/images/cooperation/logo6.png', import.meta.url).href,
  },
  {
    name: '恒昌财富公司',
    img: new URL('@/assets/images/cooperation/logo7.png', import.meta.url).href,
  },
  {
    name: '奔驰4S店',
    img: new URL('@/assets/images/cooperation/logo8.png', import.meta.url).href,
  },
  {
    name: '宝马4S店',
    img: new URL('@/assets/images/cooperation/logo9.png', import.meta.url).href,
  },
  {
    name: '大众4S店',
    img: new URL('@/assets/images/cooperation/logo10.png', import.meta.url)
      .href,
  },
  {
    name: '农业银行',
    img: new URL('@/assets/images/cooperation/logo11.png', import.meta.url)
      .href,
  },
  {
    name: '招商银行',
    img: new URL('@/assets/images/cooperation/logo12.png', import.meta.url)
      .href,
  },
  {
    name: '华夏银行',
    img: new URL('@/assets/images/cooperation/logo13.png', import.meta.url)
      .href,
  },
  {
    name: '工商银行',
    img: new URL('@/assets/images/cooperation/logo14.png', import.meta.url)
      .href,
  },
  {
    name: '建设银行',
    img: new URL('@/assets/images/cooperation/logo15.png', import.meta.url)
      .href,
  },
  {
    name: '江阴农商行',
    img: new URL('@/assets/images/cooperation/logo16.png', import.meta.url)
      .href,
  },
  {
    name: '罗浮宫陶瓷',
    img: new URL('@/assets/images/cooperation/logo17.png', import.meta.url)
      .href,
  },
  {
    name: '索菲亚衣柜',
    img: new URL('@/assets/images/cooperation/logo18.png', import.meta.url)
      .href,
  },
];

function Cooperation() {
  return (
    <div className={styles.content_box}>
      <Title
        title="合作单位"
        subTitle="COOPERATIVE INSTITUTE"
      />

      <div className={styles.cooperation_box}>
        {list.map((item, index) => (
          <div
            className={styles.cooperation_item}
            key={index}>
            <img
              src={item.img}
              alt={item.name}
              loading="lazy"
            />
            <div>{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cooperation;
