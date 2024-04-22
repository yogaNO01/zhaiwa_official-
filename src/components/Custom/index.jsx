import styles from './index.module.less';
import customHeader from '@/assets/images/custom/header.png';
import SubTitle from '@/components/SubTitle';
import CustomArticle from '@/components/CustomArticle';
import customArticleLeft from '@/assets/images/custom/article_left.png';
import customArticleImg from '@/assets/images/custom/article.png';

import customFooter from '@/assets/images/custom/footer.png';

function Server() {
  return (
    <div className={styles.content_server_box}>
      <div className={styles.header}>
        <img
          src={customHeader}
          alt="header"
        />
        <div className={styles.text_box}>
          <h1>我们的技术</h1>
          <p>每一个员工的坚守，成就了寨娃十年不变的品质</p>
        </div>
      </div>

      <div className={styles.content_server_article}>
        <div className={styles.content_server_article_left}>
          <SubTitle title="国内外领先的纳滤技术和生产工艺" />
          <p>
            锁氢技术和氨含量通过国内权威机构检测，可达1880-2880PlA+，在同类产品中领先的含氢指数，
            产品中领先的含氢指数，都在确保每一滴寨娃氢泉的卓越品质，纳滤技术是从反渗透技术中分离出来的一种膜分离技术，是超低压反渗透技术的延续和发展分支。
          </p>
        </div>
        <div className={styles.content_server_article_right}>
          <p>
            一般认为，纳滤膜存在着纳米级的细孔，且截留率大于95%的最小分子约为1nm，所以近几年来这种膜分离技术被命名为:Nanofiltration，简称:NF，中文译为:纳滤。在过去的很长一段时间里，纳滤膜被称为超低压反渗透膜，或称选择性反渗透膜或松散反渗透膜(LooseRO:LooseReverseOsmosis)。日本学者大谷敏郎曾对纳滤膜的分离性能进行了具体的定义:操作压力≤1.50mPa，截留分子…
          </p>
        </div>
      </div>

      <div className={styles.content_server_article_image}>
        <img
          className={styles.content_server_article_img}
          src={customArticleImg}
          alt="article"
        />

        <CustomArticle
          imgDirection="left"
          imgSrc={customArticleLeft}
          subTitle="先进的罐装生产线和领先的锁氢技术">
          <div className={styles.about_text}>
            寨娃山泉，源自神秘广袤的大别山脉腹地，中国的长寿之乡——
            安徽省金寨县。这里被誉为华东最后一片原始森林，静谧而古老，自震旦纪以来，约六亿年的风雨兼程。这里的一叶一石都记载着生命的传奇。李时珍那部载满智慧结晶的《本草纲目》，将此地誉为“西山药库”，无疑昭示其丰饶与珍贵。
          </div>
          <div className={styles.about_text}>
            此地的空气，纯净若初，含氧量极高，名副其实的天然的氧吧。更奇妙的是，这里恰好位于神秘莫测的北纬31°，仿佛天地灵气在此交织出一处神奇的存在。得益于得天独厚的生态环境与地质，使得寨娃山泉之地卓然。
          </div>
          <div className={styles.about_text}>
            寨娃山泉，便是这大自然的馈赠、山水的精华，每一滴都承载着大地的灵魂，每一瓶都是至臻至美的恩泽。
          </div>
        </CustomArticle>
      </div>

      <div className={styles.content_server_article_footer}>
        <img
          src={customFooter}
          alt="article"
        />
        <div className={styles.content_server_article_footer_wrapper}>
          <div className={styles.footer_title1}>喝寨娃富氢水</div>
          <div className={styles.footer_title2}>做健康中国人</div>
          <div className={styles.footer_text}>
            保健您的血脂血压、、血糖肝脏、美容炎症、尿酸自由基...
          </div>
        </div>
      </div>

      <div className={styles.my_buy}>我要购买</div>
    </div>
  );
}

export default Server;
