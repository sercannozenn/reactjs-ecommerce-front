import Header from "../components/mainLayouts/Header.tsx";
import Footer from "../components/mainLayouts/Footer.tsx";
import {TbBrandWhatsapp} from "react-icons/tb";
import React from 'react';
import {Outlet} from "react-router-dom";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <Header/>
            <main>{children || <Outlet/>}</main>
            <Footer/>
            <a
                href="https://wa.me/905555555555?text=Merhaba, sizinle iletişime geçmek istiyorum."
                target="_blank"
                className="whatsapp-floating">
                <span className="whatsapp-icon"><TbBrandWhatsapp/></span> WhatsApp'tan Bize Ulaşın
            </a>
        </div>
    );
};

export default MainLayout;
