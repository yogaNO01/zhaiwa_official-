import Title from '@/components/Title';
import styles from './index.module.less';
import SubTitle from '@/components/SubTitle';
import Article from '@/components/Article';
import productArticleImg1 from '@/assets/images/product1/product_article_1.png';
import productArticleImg2 from '@/assets/images/product1/product_article_2.png';

const list = [
  {
    name: '自来水',
    content:
      '这生命之泉的便捷礼赞，常被誉为安全的液体琼浆，却潜藏着二次污着染的隐忧。岁月侵蚀下的水管，不免让重金属的浓度逾越安全边界；而某些净水工序中，二氧化氯的过量使用，也令水质纯净的背后添上一抹风险。煮沸饮用，成为一道不可或缺的安全锁',
    img: new URL('@/assets/images/product1/product1_1.png', import.meta.url)
      .href,
  },
  {
    name: '纯净水',
    content:
      '它那过度筛选的清澈里，既滤除了有害物质，亦剥夺了生命所需的矿物质与微量元素被界定为低渗透水的它，可能扰乱体液和细胞间的渗透压平衡，正如海外医学研究所述：缺乏矿物质的水，不啻于营养之河的流失，对于营养摄取与新陈代谢皆非善策。故此，长期饮用，实属不宜',
    img: new URL('@/assets/images/product1/product1_2.png', import.meta.url)
      .href,
  },
  {
    name: '地下矿泉水',
    content:
      '自然馈赠中的珍稀甘露，蕴含人体所需之微量物质及矿物质钙镁钠等，元素或丰富或适中，塑造了各异其趣的口感。然而，它的珍贵不适宜以沸腾来破坏，应保持其原始韵味。遗憾的是，城市化的脚步往往带来污染，部分地下水源亦难逃此劫',
    img: new URL('@/assets/images/product1/product1_3.png', import.meta.url)
      .href,
  },
  {
    name: '矿物质水',
    content:
      '人工智慧的产物，其中添加的微量元素旨在营造更佳的味觉享受。然而这些矿物质以非离子形态存在水中，使得人体对其吸收不甚理想，仅停留在舌尖之上的美好，难以真正滋养身躯',
    img: new URL('@/assets/images/product1/product1_4.png', import.meta.url)
      .href,
  },
];

function Product1() {
  return (
    <div className={styles.content_product_box}>
      <Title
        title="山泉水与其他水的区别"
        subTitle="THE DIFFERENCE"
      />

      <div className={styles.content_product_wrapper}>
        {list.map((item) => {
          return (
            <div
              className={styles.content_product_item}
              key={item.name}>
              <img
                className={styles.content_product_img}
                src={item.img}
                loading="lazy"
              />
              <SubTitle title={item.name} />
              <div className={styles.content_product_item_content}>
                {item.content}
              </div>
            </div>
          );
        })}
      </div>

      <Title
        title="山泉水的优势"
        subTitle="ADVANTAGE"
      />

      <div style={{ marginBottom: '141px' }}>
        <Article
          imgDirection="left"
          imgSrc={productArticleImg1}
          subTitle="山泉水的特性"
          btnText="了解详情">
          <div className={styles.about_text}>
            山泉水，大自然的恩赐，富含种种人体所需之矿物质与微量元素。在山泉的润泽中，润泽中，矿物元素以生物可利用的离子形态存在，更易被人体欣然接纳，其速度胜过食补。未经污染的涌泉，无需过度消毒，故无害物质残留。山泉之水，受海拔落差之力，形成天然弱碱、小分子团、活性充盈，饱含氧离子，使得人体细胞更易于汲饮。
          </div>
          <div className={styles.about_text}>
            偏硅酸是人体所需的一种珍稀微量元素，仅存于地表和山泉水中，无法人工合成被誉为水中软黄金。它在皮肤与结缔组织中演绎着重要的角色，助力血管恢复弹性，净化沉积脂肪，保卫心脑血管系统的健康。缺乏偏硅酸，心脑血管便易受损，招致动脉硬化、冠心病等疾病的威胁。德国、日本、韩国、美国等国将偏硅酸尊为“救命硅素”，昭示着它对生命的深远意义。
          </div>
        </Article>
      </div>

      <Article
        imgSrc={productArticleImg2}
        subTitle="寨娃天然山泉水">
        <div className={styles.about_text}>
          水源地，来自大别山腹地的的“中国长寿之乡“金寨县境内的范家洞（也称仙人洞），仙人洞），是集钙、镁、锌、硒、偏硅酸、低钠、弱碱性、小分子团、无污染这些优势于一体，无限接近完美的健康饮用水。正如我们瓶身所示，“来自长寿之乡的礼物”。寨娃山泉源自大别山腹地，中国长寿之乡，在安徽省金寨县境内。这里被誉为华东最后一片原始森林。地质年代诞生于震旦纪，距今约6亿年左右，自古以来，这里就是动植物的天堂，李时珍本草纲目里的《西山药库》就是这片广袤富饶的土地。这里空气含氧量极高，是名副其实的天然的氧吧。同时也在神奇的北纬31°。这里优越的生态环境和地质条件使得这里变得与众不同。
        </div>
        <div className={styles.about_text}>
          这里盛产灵芝，石斛、天麻、茯苓、绿茶等珍贵珍稀药食材！尤以灵芝古代（古称为仙草为最，灵芝对生态成长的环境要求极高，这里灵芝和灵芝制品交易量占全国的第一。被誉为“中国林芝之都”。这一切大自然的恩赐，孕育了寨娃山泉极致好水的天然条件。
        </div>
      </Article>

      <div className={styles.my_buy}>我要购买</div>
    </div>
  );
}

export default Product1;
