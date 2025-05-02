import urun from '../../assets/images/urun1.webp';
import logo from '../../assets/images/logo.png';

import {Link} from "react-router";
import { useGetBrandsQuery } from '../../api/services/BrandCacheService'
import {useGetSubcategoriesQuery} from "../../api/services/CategoryCacheService.ts";
import React, {useEffect, useState} from "react";
import {useRouteNavigator} from "../../router/RouteHelper.ts";
import {useSearchParams} from "react-router-dom";

function Header() {
    const navigateToRoute = useRouteNavigator();
    const [searchParams] = useSearchParams();
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        const q = searchParams.get('search') || '';
        setSearchText(q);
    }, [searchParams]);
    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchText.trim()) {
            navigateToRoute('ProductList', {
                search: searchText,
            });
        }
    };


    const { data: brands = [], isLoading: bL } = useGetBrandsQuery();
    const { data: womenCats = [] } = useGetSubcategoriesQuery('kadin');
    const { data: menCats   = [] } = useGetSubcategoriesQuery('erkek');
    const { data: childCats = [] } = useGetSubcategoriesQuery('cocuk');

    if (bL) return <div>Markalar yükleniyor…</div>



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
                                <a href="#" className="dropdown-toggle position-relative" role="button"
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
                            <form onSubmit={handleSearchSubmit} className="d-flex mx-auto mt-4 mb-4 mt-lg-0" style={{flexGrow: 1, maxWidth: "500px"}}>
                                <input
                                    className="form-control me-2 search-input"
                                    type="search"
                                    placeholder="Ürün Ara"
                                    aria-label="Search"
                                    value={searchText}
                                    onChange={(e) => setSearchText(e.target.value)}
                                />
                            </form>
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle"
                                       aria-current="page"
                                       href="#"
                                       data-bs-toggle="dropdown"
                                       role="button">
                                        MARKALAR
                                    </a>
                                    <div className="dropdown-menu">
                                        <div className="row">
                                            <div className="col-md-9 nav-brands">
                                                <h4 className="mb-4">Tüm Markalar</h4>
                                                <div className="row">
                                                    {[
                                                        brands.slice(0, 10),
                                                        brands.slice(10, 20),
                                                    ].map((col, ci) => (
                                                        <div className="col navbar-column" key={ci}>
                                                            {col.map((brand) => (
                                                                <Link
                                                                    key={brand.id}
                                                                    to={`/brands/${brand.slug}`}
                                                                    className="dropdown-link"
                                                                >
                                                                    {brand.name}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle"
                                       aria-current="page"
                                       href="#"
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
                                                    {[
                                                        womenCats.slice(0, 10),
                                                        womenCats.slice(10, 20),
                                                    ].map((col, ci) => (
                                                        <div className="col navbar-column" key={ci}>
                                                            {col.map((woCat) => (
                                                                <Link
                                                                    key={woCat.id}
                                                                    to={`/categories/${woCat.slug}`}
                                                                    className="dropdown-link"
                                                                >
                                                                    {woCat.name}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    ))}
                                                    {/*<div className="col navbar-column">*/}
                                                    {/*    <a href="#"*/}
                                                    {/*       className="dropdown-link">Kadın Günlük</a>*/}
                                                    {/*    <a href="#"*/}
                                                    {/*       className="dropdown-link">Kadın Originals</a>*/}
                                                    {/*    <a href="#"*/}
                                                    {/*       className="dropdown-link">Kadın Koşu</a>*/}
                                                    {/*    <a href="#"*/}
                                                    {/*       className="dropdown-link">Kadın Futbol</a>*/}
                                                    {/*    <a href="#"*/}
                                                    {/*       className="dropdown-link">Kadın Yürüyüş</a>*/}
                                                    {/*    <a href="#"*/}
                                                    {/*       className="dropdown-link">Kadın Outdoor</a>*/}
                                                    {/*    <a href="#"*/}
                                                    {/*       className="dropdown-link">Kadın Sandalet</a>*/}
                                                    {/*    <a href="#"*/}
                                                    {/*       className="dropdown-link">Kadın Terlik</a>*/}
                                                    {/*    <a href="#"*/}
                                                    {/*       className="dropdown-link">Kadın Tenis</a>*/}
                                                    {/*</div>*/}
                                                    {/*<div className="col navbar-column">*/}
                                                    {/*    <a href="#"*/}
                                                    {/*       className="dropdown-link">Kadın Skate-KayKay</a>*/}
                                                    {/*    <a href="#"*/}
                                                    {/*       className="dropdown-link">Kadın Basketbol</a>*/}
                                                    {/*    <a href="#"*/}
                                                    {/*       className="dropdown-link">Kadın Bot</a>*/}
                                                    {/*    <a href="#"*/}
                                                    {/*       className="dropdown-link">Kadın Çizme</a>*/}
                                                    {/*    <a href="#"*/}
                                                    {/*       className="dropdown-link">Kadın Indoor</a>*/}
                                                    {/*    <a href="#"*/}
                                                    {/*       className="dropdown-link">Kadın İlk Adım</a>*/}
                                                    {/*</div>*/}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" aria-current="page"
                                       href="#" data-bs-toggle="dropdown" role="button">
                                        ERKEK
                                    </a>
                                    <div className="dropdown-menu">
                                        <div className="row">
                                            <div className="col-md-9 nav-brands">
                                                <h4 className="mb-4">Tüm Kategoriler</h4>
                                                <div className="row">
                                                    {[
                                                        menCats.slice(0, 10),
                                                        menCats.slice(10, 20),
                                                    ].map((col, ci) => (
                                                        <div className="col navbar-column" key={ci}>
                                                            {col.map((menCat) => (
                                                                <Link
                                                                    key={menCat.id}
                                                                    to={`/categories/${menCat.slug}`}
                                                                    className="dropdown-link"
                                                                >
                                                                    {menCat.name}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle"
                                       aria-current="page"
                                       href="#"
                                       data-bs-toggle="dropdown"
                                       role="button">
                                        ÇOCUK
                                    </a>
                                    <div className="dropdown-menu">
                                        <div className="row">
                                            <div className="col-md-9 nav-brands">
                                                <h4 className="mb-4">Tüm Kategoriler</h4>
                                                <div className="row">
                                                    {[
                                                        childCats.slice(0, 10),
                                                        childCats.slice(10, 20),
                                                    ].map((col, ci) => (
                                                        <div className="col navbar-column" key={ci}>
                                                            {col.map((childCat) => (
                                                                <Link
                                                                    key={childCat.id}
                                                                    to={`/categories/${childCat.slug}`}
                                                                    className="dropdown-link"
                                                                >
                                                                    {childCat.name}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    ))}
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
