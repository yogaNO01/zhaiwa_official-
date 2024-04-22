import styles from './index.module.less';
import mapImg from '@/assets/images/contact/map.png';
import Title from '@/components/Title';

const boxList = [
  {
    name: '邮件',
    icon: new URL('@/assets/images/contact/box1.png', import.meta.url).href,
    content: '185003955@qq.com',
  },
  {
    name: '电话',
    icon: new URL('@/assets/images/contact/box2.png', import.meta.url).href,
    content: '0564-7166999',
  },
  {
    name: '视频号',
    icon: new URL('@/assets/images/contact/box3.png', import.meta.url).href,
    content: 'VIDEO NUMBER',
  },
  {
    name: '地址',
    icon: new URL('@/assets/images/contact/box4.png', import.meta.url).href,
    content: '安徽省六安市金寨县全军乡沙河店村大寨组寨娃山泉',
  },
  {
    name: '生产地',
    icon: new URL('@/assets/images/contact/box5.png', import.meta.url).href,
    content: '安徽省金寨县',
  },
  {
    name: '电子采购平台',
    icon: new URL('@/assets/images/contact/box6.png', import.meta.url).href,
    content: '4000011038',
  },
];

function Contact() {
  return (
    <>
      <div className={styles.contact_wrapper}>
        <Title
          title="联系我们"
          subTitle="CONTACT US"
        />
        <div className={styles.contact_map}>
          <img
            src={mapImg}
            alt="map"
          />
        </div>

        <div className={styles.contact_info}>
          {boxList.map((item, index) => {
            return (
              <div
                className={styles.contact_info_item}
                key={index}>
                <img
                  src={item.icon}
                  alt="icon"
                  className={styles.contact_info_icon}
                />
                <div className={styles.contact_info_name}>{item.name}</div>
                <div className={styles.contact_info_text}>{item.content}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Contact;
