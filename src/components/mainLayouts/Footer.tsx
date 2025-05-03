import {useGetSettingsQuery} from "../../api/services/SettingsCacheService.ts";

const Footer = () => {
    const { data: settings = {} } = useGetSettingsQuery();

    return (
        <footer className="custom-footer mt-5">
            <div className="container">
                <div className="row">
                    {/* Hakkımızda */}
                    <div className="col-md-3">
                        <h5>Kermes Hakkında</h5>
                        <p>
                            Bu platform, çeşitli ürünlerin satışını desteklemek ve kermes etkinliklerimizi duyurmak için tasarlanmıştır. Tüm gelirler, hayır projelerine aktarılmaktadır.
                        </p>
                    </div>
                    <div className="col-8 ms-lg-auto mt-3 mt-md-auto">
                        <div className="row">
                            <div className="col-md-4">
                                <h5>Hızlı Erişim</h5>
                                <ul className="quick-links">
                                    <li>
                                        <a href="/about">Hakkımızda</a>
                                    </li>
                                    <li>
                                        <a href="/contact">İletişim</a>
                                    </li>
                                    <li>
                                        <a href="/products">Ürünlerimiz</a>
                                    </li>
                                    <li>
                                        <a href="/support">Destek Olun</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <h5>Hızlı Erişim</h5>
                                <ul className="quick-links">
                                    <li>
                                        <a href="/about">Hakkımızda</a>
                                    </li>
                                    <li>
                                        <a href="/contact">İletişim</a>
                                    </li>
                                    <li>
                                        <a href="/products">Ürünlerimiz</a>
                                    </li>
                                    <li>
                                        <a href="/support">Destek Olun</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <h5>Hızlı Erişim</h5>
                                <ul className="quick-links">
                                    <li>
                                        <a href="/about">Hakkımızda</a>
                                    </li>
                                    <li>
                                        <a href="/contact">İletişim</a>
                                    </li>
                                    <li>
                                        <a href="/products">Ürünlerimiz</a>
                                    </li>
                                    <li>
                                        <a href="/support">Destek Olun</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Copyright */}
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} <span dangerouslySetInnerHTML={{__html: settings['footer_text'] ?? ''}}></span></p>
                    <div className="social-icons">
                        <a href={settings['facebook_link']} target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-facebook"></i>
                        </a>
                        <a href={settings['instagram_link']} target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-instagram"></i>
                        </a>
                        <a href={settings['twitter_x_link']} target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-twitter"></i>
                        </a>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
