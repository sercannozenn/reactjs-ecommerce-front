import { createBrowserRouter, RouterProvider } from 'react-router';
import MainLayout from '../layouts/MainLayout';
import Index from '../pages/Index';
import About from '../pages/About';
import ProductList from '../pages/ProductList';
import ProductDetail from '../pages/ProductDetail';

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { index: true, element: <Index /> },
            { path: "about", element: <About /> },
            { path: "urun-listesi", element: <ProductList /> },
            { path: "urun-detay", element: <ProductDetail /> },
        ],
    },
]);
function AppRouter(){
    return <RouterProvider router={ router } />;
}

export default AppRouter;