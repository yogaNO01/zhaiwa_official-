import { Carousel } from 'antd';
import styles from './index.module.less';
import leftArrow from '@/assets/images/about/left_arrow.png';
import rightArrow from '@/assets/images/about/right_arrow.png';
import hrImg from '@/assets/images/about/hr.png';

const bannerList = [
  new URL('@/assets/images/about/s.mp4', import.meta.url).href,
  new URL('@/assets/images/about/s.mp4', import.meta.url).href,
];

import { useRef } from 'react';

function AboutBanner() {
  const carouselRef = useRef();

  const handleChangeBanner = (type) => {
    if (type === 'prev') {
      carouselRef.current.prev();
    } else {
      carouselRef.current.next();
    }
  };

  return (
    <Carousel
      effect="fade"
      ref={carouselRef}
      autoplay>
      {bannerList.map((item, index) => {
        return (
          <div
            className={styles.about_banner}
            key={index}>
            <video
              autoPlay
              loop
              muted
              playsInline
              className={styles.about_banner_video}
              src={item}
            />

            <div className={styles.about_banner_mark}>
              <img
                className={styles.about_banner_mark_img}
                src={leftArrow}
                alt="left-arrow"
                onClick={() => handleChangeBanner('prev')}
              />

              <div className={styles.about_banner_mark_text}>
                <div>寨娃山泉</div>
                <img
                  className={styles.about_banner_mark_hr}
                  src={hrImg}
                  alt="hr"
                />
                <p>亿万年地壳的等待</p>
                <p>只为在华东最后一片原始森林</p>
                <p>与你相见</p>
              </div>

              <img
                className={styles.about_banner_mark_img}
                src={rightArrow}
                alt="right-arrow"
                onClick={() => handleChangeBanner('next')}
              />
            </div>
          </div>
        );
      })}
    </Carousel>
  );
}

export default AboutBanner;
