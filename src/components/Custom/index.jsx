import styles from './index.module.less';
import banner from '@/assets/images/custom/banner.png';
import Title from '@/components/Title';
import pathImg from '@/assets/images/custom/path.png';
import flowImg from '@/assets/images/custom/flow.png';

const list = [
  {
    name: '活动定制',
    img: new URL('@/assets/images/custom/1.png', import.meta.url).href,
    content: '您的专属社交名片见证您人生的重要时刻',
  },
  {
    name: '企业定制',
    img: new URL('@/assets/images/custom/2.png', import.meta.url).href,
    content: '您的企业移动广告牌 让您的企业形象无处不在',
  },
  {
    name: 'OEM生产定制',
    img: new URL('@/assets/images/custom/3.png', import.meta.url).href,
    content: '您的定制，您专属的尊贵',
  },
];

const boxList = [
  {
    name: '在线咨询',
    img: new URL('@/assets/images/custom/box1.png', import.meta.url).href,
    content: '确认需求',
  },
  {
    path: 'top',
  },
  {
    name: '提供素材',
    img: new URL('@/assets/images/custom/box1.png', import.meta.url).href,
    content: '免费设计',
  },
  {
    path: 'bottom',
  },
  {
    name: '在线咨询',
    img: new URL('@/assets/images/custom/box1.png', import.meta.url).href,
    content: '确认需求',
  },
  {
    path: 'top',
  },
  {
    name: '在线咨询',
    img: new URL('@/assets/images/custom/box1.png', import.meta.url).href,
    content: '确认需求',
  },
];

function Custom() {
  return (
    <div className={styles.custom_box}>
      <img
        className={styles.custom_banner}
        src={banner}
        alt="banner"
      />
      <Title
        title="定制水的类型"
        subTitle="CUSTOMIZED WATER TYPE"
      />

      <div className={styles.custom_content}>
        {list.map((item, index) => (
          <div
            key={index}
            className={styles.custom_content_item}>
            <img
              className={styles.custom_content_item_img}
              src={item.img}
            />
            <div className={styles.custom_content_item_wrapper}>
              <div className={styles.custom_content_item_name}>{item.name}</div>
              <div className={styles.custom_content_item_line}></div>
              <div className={styles.custom_content_item_content}>
                {item.content}
              </div>
            </div>
          </div>
        ))}
      </div>

      <Title
        title="定制水的好处"
        subTitle="BENEFITS OF CUSTOMIZ"
      />

      <div className={styles.content_flow_content}>
        <img src={flowImg} />
      </div>

      <Title
        title="定制水的流程"
        subTitle="CUSTOMIZED WATER PRO"
      />

      <div className={styles.content_flow}>
        {boxList.map((item, index) => {
          return (
            <>
              {item.path === 'top' && (
                <img
                  className={styles.content_flow_path_top}
                  src={pathImg}
                />
              )}
              {item.path === 'bottom' && (
                <img
                  className={styles.content_flow_path_bottom}
                  src={pathImg}
                />
              )}

              {!item.path && (
                <div
                  className={styles.content_flow_item}
                  key={index}>
                  <img
                    src={item.img}
                    className={styles.content_flow_img}
                  />
                  <div className={styles.content_flow_item_title}>
                    {item.name}
                  </div>
                  <div className={styles.content_flow_item_content}>
                    {item.content}
                  </div>
                </div>
              )}
            </>
          );
        })}
      </div>

      <div className={styles.my_buy}>我要定制</div>
    </div>
  );
}

export default Custom;
