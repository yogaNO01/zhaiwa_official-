import styles from './index.module.less';
import productHeader from '@/assets/images/product2/product_header.png';
import productArticleImg from '@/assets/images/product2/product_article_img.png';
import SubTitle from '@/components/SubTitle';
import Title from '@/components/Title';
import CustomArticle from '@/components/CustomArticle';

import customHeader from '@/assets/images/product2/header.png';
import customArticleLeft from '@/assets/images/product2/article_left.png';
import customArticleImg from '@/assets/images/product2/article.png';
import customFooter from '@/assets/images/product2/footer.png';

const cardList = [
  {
    title: '01 抗自由基',
    content:
      '在太田成男教授2007年发表的文章中，氢气可以在细胞实验中减少•OH1。由于•OH是很多自由基连锁反应的主要触发器，这种连锁反应一旦发生在生物膜上就会继续并扩大，对细胞造成严重的损伤。氢气更容易富集在脂…',
    img: new URL('@/assets/images/product2/card_1.png', import.meta.url).href,
  },
  {
    title: '02 氢和抗氧化',
    content:
      '氢气作为一种抗氧化剂，和其他抗氧化剂的特点不一样，一是这种分子非常小，有非常强的扩散能力，这也决定了氢气产生效应的潜力更大。二是氢气能在不影响氧化还原平的基础上减少氧化损伤，这也是抗氧化的根本…',
    img: new URL('@/assets/images/product2/card_2.png', import.meta.url).href,
  },
  {
    title: '03 氢和癌症',
    content:
      '氢是自然界最轻元素，并且是一种理想的抗氧化剂，可以选择性地减少组织中的有害活性氧（ROS）1975年美国学者就发现氢气具有治疗皮肤癌的作用，近年来低剂量氢气效应发现后，关于氢气预防和治疗癌症的研究也逐…',
    img: new URL('@/assets/images/product2/card_3.png', import.meta.url).href,
  },
  {
    title: '04 氢和高血压、高血脂 高血糖、高尿酸',
    content:
      '采用随机对照双盲法,将确诊为高尿酸血症的男性患者分为试验组和对照组。试验组:生活方式干预配合服用溶解了氢气的水(浓度为1.0~1.5毫升/升)调理,每次200毫升,每日3次;对照组:生活方式干预配合服用不加氢气的安慰…',
    img: new URL('@/assets/images/product2/card_4.png', import.meta.url).href,
  },
];

function Product2() {
  return (
    <>
      <div className={styles.content_product_box}>
        <img
          className={styles.content_product_header_img}
          src={productHeader}
          alt="productHeader"
        />

        <div className={styles.content_product_article}>
          <SubTitle title="寨娃氢泉" />
          <div className={styles.content_product_article_content}>
            <p>
              2007年，瑞士巴塞尔大学生命中心研究所研究员，自治医科大学讲师、副教授，日本线粒体研究最著名的科学家太田成男教授Dr.
              Shigeo
              Ohta，PhD在国际著名医学杂志《自然医学》上发表关于氢气缓解缺血再灌注损伤的研究，并提出氢气选择性抗氧化的概念，以及陆续在氢生物医学领域发表SCI论文40余篇，证实氢气对脑缺血、肝脏放射损伤、肥胖、巴金森病的辅助作用，对氢在健康领域的论证和实验使用做出了重要的贡献。
            </p>
            <p>
              由此，氢开始更广泛的融入到现代人的生活之中，在大量关于氢制品和设备中，最有效常见的的补氢辅助方式之一为饮用水。寨娃氢泉就是采用“中国长寿之乡”的天然好水作为载体，水作为载体，将氢气通过科技手段融入山泉水中，从而确保富氢水的优质和科技属性。
            </p>
            <img
              src={productArticleImg}
              alt="productArticleImg"
            />
          </div>
        </div>

        <div className={styles.content_product_grid}>
          <Title
            title="氢和健康"
            subTitle="HYDROGEN AND HEALTH"
          />

          <div className={styles.content_product_grid_wrapper}>
            {cardList.map((item) => {
              return (
                <div
                  className={styles.card_box}
                  key={item.title}>
                  <div className={styles.card_title}>{item.title}</div>
                  <div className={styles.card_content}>{item.content}</div>
                  <img
                    loading="lazy"
                    src={item.img}
                    alt={`card_img`}
                    className={styles.card_img}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

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
    </>
  );
}

export default Product2;
