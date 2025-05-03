import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import './assets/css/index.css'
import './assets/css/bootstrap5_additions.css'
import AppRouter from "./router/Router.tsx";
import {useGetSettingsQuery} from "./api/services/SettingsCacheService.ts";
import {useEffect} from "react";
function App() {
    const { data: settings = {} } = useGetSettingsQuery();
    useEffect(() => {
        if (settings['favicon']) {
            const link = document.querySelector("link[rel*='icon']") as HTMLLinkElement || document.createElement('link') as HTMLLinkElement;
            link.type = 'image/x-icon';
            link.rel = 'icon';
            link.href = settings['favicon'];
            document.getElementsByTagName('head')[0].appendChild(link);
        }
    }, [settings]);
    return (
        <AppRouter/>
    )
}

export default App
