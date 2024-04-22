import { Carousel, Row, Col } from 'antd';
import styles from './index.module.less';
import Title from '@/components/Title';
import addIcon from '@/assets/images/buyMethod/add.png';
import minusIcon from '@/assets/images/buyMethod/minus.png';
import { useState } from 'react';

function BuyMethod() {
  const handleCarouselChange = () => {};

  const [list, setList] = useState([
    {
      name: '别墅庭院-绿植养护项目',
      img: new URL('@/assets/images/buyMethod/H-1.png', import.meta.url).href,
      btnText: '350mlx24瓶',
      num: 0,
    },
    {
      name: '商场广场-绿植租赁项目',
      img: new URL('@/assets/images/buyMethod/H-2.png', import.meta.url).href,
      btnText: '550mlx24瓶',
      num: 0,
    },
    {
      name: '地产物业-绿植租赁项目',
      img: new URL('@/assets/images/buyMethod/H-3.png', import.meta.url).href,
      btnText: '550mlx12包',
      num: 0,
    },
  ]);

  const handleCalculate = (item, type) => {
    if (type === 'add') {
      item.num += 1;
    } else {
      item.num -= 1;
    }

    setList([...list]);
  };

  return (
    <div className={styles.content_case_box}>
      <Title
        title="购买方式"
        subTitle="METHOD OF PURCHASE"
      />

      <div className={styles.content_cast_title}>京东商城</div>

      {list && list.length ? (
        <div className={styles.content_case_container}>
          <Carousel
            autoplay
            afterChange={handleCarouselChange}>
            {[1, 2, 3].map((item, index) => {
              return (
                <div
                  key={index}
                  className={styles.content_case_wrapper}>
                  <Row gutter={[20, 20]}>
                    {list.map((item, index) => {
                      return (
                        <Col
                          span={8}
                          key={index}>
                          <div className={styles.content_case_item}>
                            <img
                              loading="lazy"
                              className={styles.content_case_img}
                              src={item.img}
                            />
                            <div className={styles.content_case_item_name}>
                              {item.name}
                            </div>

                            <div className={styles.content_case_item_btn}>
                              <span>{item.btnText}</span>
                              <div className={styles.operation}>
                                <img
                                  src={minusIcon}
                                  alt="减少"
                                  onClick={() => handleCalculate(item, 'minus')}
                                />
                                <span>{item.num}</span>
                                <img
                                  src={addIcon}
                                  alt="增加"
                                  onClick={() => handleCalculate(item, 'add')}
                                />
                                <span>箱</span>
                              </div>
                            </div>

                            <div className={styles.content_case_item_more}>
                              查看更多
                            </div>
                          </div>
                        </Col>
                      );
                    })}
                  </Row>
                </div>
              );
            })}
          </Carousel>
        </div>
      ) : null}
    </div>
  );
}

export default BuyMethod;
