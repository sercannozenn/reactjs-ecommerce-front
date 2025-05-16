import routes from "./routes.tsx";

export const route = (name: string, params?: Record<string, any>): string => {

    const route = routes.find((r) => r.name === name);

    if (!route) {
        throw new Error(`Route with name "${name}" not found.`);
    }

    let path = route.path;

    // Parametreleri URL içine yerleştir
    if (params) {
        Object.keys(params).forEach((key) => {
            path = path.replace(`:${key}`, String(params[key]));
        });
    }

    return path;
};

export const useRouteNavigator = () => {
    const navigateToRoute = (name: string, params?: Record<string, any>): void => {
        const route = routes.find((r) => r.name === name);

        if (!route) {
            throw new Error(`Route with name "${name}" not found.`);
        }

        let path = route.path;
        const queryParams: Record<string, any> = {};

        // Parametreleri URL içine yerleştir
        if (params) {
            Object.keys(params).forEach((key) => {
                if (path.includes(`:${key}`)) {
                    path = path.replace(`:${key}`, String(params[key]));
                } else {
                    queryParams[key] = params[key];
                }
            });
        }
        const queryString = new URLSearchParams(queryParams).toString();
        const fullPath = queryString ? `${path}?${queryString}` : path;

        // Yönlendirme işlemi
        window.location.href = fullPath; // veya başka bir yönlendirme yöntemi
    };

    return navigateToRoute;
};
