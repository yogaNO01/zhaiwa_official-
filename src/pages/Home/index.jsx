import Banner from '@/components/Banner';
import About from '@/components/About';
import Product1 from '@/components/Product1';
import Product2 from '@/components/Product2';
import Custom from '@/components/Custom';
import PublicWelfare from '@/components/PublicWelfare';
import BuyMethod from '@/components/BuyMethod';
import News from '@/components/News';
import Contact from '@/components/Contact';
import Cooperation from '@/components/Cooperation';

import LOGO from '@/assets/images/logo.png';
import { Divider, Affix, Anchor } from 'antd';
import styles from './index.module.less';

const menuItems = [
  { title: '首页', key: 'home', href: '#home' },
  { title: '关于寨娃', key: 'about', href: '#about' },
  { title: '寨娃山泉', key: 'project_1', href: '#project_1' },
  { title: '寨娃氢泉', key: 'project_2', href: '#project_2' },
  { title: '公益事业', key: 'public_welfare', href: '#public_welfare' },
  { title: '定制水', key: 'custom', href: '#custom' },
  { title: '购买方式', key: 'buy_method', href: '#buy_method' },
  { title: '寨娃新闻', key: 'news', href: '#news' },
  { title: '联系我们', key: 'contact', href: '#contact' },
];

function Home() {
  return (
    <div className={styles.home}>
      <Affix offsetTop={0}>
        <header className={styles.header_wrapper}>
          <div className={styles.header_content}>
            <div className={styles.logo}>
              <img
                className={styles.logo_img}
                src={LOGO}
                alt="logo"
                loading="lazy"
              />
              <Divider type="vertical" />
            </div>
            <Anchor
              targetOffset={80}
              direction="horizontal"
              items={menuItems}
            />
          </div>
        </header>
      </Affix>

      <div id="home">
        <Banner />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="project_1">
        <Product1 />
      </div>

      <div id="project_2">
        <Product2 />
      </div>

      <div id="custom">
        <Custom />
      </div>

      <div id="public_welfare">
        <PublicWelfare />
      </div>

      <Cooperation />

      <div id="buy_method">
        <BuyMethod />
      </div>

      <div id="news">
        <News />
      </div>

      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default Home;
