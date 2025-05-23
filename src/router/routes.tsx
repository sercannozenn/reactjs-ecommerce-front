import { lazy } from 'react';
import About from "../pages/About.tsx";
import ProductList from "../pages/ProductList.tsx";
import ProductDetail from "../pages/ProductDetail.tsx";
import AnnouncementAll from "../pages/AnnouncementAll.tsx";
import AnnouncementDetail from "../pages/AnnouncementDetail.tsx";


const Index = lazy(() => import('../pages/Index'));

const routes = [
    {
        path: '/',
        name: 'Index',
        element: <Index />,
        layout: 'main',
        protected: false
    },
    {
        path: '/hakkimizda',
        name: 'About',
        element: <About />,
        layout: 'main',
        protected: false
    },
    {
        path: '/urun-listesi',
        name: 'ProductList',
        element: <ProductList />,
        layout: 'main',
        protected: false
    },
    {
        path: '/urun/:slug',
        name: 'ProductDetail',
        element: <ProductDetail />,
        layout: 'main',
        protected: false
    },
    {
        path: '/urun-detay',
        name: 'ProductDetail',
        element: <ProductDetail />,
        layout: 'main',
        protected: false
    },
    {
        path: '/duyurular',
        name: 'AnnouncementAll',
        element: <AnnouncementAll />,
        layout: 'main',
        protected: false
    },
    {
        path: '/duyurular/:id',
        name: 'AnnouncementDetail',
        element: <AnnouncementDetail />,
        layout: 'main',
        protected: false
    },


];


export default routes;
