import Header from "../components/mainLayouts/Header.tsx";
import Footer from "../components/mainLayouts/Footer.tsx";

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout = (props: MainLayoutProps) => {
    return (
        <div>
            <Header/>
            <main>{props.children}</main>
            <Footer/>
        </div>
    );
};

export default MainLayout;
