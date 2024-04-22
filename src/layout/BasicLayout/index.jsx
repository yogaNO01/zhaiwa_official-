import { useRoutes } from 'react-router-dom';
import routes from '@/routes';
import { ConfigProvider, App } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import Footer from '@/components/Footer';
import BackTop from '@/components/BackTop';
import { useEffect } from 'react';

function BasicLayout() {
  const elements = useRoutes(routes);

  useEffect(() => {
    routes.forEach((item) => {
      if (item.path === location.pathname) {
        window.document.title = `${item.title} - 寨娃山泉`;
      }
    });
  }, [location.pathname]);

  return (
    <>
      <ConfigProvider
        locale={zhCN}
        theme={{ token: { colorPrimary: '#0B58AA' } }}>
        <App>
          {elements}
          <Footer />
          <BackTop />
        </App>
      </ConfigProvider>
    </>
  );
}

export default BasicLayout;
