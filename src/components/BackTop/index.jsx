import { Button } from "antd";
import { ArrowUpOutlined } from "@ant-design/icons";
import styles from "./index.module.less";
import { useState } from "react";
import { useEffect } from "react";

function BackTop() {
  const [showBackTop, setShowBackTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      setShowBackTop(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleBackTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(handleBackTop);
      window.scrollTo(0, c - c / 8);
    }
  };

  return (
    <>
      {showBackTop && (
        <div className={styles.back_top} onClick={handleBackTop}>
          <Button type="primary" shape="circle" icon={<ArrowUpOutlined />} />
        </div>
      )}
    </>
  );
}

export default BackTop;
