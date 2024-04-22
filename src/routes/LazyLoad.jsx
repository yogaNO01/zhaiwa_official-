import { Suspense } from "react";
import { Spin } from "antd";
/**
 * 组件懒加载，结合Suspense实现
 * @param Component 组件对象
 * @returns 返回新组件
 */
export const lazyLoad = (Component) => {
  return (
    <Suspense
      fallback={
        <Spin
          size="large"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "80vh",
          }}
        />
      }
    >
      <Component />
    </Suspense>
  );
};
