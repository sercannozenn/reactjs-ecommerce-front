import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from './routes';
import MainLayout from '../layouts/MainLayout';
import ProtectedRoute from './ProtectedRoute';

const getLayoutComponent = (layout: string, element: React.ReactElement, isProtected: boolean) => {
    const wrapped = isProtected ? <ProtectedRoute>{element}</ProtectedRoute> : element;

    switch (layout) {
        case 'main':
        default:
            return <MainLayout>{wrapped}</MainLayout>;
    }
};

const router = createBrowserRouter(
    routes.map(route => ({
        path: route.path,
        element: getLayoutComponent(route.layout, route.element, route.protected),
    }))
);

const AppRouter = () => <RouterProvider router={router} />;
export default AppRouter;
