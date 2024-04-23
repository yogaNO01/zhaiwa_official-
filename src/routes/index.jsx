import { Navigate } from 'react-router-dom';
import { lazyLoad } from './LazyLoad';
import { lazy } from 'react';
import Error404 from '@/pages/404';
import Home from '@/pages/Home/index';

export default [
  {
    title: '首页',
    path: '/home',
    element: <Home />,
  },
  // {
  //   title: "关于",
  //   path: "/about",
  //   element: lazyLoad(lazy(() => import("@/pages/about"))),
  // },
  { path: '/', element: <Navigate to="/home" /> },
  {
    path: '*',
    element: <Navigate to="/404" />,
  },
  {
    path: '/404',
    element: <Error404 />,
  },
];
