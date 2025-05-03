import Header from "../components/mainLayouts/Header.tsx";
import Footer from "../components/mainLayouts/Footer.tsx";
import {TbBrandWhatsapp} from "react-icons/tb";
import React from 'react';
import {Outlet} from "react-router-dom";
import {useGetSettingsQuery} from "../api/services/SettingsCacheService.ts";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    const { data: settings = {} } = useGetSettingsQuery();
    const whatAppHref = `https://wa.me/9${settings['whatsapp_number'] ?? ''}?text=${settings['whatsapp_hello_message'] ?? ''}`;
    return (
        <div>
            <Header/>
            <main>{children || <Outlet/>}</main>
            <Footer/>
            <a
                href={whatAppHref}
                target="_blank"
                className="whatsapp-floating">
                <span className="whatsapp-icon"><TbBrandWhatsapp/></span> {settings['whatsapp_text'] ?? ''}
            </a>
        </div>
    );
};

export default MainLayout;
