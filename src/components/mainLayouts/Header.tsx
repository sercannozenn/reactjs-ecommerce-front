import urun from '../../assets/images/urun1.webp';
import logo from '../../assets/images/logo.png';

function Header() {
    return (
        <>
            <div className="top-bar bg-black">
                <div className="container">
                    <div className="login float-end">
                        <ul className="login-list">
                            <li><a href="#" className="text-white">GİRİŞ</a></li>
                            <li><a href="#" className="text-white">KAYIT</a></li>
                            <li><a href="#" className="text-white">SEPETİM</a></li>
                            <li className="dropdown user-basket position-relative">
                                <a href="javascript:void(0)" className="dropdown-toggle position-relative" role="button"
                                   data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="bi bi-cart zoom text-white fs-4"></i>
                                    <span className="item-count bg-orange-bold text-black">13</span>
                                </a>
                                <div className="dropdown-menu">
                                    <div className="row overflow-custom">
                                        <div className="col-12">
                                            <div className="card border-0">
                                                <div className="row">
                                                    <div className="col-4">
                                                        <img src={urun} alt=""
                                                             className="img-fluid rounded-start"/>
                                                    </div>
                                                    <div className="col-8">
                                                        <div className="card-body">
                                                            <h5 className="card-title">Ürün Başlığı</h5>
                                                            <p className="card-text">Fiyat: 10 TL</p>
                                                            <p className="card-text">Adet: 1</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <hr className="my-4"/>
                                        </div>


                                        <div className="col-12">
                                            <div className="card border-0">
                                                <div className="row">
                                                    <div className="col-4">
                                                        <img src={urun} alt=""
                                                             className="img-fluid rounded-start"/>
                                                    </div>
                                                    <div className="col-8">
                                                        <div className="card-body">
                                                            <h5 className="card-title">Ürün Başlığı</h5>
                                                            <p className="card-text">Fiyat: 10 TL</p>
                                                            <p className="card-text">Adet: 1</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <hr className="my-4"/>
                                        </div>


                                        <div className="col-12">
                                            <div className="card border-0">
                                                <div className="row">
                                                    <div className="col-4">
                                                        <img src={urun} alt=""
                                                             className="img-fluid rounded-start"/>
                                                    </div>
                                                    <div className="col-8">
                                                        <div className="card-body">
                                                            <h5 className="card-title">Ürün Başlığı</h5>
                                                            <p className="card-text">Fiyat: 10 TL</p>
                                                            <p className="card-text">Adet: 1</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <hr className="my-4"/>
                                        </div>
                                    </div>
                                    <div className="row total-price">
                                        <div className="col-12">
                                            <hr className="my-4"/>
                                        </div>

                                        <div className="col-12">
                                            <h5 className="text-center">
                                                <span>Toplam:</span>
                                                <span>250.00 TL</span>
                                            </h5>
                                        </div>

                                        <div className="col-12 basket-buttons">
                                            <div className="row">
                                                <div className="col-6">
                                                    <a href="#" className="btn btn-outline-warning w-100">Sepet</a>
                                                </div>

                                                <div className="col-6">
                                                    <a href="#" className="btn btn-outline-success w-100">Ödeme</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <header>
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <a className="navbar-brand" href="#">
                            <img src={logo} alt="Logo" className="logo"/>
                        </a>
                        <button className="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse ms-auto" id="navbarSupportedContent">
                            <form className="d-flex mx-auto mt-4 mb-4 mt-lg-0" style={{flexGrow: 1, maxWidth: "500px"}}>
                                <input
                                    className="form-control me-2 search-input"
                                    type="search"
                                    placeholder="Ürün Ara"
                                    aria-label="Search"
                                />
                            </form>
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle"
                                       aria-current="page"
                                       href="javascript:void(0)"
                                       data-bs-toggle="dropdown"
                                       role="button">
                                        MARKALAR
                                    </a>
                                    <div className="dropdown-menu">
                                        <div className="row">
                                            <div className="col-md-9 nav-brands">
                                                <h4 className="mb-4">Tüm Markalar</h4>
                                                <div className="row">
                                                    <div className="col navbar-column">
                                                        <a href="#" className="dropdown-link">Miss</a>
                                                        <a href="#" className="dropdown-link">Miss</a>
                                                        <a href="#" className="dropdown-link">Miss</a>
                                                        <a href="#" className="dropdown-link">Miss</a>
                                                        <a href="#" className="dropdown-link">Miss</a>
                                                        <a href="#" className="dropdown-link">Miss</a>
                                                        <a href="#" className="dropdown-link">Miss</a>
                                                        <a href="#" className="dropdown-link">Miss</a>
                                                        <a href="#" className="dropdown-link">Miss</a>
                                                        <a href="#" className="dropdown-link">Miss</a>

                                                    </div>
                                                    <div className="col navbar-column">
                                                        <a href="#" className="dropdown-link">Miss</a>
                                                        <a href="#" className="dropdown-link">Miss</a>
                                                        <a href="#" className="dropdown-link">Miss</a>
                                                        <a href="#" className="dropdown-link">Miss</a>
                                                        <a href="#" className="dropdown-link">Miss</a>
                                                        <a href="#" className="dropdown-link">Miss</a>
                                                        <a href="#" className="dropdown-link">Miss</a>
                                                        <a href="#" className="dropdown-link">Miss</a>
                                                        <a href="#" className="dropdown-link">Miss</a>
                                                        <a href="#" className="dropdown-link">Miss</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle"
                                       aria-current="page"
                                       href="javascript:void(0)"
                                       data-bs-toggle="dropdown"
                                       role="button"
                                       aria-expanded="false">
                                        KADIN
                                    </a>
                                    <div className="dropdown-menu">
                                        <div className="row">
                                            <div className="col-md-9 nav-brands">
                                                <h4 className="mb-4">Tüm Kategoriler</h4>
                                                <div className="row">
                                                    <div className="col navbar-column">
                                                        <a href="#"
                                                           className="dropdown-link">Kadın Günlük</a>
                                                        <a href="#"
                                                           className="dropdown-link">Kadın Originals</a>
                                                        <a href="#"
                                                           className="dropdown-link">Kadın Koşu</a>
                                                        <a href="#"
                                                           className="dropdown-link">Kadın Futbol</a>
                                                        <a href="#"
                                                           className="dropdown-link">Kadın Yürüyüş</a>
                                                        <a href="#"
                                                           className="dropdown-link">Kadın Outdoor</a>
                                                        <a href="#"
                                                           className="dropdown-link">Kadın Sandalet</a>
                                                        <a href="#"
                                                           className="dropdown-link">Kadın Terlik</a>
                                                        <a href="#"
                                                           className="dropdown-link">Kadın Tenis</a>
                                                    </div>
                                                    <div className="col navbar-column">
                                                        <a href="#"
                                                           className="dropdown-link">Kadın Skate-KayKay</a>
                                                        <a href="#"
                                                           className="dropdown-link">Kadın Basketbol</a>
                                                        <a href="#"
                                                           className="dropdown-link">Kadın Bot</a>
                                                        <a href="#"
                                                           className="dropdown-link">Kadın Çizme</a>
                                                        <a href="#"
                                                           className="dropdown-link">Kadın Indoor</a>
                                                        <a href="#"
                                                           className="dropdown-link">Kadın İlk Adım</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" aria-current="page"
                                       href="javascript:void(0)" data-bs-toggle="dropdown" role="button">
                                        ERKEK
                                    </a>
                                    <div className="dropdown-menu">
                                        <div className="row">
                                            <div className="col-md-9 nav-brands">
                                                <h4 className="mb-4">Tüm Kategoriler</h4>
                                                <div className="row">
                                                    <div className="col navbar-column">
                                                        <a href="#"
                                                           className="dropdown-link">Erkek Günlük</a>
                                                        <a href="#"
                                                           className="dropdown-link">Erkek Originals</a>
                                                        <a href="#"
                                                           className="dropdown-link">Erkek Koşu</a>
                                                        <a href="#"
                                                           className="dropdown-link">Erkek Futbol</a>
                                                        <a href="#"
                                                           className="dropdown-link">Erkek Yürüyüş</a>
                                                        <a href="#"
                                                           className="dropdown-link">Erkek Outdoor</a>
                                                        <a href="#"
                                                           className="dropdown-link">Erkek Sandalet</a>
                                                        <a href="#"
                                                           className="dropdown-link">Erkek Terlik</a>
                                                        <a href="#"
                                                           className="dropdown-link">Erkek Tenis</a>
                                                    </div>
                                                    <div className="col navbar-column">
                                                        <a href="#"
                                                           className="dropdown-link">Erkek Skate-KayKay</a>
                                                        <a href="#"
                                                           className="dropdown-link">Erkek Basketbol</a>
                                                        <a href="#"
                                                           className="dropdown-link">Erkek Bot</a>
                                                        <a href="#"
                                                           className="dropdown-link">Erkek Çizme</a>
                                                        <a href="#"
                                                           className="dropdown-link">Erkek Indoor</a>
                                                        <a href="#"
                                                           className="dropdown-link">Erkek İlk Adım</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle"
                                       aria-current="page"
                                       href="javascript:void(0)"
                                       data-bs-toggle="dropdown"
                                       role="button">
                                        ÇOCUK
                                    </a>
                                    <div className="dropdown-menu">
                                        <div className="row">
                                            <div className="col-md-9 nav-brands">
                                                <h4 className="mb-4">Tüm Kategoriler</h4>
                                                <div className="row">
                                                    <div className="col navbar-column">
                                                        <a href="#"
                                                           className="dropdown-link">Çocuk Günlük</a>
                                                        <a href="#"
                                                           className="dropdown-link">Çocuk Originals</a>
                                                        <a href="#"
                                                           className="dropdown-link">Çocuk Koşu</a>
                                                        <a href="#"
                                                           className="dropdown-link">Çocuk Futbol</a>
                                                        <a href="#"
                                                           className="dropdown-link">Çocuk Yürüyüş</a>
                                                        <a href="#"
                                                           className="dropdown-link">Çocuk Outdoor</a>
                                                        <a href="#"
                                                           className="dropdown-link">Çocuk Sandalet</a>
                                                        <a href="#"
                                                           className="dropdown-link">Çocuk Terlik</a>
                                                        <a href="#"
                                                           className="dropdown-link">Çocuk Tenis</a>
                                                    </div>
                                                    <div className="col navbar-column">
                                                        <a href="#"
                                                           className="dropdown-link">Çocuk Skate-KayKay</a>
                                                        <a href="#"
                                                           className="dropdown-link">Çocuk Basketbol</a>
                                                        <a href="#"
                                                           className="dropdown-link">Çocuk Bot</a>
                                                        <a href="#"
                                                           className="dropdown-link">Çocuk Çizme</a>
                                                        <a href="#"
                                                           className="dropdown-link">Çocuk Indoor</a>
                                                        <a href="#"
                                                           className="dropdown-link">Çocuk İlk Adım</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header
