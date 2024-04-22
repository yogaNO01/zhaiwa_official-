import styles from './index.module.less';
import Title from '@/components/Title';
import { Pagination } from 'antd';

const newsList = [
  {
    name: '慈善是我们一辈子矢志不移的选择',
    time: '2024.02.29',
    img: new URL('@/assets/images/news/news1.png', import.meta.url).href,
  },
  {
    name: '新年在即,我们和众善协会的伙伴们步行在探望的路上',
    time: '2024.02.29',
    img: new URL('@/assets/images/news/news2.png', import.meta.url).href,
  },
  {
    name: '鲜花小学是我们一直都牵挂',
    time: '2024.02.29',
    img: new URL('@/assets/images/news/news3.png', import.meta.url).href,
  },
];

function News() {
  return (
    <div className={styles.news}>
      <Title
        title="寨娃新闻"
        subTitle="ZHAI WA NEWS"
      />
      <div className={styles.news_list}>
        {newsList.map((item, index) => {
          return (
            <div
              className={styles.news_item}
              key={index}>
              <img
                src={item.img}
                alt=""
                className={styles.news_item_img}
              />
              <h3 className={styles.news_name}>{item.name}</h3>
              <div className={styles.news_item_content}>
                <p className={styles.news_item_time}>{item.time}</p>
                <p className={styles.news_item_more}>查看更多</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.news_pagination}>
        <Pagination
          total={85}
          showTotal={(total) => `共 ${total} 条`}
          defaultPageSize={20}
          defaultCurrent={1}
        />
      </div>
    </div>
  );
}

export default News;
