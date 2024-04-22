import { Navigate } from 'react-router-dom';
import { lazyLoad } from './LazyLoad';
import { lazy } from 'react';
import Error404 from '@/pages/404';

export default [
  {
    title: '首页',
    path: '/home',
    element: lazyLoad(lazy(() => import('@/pages/home'))),
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
