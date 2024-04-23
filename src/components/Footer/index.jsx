import styles from './index.module.less';

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_banner}>
        <div className={styles.footer_banner_wrapper}>
          <div className={styles.footer_banner_title}>
            居长寿之乡，做极致好水！
          </div>
          <div className={styles.footer_banner_sub_title}>
            {' '}
            寨娃山泉感谢您的关注！{' '}
          </div>
        </div>
      </div>

      <div className={styles.footer_wrapper}>
        <div className={styles.footer_box}>
          <div className={styles.footer_box_top}>寨娃矿泉水</div>
          <div className={styles.footer_box_wrapper}>
            <div className={styles.footer_box_wrapper_about}>
              <div className={styles.footer_box_wrapper_title}>关于寨娃</div>
              <div className={styles.footer_box_wrapper_title}>购买方式</div>
              <div className={styles.footer_box_wrapper_sub_title}>京东</div>
            </div>
            <div className={styles.footer_box_wrapper_contact}>
              <div className={styles.footer_box_wrapper_title}>联系我们</div>
              <div className={styles.footer_box_wrapper_sub_title}>
                生产基地：安徽省金寨县全军乡沙河店村大寨寨娃山泉
              </div>
              <div className={styles.footer_box_wrapper_sub_title}>
                公司地址：上海市闵行区联航路1818号4号别墅1楼
              </div>
              <div className={styles.footer_box_wrapper_sub_title}>
                服务电话：4000011038
              </div>
              <div className={styles.footer_box_wrapper_sub_title}>
                传 真：0564-7166999
              </div>
            </div>
            <div className={styles.footer_box_wrapper_qrcode}>
              <img
                src={
                  new URL('@/assets/images/footer/qrcode1.png', import.meta.url)
                    .href
                }
                alt="qrcode"
              />
              <img
                src={
                  new URL('@/assets/images/footer/qrcode2.png', import.meta.url)
                }
                alt="qrcode"
              />
            </div>
          </div>
          <div className={styles.footer_box_bottom}>
            <div>
              <a
                href="https://beian.miit.gov.cn/#/Integrated/recordQuery"
                target="_blank"
                rel="noreferrer">
                沪ICP备2023031436号-1
              </a>
              技术支持：成都深眯科技
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
