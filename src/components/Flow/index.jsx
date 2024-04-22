import Title from "@/components/Title";
import styles from "./index.module.less";
import { Row, Col } from "antd";

const list = [
  {
    name: "电话咨询",
    desc: "进入绿工匠小程序/官网 进行电话咨询",
    img: new URL("@/assets/images/flow/flow1.png", import.meta.url).href,
  },
  {
    name: "盆栽选择",
    desc: "进入绿工匠小程序/官网 咨询下单盆栽",
    img: new URL("@/assets/images/flow/flow2.png", import.meta.url).href,
  },
  {
    name: "上门勘探",
    desc: "咨询后需要上门勘探 可免费上门",
    img: new URL("@/assets/images/flow/flow3.png", import.meta.url).href,
  },
  {
    name: "运输输送",
    desc: "盆栽下单后平台送货 上门进行摆放",
    img: new URL("@/assets/images/flow/flow4.png", import.meta.url).href,
  },
  {
    name: "定期养护",
    desc: "每周至少一次专业养护 人员上门定期养护",
    img: new URL("@/assets/images/flow/flow5.png", import.meta.url).href,
  },
  {
    name: "后期维护",
    desc: "后期任何绿植相关问题联系客服",
    img: new URL("@/assets/images/flow/flow6.png", import.meta.url).href,
  },
];

function Flow() {
  return (
    <div className={styles.flow_wrapper}>
      <Title
        title="我们的服务流程"
        subTitle="设计、运输、摆放、养护一站式服务"
      />
      <div className={styles.flow_box}>
        <Row gutter={[20, 20]}>
          {list.map((item, index) => {
            return (
              <Col span={4} key={index}>
                <div className={styles.flow_item}>
                  <img
                    loading="lazy"
                    className={styles.flow_item_img}
                    src={item.img}
                    alt={item.name}
                  />
                  <div className={styles.flow_item_name}>{item.name}</div>
                  <div className={styles.flow_item_desc}>{item.desc}</div>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}

export default Flow;
