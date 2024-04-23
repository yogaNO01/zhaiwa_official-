import styles from "./index.module.less";
import aboutImg from "@/assets/images/about/about.png";
import SubTitle from "@/components/SubTitle";
import AboutBanner from "@/components/AboutBanner";
import aboutBoxFeatures from "@/assets/images/about/about_box_features.png";
import Article from "@/components/Article";

function About() {
  return (
    <>
      <div className={styles.about_wrapper}>
        <Article imgSrc={aboutImg} subTitle="寨娃山泉" btnText="了解详情">
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
        </Article>

        <AboutBanner />

        <div className={styles.about_box_features}>
          <img
            loading="lazy"
            src={aboutBoxFeatures}
            alt="aboutBoxFeatures"
            className={styles.about_features_img}
          />
          <div className={styles.about_features_content}>
            <SubTitle title="寨娃山泉的特点" />

            <div className={styles.about_text}>
              在陆羽所著的《茶经》中，有一句流传千古的箴言：“山水为上，江水次之，井水最下”。陆羽，
              唐代的茶圣（公元733年—804年），其对水质的高下划分，虽未借助现代科技的精密检测设备，却凭借深邃的观察与品鉴经验，洞察出山泉之水乃沏茶之上选。那么，何以高山流水能获此殊荣呢？以下几点是普遍受到认可的解释：
            </div>

            <div className={styles.about_text}>
              <span className={styles.about_features_title}>活性水</span>
              ：高山泉水，因不断地流动与冲击，形成了天然的小分子团结构，恰如国人所倡导的“活水养人”，其活力之盛，实非寻常之水可比拟。
            </div>
            <div className={styles.about_text}>
              <span className={styles.about_features_title}>高溶解氧含量</span>
              ：在崇山峻岭之间，瀑布飞流直下，不仅展现了大自然的雄浑壮丽，更在无形中将丰富的负氧离子溶入水中，赋予了高山泉水以独特的清新与生机。
            </div>
            <div className={styles.about_text}>
              <span className={styles.about_features_title}>
                矿物质微量元素
              </span>
              ：高山泉水自岩层深处滤溶而出，自然携带了人体必需的矿物质微量元素，其含量恰到好处，既滋养人体又避免过量。不同于低海拔地区易受污染的地下水，高山自涌泉水清纯无暇，更适合长期饮用。正如古人云：“水质纯净则茶香远扬”，高山泉水以其天然、清新、纯净的特质，成为沏茶用水的上佳选择，亦是养生之道的精妙所在。
            </div>
          </div>
        </div>
      </div>
      <div className={styles.about_container}>
        <div className={styles.top}>
          <div className={styles.about_text}>关于寨娃</div>
          <div className={styles.about_line}>—————— About us ——————</div>
        </div>
        <image alt="about_image" />
        <div className={styles.detail}>
          <div className={styles.title}>寨娃山泉</div>
          <p>
            寨娃山泉，源自神秘广袤的大别山脉腹地，中国的长寿之乡——安徽省金寨县。这里被誉为华东最后一片原始森林，静谧而古老，自震旦纪以来，约六亿年的风雨兼程。这里的一叶一石都记载着生命的传奇。李时珍那部载满智慧结晶的《本草纲目》，将此地誉为“西山药库”，无疑昭示其丰饶与珍贵。
          </p>
          <p>
            此地的空气，纯净若初，含氧量极高，名副其实的天然的氧吧，更奇妙的是，这里恰好位于神秘莫测的北纬31°，仿佛天地灵气在此交织出一处神奇的存在。得益于得天独厚的生态环境与地质，使得寨娃山泉之地卓然。
          </p>
          <div className={styles.button}>
            <span>了解详情</span>
            <image alt="about_image"></image>
          </div>
        </div>
        <AboutBanner />
        <div className={styles.detail}>
          <div className={styles.title}>寨娃山泉的特点</div>
          <p>
            在陆羽所著的《茶经》中，有一句流传千古的箴言：山水为上，江水次之，井水最下。陆羽，唐代的茶圣（公元733年—804年），其对水质的高下划分，虽未借助现代科技的精密检测设备，却凭借深邃的观察与品鉴经验，洞察出山泉之水乃沏茶之上选。那么，何以高山流水能获此殊荣呢？以下几点是普遍受到认可的解释：
          </p>
          <p>
            <div className={styles.brief}>活性水：</div>
            高山泉水，因不断地流动与冲击，形成了天然的小分子团结构，恰如国人所倡导的“活水养人”，其活力之盛，实非寻常之水可比拟。
          </p>
          <p>
            <div className={styles.brief}>高溶解氧含量：</div>
            在崇山峻岭之间，瀑布飞流直下，不仅展现了大自然的雄浑壮丽，更在无形中将丰富的负氧离子溶入水中，赋予了高山泉水以独特的清新与生机。
          </p>
          <p>
            <div className={styles.brief}>矿物质微量元素：</div>
            高山泉水自岩层深处滤溶而出自然携带了人体必需的矿物质微量元素，其含量恰到好处，既滋养人体又避免过量。不同于低海拔地区易受污染的地下水，高山自涌泉水清纯无暇，更适合长期饮用。正如古人云：“水质纯净则茶香远扬”，高山泉水以其天然、清新、纯净的特质，成为沏茶用水的上佳选择，亦是养生之道的精妙所在。
          </p>
        </div>
        <div className={styles.about_box_features}>
          <image alt="aboutBoxFeatures" />
          <div className={styles.top}>
            <div className={styles.about_text}>山泉水与其他水的区别</div>
            <div className={styles.about_line}>—————— THE DIFERENCE ——————</div>
          </div>
          <image className={styles.image1}></image>
        </div>
      </div>
    </>
  );
}

export default About;
