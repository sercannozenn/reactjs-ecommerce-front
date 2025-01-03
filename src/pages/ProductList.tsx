function ProductList() {
    return (
        <>
            <div className="container">
                <form action="http://eticaret.com/urun-listesi" id="productFilterForm">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="row position-relative">
                                <div className="col-12 product-filter">
                                    <div className="filter-item-wrapper mt-2">
                                        <h3 className="filter-title"></h3>
                                        <div className="filter-detail">
                                            <input type="search" name="q" id="searchText"
                                                   className="form-control search-text" value=""
                                                   placeholder="Arama"/>
                                        </div>
                                    </div>
                                    <div className="filter-item-wrapper mt-2">
                                        <h3 className="filter-title">Kategoriler</h3>
                                        <div className="filter-detail">
                                            <div className="form-check filter-item">
                                                <input type="checkbox" name="categories"
                                                       className="form-check-input parent-category" value="kadin"
                                                       id="cat-1" data-id="1"/>
                                                <label htmlFor="cat-1">Kadın</label>
                                            </div>
                                            <div className="subCategories mx-3" id="subCategories-1" data-id="1"
                                                 style={{display: "none"}}>
                                                <div className="form-check filter-item sub-category">
                                                    <input type="checkbox" name="categories"
                                                           className="form-check-input" value="kadin-gunluk"
                                                           id="cat-2"/>
                                                    <label htmlFor="cat-2">Kadın Günlük</label>
                                                </div>
                                                <div className="form-check filter-item sub-category">
                                                    <input type="checkbox" name="categories"
                                                           className="form-check-input" value="kadin-originals"
                                                           id="cat-3"/>
                                                    <label htmlFor="cat-3">Kadın Originals</label>
                                                </div>
                                                <div className="form-check filter-item sub-category">
                                                    <input type="checkbox" name="categories"
                                                           className="form-check-input" value="kadin-kosu"
                                                           id="cat-4"/>
                                                    <label htmlFor="cat-4">Kadın Koşu</label>
                                                </div>
                                                <div className="form-check filter-item sub-category">
                                                    <input type="checkbox" name="categories"
                                                           className="form-check-input" value="kadin-futbol"
                                                           id="cat-5"/>
                                                    <label htmlFor="cat-5">Kadın Futbol</label>
                                                </div>
                                                <div className="form-check filter-item sub-category">
                                                    <input type="checkbox" name="categories"
                                                           className="form-check-input" value="kadin-yuruyus"
                                                           id="cat-6"/>
                                                    <label htmlFor="cat-6">Kadın Yürüyüş</label>
                                                </div>
                                                <div className="form-check filter-item sub-category">
                                                    <input type="checkbox" name="categories"
                                                           className="form-check-input" value="kadin-outdoor"
                                                           id="cat-7"/>
                                                    <label htmlFor="cat-7">Kadın Outdoor</label>
                                                </div>
                                                <div className="form-check filter-item sub-category">
                                                    <input type="checkbox" name="categories"
                                                           className="form-check-input" value="kadin-sandalet"
                                                           id="cat-8"/>
                                                    <label htmlFor="cat-8">Kadın Sandalet</label>
                                                </div>
                                                <div className="form-check filter-item sub-category">
                                                    <input type="checkbox" name="categories"
                                                           className="form-check-input" value="kadin-terlik"
                                                           id="cat-9"/>
                                                    <label htmlFor="cat-9">Kadın Terlik</label>
                                                </div>
                                                <div className="form-check filter-item sub-category">
                                                    <input type="checkbox" name="categories"
                                                           className="form-check-input" value="kadin-tenis"
                                                           id="cat-10"/>
                                                    <label htmlFor="cat-10">Kadın Tenis</label>
                                                </div>
                                                <div className="form-check filter-item sub-category">
                                                    <input type="checkbox" name="categories"
                                                           className="form-check-input" value="kadin-skate-kaykay"
                                                           id="cat-11"/>
                                                    <label htmlFor="cat-11">Kadın Skate-KayKay</label>
                                                </div>
                                                <div className="form-check filter-item sub-category">
                                                    <input type="checkbox" name="categories"
                                                           className="form-check-input" value="kadin-basketbol"
                                                           id="cat-12"/>
                                                    <label htmlFor="cat-12">Kadın Basketbol</label>
                                                </div>
                                                <div className="form-check filter-item sub-category">
                                                    <input type="checkbox" name="categories"
                                                           className="form-check-input" value="kadin-bot"
                                                           id="cat-13"/>
                                                    <label htmlFor="cat-13">Kadın Bot</label>
                                                </div>
                                                <div className="form-check filter-item sub-category">
                                                    <input type="checkbox" name="categories"
                                                           className="form-check-input" value="kadin-cizme"
                                                           id="cat-14"/>
                                                    <label htmlFor="cat-14">Kadın Çizme</label>
                                                </div>
                                                <div className="form-check filter-item sub-category">
                                                    <input type="checkbox" name="categories"
                                                           className="form-check-input" value="kadin-indoor"
                                                           id="cat-15"/>
                                                    <label htmlFor="cat-15">Kadın Indoor</label>
                                                </div>
                                                <div className="form-check filter-item sub-category">
                                                    <input type="checkbox" name="categories"
                                                           className="form-check-input" value="kadin-ilk-adim"
                                                           id="cat-16"/>
                                                    <label htmlFor="cat-16">Kadın İlk Adım</label>
                                                </div>
                                            </div>

                                            <div className="form-check filter-item">
                                                <input type="checkbox" name="categories"
                                                       className="form-check-input parent-category" value="erkek"
                                                       id="cat-17" data-id="17"/>
                                                <label htmlFor="cat-17">Erkek</label>
                                            </div>
                                            <div className="subCategories mx-3" id="subCategories-17" data-id="17"
                                                 style={{display: "none"}}>
                                                <div className="form-check filter-item sub-category">
                                                    <input type="checkbox" name="categories"
                                                           className="form-check-input" value="erkek-gunluk"
                                                           id="cat-18"/>
                                                    <label htmlFor="cat-18">Erkek Günlük</label>
                                                </div>
                                                <div className="form-check filter-item sub-category">
                                                    <input type="checkbox" name="categories"
                                                           className="form-check-input" value="erkek-originals"
                                                           id="cat-19"/>
                                                    <label htmlFor="cat-19">Erkek Originals</label>
                                                </div>
                                                <div className="form-check filter-item sub-category">
                                                    <input type="checkbox" name="categories"
                                                           className="form-check-input" value="erkek-kosu"
                                                           id="cat-20"/>
                                                    <label htmlFor="cat-20">Erkek Koşu</label>
                                                </div>
                                                <div className="form-check filter-item sub-category">
                                                    <input type="checkbox" name="categories"
                                                           className="form-check-input" value="erkek-futbol"
                                                           id="cat-21"/>
                                                    <label htmlFor="cat-21">Erkek Futbol</label>
                                                </div>
                                                <div className="form-check filter-item sub-category">
                                                    <input type="checkbox" name="categories"
                                                           className="form-check-input" value="erkek-yuruyus"
                                                           id="cat-22"/>
                                                    <label htmlFor="cat-22">Erkek Yürüyüş</label>
                                                </div>
                                                <div className="form-check filter-item sub-category">
                                                    <input type="checkbox" name="categories"
                                                           className="form-check-input" value="erkek-outdoor"
                                                           id="cat-23"/>
                                                    <label htmlFor="cat-23">Erkek Outdoor</label>
                                                </div>
                                                <div className="form-check filter-item sub-category">
                                                    <input type="checkbox" name="categories"
                                                           className="form-check-input" value="erkek-sandalet"
                                                           id="cat-24"/>
                                                    <label htmlFor="cat-24">Erkek Sandalet</label>
                                                </div>
                                                <div className="form-check filter-item sub-category">
                                                    <input type="checkbox" name="categories"
                                                           className="form-check-input" value="erkek-terlik"
                                                           id="cat-25"/>
                                                    <label htmlFor="cat-25">Erkek Terlik</label>
                                                </div>
                                                <div className="form-check filter-item sub-category">
                                                    <input type="checkbox" name="categories"
                                                           className="form-check-input" value="erkek-tenis"
                                                           id="cat-26"/>
                                                    <label htmlFor="cat-26">Erkek Tenis</label>
                                                </div>
                                                <div className="form-check filter-item sub-category">
                                                    <input type="checkbox" name="categories"
                                                           className="form-check-input" value="erkek-skate-kaykay"
                                                           id="cat-27"/>
                                                    <label htmlFor="cat-27">Erkek Skate-KayKay</label>
                                                </div>
                                                <div className="form-check filter-item sub-category">
                                                    <input type="checkbox" name="categories"
                                                           className="form-check-input" value="erkek-basketbol"
                                                           id="cat-28"/>
                                                    <label htmlFor="cat-28">Erkek Basketbol</label>
                                                </div>
                                                <div className="form-check filter-item sub-category">
                                                    <input type="checkbox" name="categories"
                                                           className="form-check-input" value="erkek-bot"
                                                           id="cat-29"/>
                                                    <label htmlFor="cat-29">Erkek Bot</label>
                                                </div>
                                                <div className="form-check filter-item sub-category">
                                                    <input type="checkbox" name="categories"
                                                           className="form-check-input" value="erkek-cizme"
                                                           id="cat-30"/>
                                                    <label htmlFor="cat-30">Erkek Çizme</label>
                                                </div>
                                                <div className="form-check filter-item sub-category">
                                                    <input type="checkbox" name="categories"
                                                           className="form-check-input" value="erkek-indoor"
                                                           id="cat-31"/>
                                                    <label htmlFor="cat-31">Erkek Indoor</label>
                                                </div>
                                                <div className="form-check filter-item sub-category">
                                                    <input type="checkbox" name="categories"
                                                           className="form-check-input" value="erkek-ilk-adim"
                                                           id="cat-32"/>
                                                    <label htmlFor="cat-32">Erkek İlk Adım</label>
                                                </div>
                                            </div>

                                            <div className="form-check filter-item">
                                                <input type="checkbox" name="categories"
                                                       className="form-check-input parent-category" value="cocuk"
                                                       id="cat-33" data-id="33"/>
                                                <label htmlFor="cat-33">Çocuk</label>
                                            </div>
                                            <div className="subCategories mx-3" id="subCategories-33" data-id="33"
                                                 style={{display: "none"}}>
                                                <div className="form-check filter-item sub-category">
                                                    <input type="checkbox" name="categories"
                                                           className="form-check-input" value="cocuk-gunluk"
                                                           id="cat-34"/>
                                                    <label htmlFor="cat-34">Çocuk Günlük</label>
                                                </div>
                                                <div className="form-check filter-item sub-category">
                                                    <input type="checkbox" name="categories"
                                                           className="form-check-input" value="cocuk-originals"
                                                           id="cat-35"/>
                                                    <label htmlFor="cat-35">Çocuk Originals</label>
                                                </div>
                                                <div className="form-check filter-item sub-category">
                                                    <input type="checkbox" name="categories"
                                                           className="form-check-input" value="cocuk-kosu"
                                                           id="cat-36"/>
                                                    <label htmlFor="cat-36">Çocuk Koşu</label>
                                                </div>
                                                <div className="form-check filter-item sub-category">
                                                    <input type="checkbox" name="categories"
                                                           className="form-check-input" value="cocuk-futbol"
                                                           id="cat-37"/>
                                                    <label htmlFor="cat-37">Çocuk Futbol</label>
                                                </div>
                                                <div className="form-check filter-item sub-category">
                                                    <input type="checkbox" name="categories"
                                                           className="form-check-input" value="cocuk-yuruyus"
                                                           id="cat-38"/>
                                                    <label htmlFor="cat-38">Çocuk Yürüyüş</label>
                                                </div>
                                                <div className="form-check filter-item sub-category">
                                                    <input type="checkbox" name="categories"
                                                           className="form-check-input" value="cocuk-outdoor"
                                                           id="cat-39"/>
                                                    <label htmlFor="cat-39">Çocuk Outdoor</label>
                                                </div>
                                                <div className="form-check filter-item sub-category">
                                                    <input type="checkbox" name="categories"
                                                           className="form-check-input" value="cocuk-sandalet"
                                                           id="cat-40"/>
                                                    <label htmlFor="cat-40">Çocuk Sandalet</label>
                                                </div>
                                                <div className="form-check filter-item sub-category">
                                                    <input type="checkbox" name="categories"
                                                           className="form-check-input" value="cocuk-terlik"
                                                           id="cat-41"/>
                                                    <label htmlFor="cat-41">Çocuk Terlik</label>
                                                </div>
                                                <div className="form-check filter-item sub-category">
                                                    <input type="checkbox" name="categories"
                                                           className="form-check-input" value="cocuk-tenis"
                                                           id="cat-42"/>
                                                    <label htmlFor="cat-42">Çocuk Tenis</label>
                                                </div>
                                                <div className="form-check filter-item sub-category">
                                                    <input type="checkbox" name="categories"
                                                           className="form-check-input" value="cocuk-skate-kaykay"
                                                           id="cat-43"/>
                                                    <label htmlFor="cat-43">Çocuk Skate-KayKay</label>
                                                </div>
                                                <div className="form-check filter-item sub-category">
                                                    <input type="checkbox" name="categories"
                                                           className="form-check-input" value="cocuk-basketbol"
                                                           id="cat-44"/>
                                                    <label htmlFor="cat-44">Çocuk Basketbol</label>
                                                </div>
                                                <div className="form-check filter-item sub-category">
                                                    <input type="checkbox" name="categories"
                                                           className="form-check-input" value="cocuk-bot"
                                                           id="cat-45"/>
                                                    <label htmlFor="cat-45">Çocuk Bot</label>
                                                </div>
                                                <div className="form-check filter-item sub-category">
                                                    <input type="checkbox" name="categories"
                                                           className="form-check-input" value="cocuk-cizme"
                                                           id="cat-46"/>
                                                    <label htmlFor="cat-46">Çocuk Çizme</label>
                                                </div>
                                                <div className="form-check filter-item sub-category">
                                                    <input type="checkbox" name="categories"
                                                           className="form-check-input" value="cocuk-indoor"
                                                           id="cat-47"/>
                                                    <label htmlFor="cat-47">Çocuk Indoor</label>
                                                </div>
                                                <div className="form-check filter-item sub-category">
                                                    <input type="checkbox" name="categories"
                                                           className="form-check-input" value="cocuk-ilk-adim"
                                                           id="cat-48"/>
                                                    <label htmlFor="cat-48">Çocuk İlk Adım</label>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="filter-item-wrapper mt-2">
                                        <h3 className="filter-title">Markalar</h3>
                                        <div className="filter-detail">
                                            <div className="form-check filter-item">
                                                <input type="checkbox" className="form-check-input" name="brands"
                                                       value="animi-id-sit-dolores-sapiente-itaque-suscipit-placeat"
                                                       id="brand-2"/>
                                                <label htmlFor="brand-2">Miss</label>
                                            </div>
                                            <div className="form-check filter-item">
                                                <input type="checkbox" className="form-check-input" name="brands"
                                                       value="esse-natus-neque-et-aliquid" id="brand-3"/>
                                                <label htmlFor="brand-3">Prof.</label>
                                            </div>
                                            <div className="form-check filter-item">
                                                <input type="checkbox" className="form-check-input" name="brands"
                                                       value="officia-voluptatem-quo-architecto-dolor"
                                                       id="brand-9"/>
                                                <label htmlFor="brand-9">Dr.</label>
                                            </div>
                                            <div className="form-check filter-item">
                                                <input type="checkbox" className="form-check-input" name="brands"
                                                       value="fugiat-dolores-velit-harum-dignissimos-a-nemo-dolore"
                                                       id="brand-10"/>
                                                <label htmlFor="brand-10">Prof.</label>
                                            </div>
                                            <div className="form-check filter-item">
                                                <input type="checkbox" className="form-check-input" name="brands"
                                                       value="sed-voluptas-pariatur-ut-dolorem" id="brand-11"/>
                                                <label htmlFor="brand-11">Dr.</label>
                                            </div>
                                            <div className="form-check filter-item">
                                                <input type="checkbox" className="form-check-input" name="brands"
                                                       value="non-accusantium-dolores-in-illum-nisi" id="brand-13"/>
                                                <label htmlFor="brand-13">Ms.</label>
                                            </div>
                                            <div className="form-check filter-item">
                                                <input type="checkbox" className="form-check-input" name="brands"
                                                       value="optio-illum-dolor-consequuntur-voluptatem"
                                                       id="brand-14"/>
                                                <label htmlFor="brand-14">Mrs.</label>
                                            </div>
                                            <div className="form-check filter-item">
                                                <input type="checkbox" className="form-check-input" name="brands"
                                                       value="dolor-vitae-quam-soluta-qui" id="brand-16"/>
                                                <label htmlFor="brand-16">Prof.</label>
                                            </div>
                                            <div className="form-check filter-item">
                                                <input type="checkbox" className="form-check-input" name="brands"
                                                       value="eveniet-fugiat-odit-aut-harum-praesentium"
                                                       id="brand-17"/>
                                                <label htmlFor="brand-17">Prof.</label>
                                            </div>
                                            <div className="form-check filter-item">
                                                <input type="checkbox" className="form-check-input" name="brands"
                                                       value="harum-aut-commodi-accusantium-vel-iste-omnis-neque"
                                                       id="brand-20"/>
                                                <label htmlFor="brand-20">Ms.</label>
                                            </div>
                                            <div className="form-check filter-item">
                                                <input type="checkbox" className="form-check-input" name="brands"
                                                       value="magna-non-qui-est-cu" id="brand-21"/>
                                                <label htmlFor="brand-21">Pandora Barron</label>
                                            </div>
                                            <div className="form-check filter-item">
                                                <input type="checkbox" className="form-check-input" name="brands"
                                                       value="mechelle-valentine" id="brand-22"/>
                                                <label htmlFor="brand-22">Mechelle Valentine</label>
                                            </div>
                                            <div className="form-check filter-item">
                                                <input type="checkbox" className="form-check-input" name="brands"
                                                       value="marka1" id="brand-23"/>
                                                <label htmlFor="brand-23">Marka1</label>
                                            </div>
                                            <div className="form-check filter-item">
                                                <input type="checkbox" className="form-check-input" name="brands"
                                                       value="marka2" id="brand-24"/>
                                                <label htmlFor="brand-24">Marka2</label>
                                            </div>


                                        </div>
                                    </div>
                                    <div className="filter-item-wrapper mt-2">
                                        <h3 className="filter-title">Cinsiyet</h3>
                                        <div className="filter-detail">
                                            <div className="form-check filter-item">
                                                <input type="checkbox" name="genders" className="form-check-input"
                                                       value="0" id="gender-0"/>
                                                <label htmlFor="gender-0">Unisex</label>
                                            </div>
                                            <div className="form-check filter-item">
                                                <input type="checkbox" name="genders" className="form-check-input"
                                                       value="1" id="gender-1"/>
                                                <label htmlFor="gender-1">Erkek</label>
                                            </div>
                                            <div className="form-check filter-item">
                                                <input type="checkbox" name="genders" className="form-check-input"
                                                       value="2" id="gender-2"/>
                                                <label htmlFor="gender-2">Kadın</label>
                                            </div>
                                            <div className="form-check filter-item">
                                                <input type="checkbox" name="genders" className="form-check-input"
                                                       value="3" id="gender-3"/>
                                                <label htmlFor="gender-3">Erkek Çocuk</label>
                                            </div>
                                            <div className="form-check filter-item">
                                                <input type="checkbox" name="genders" className="form-check-input"
                                                       value="4" id="gender-4"/>
                                                <label htmlFor="gender-4">Kız Çocuk</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="filter-item-wrapper mt-2">
                                        <h3 className="filter-title">Fiyat</h3>
                                        <div className="filter-detail">
                                            <div className="filter-item">
                                                <div className="row filter-price">
                                                    <div className="col">
                                                        <input type="text" name="min_price"
                                                               className="min-price form-control"
                                                               placeholder="En az" value=""/>
                                                    </div>
                                                    <div className="col">
                                                        <input type="text" name="max_price"
                                                               className="max-price form-control"
                                                               placeholder="En çok" value=""/>
                                                    </div>
                                                    <div className="col-3">
                                                        <button type="button" id="btnPriceSearch">
                                                            <i className="bi bi-search"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-9">
                            <div className="row quick-filter px-4">
                                <div className="col-12 product-list-info">
                                    <div className="row">
                                        <div className="col">
                                            <span className="text-decoration-underline product-count fw-bold-600">120 Ürün Listelendi</span>
                                        </div>
                                        <div className="col">
                                            <select name="sort" id="sortSelect" className="sortby float-end">
                                                <option value="id_desc">
                                                    Yeni Gelenler
                                                </option>
                                                <option value="price_asc">
                                                    Artan Fiyat
                                                </option>
                                                <option value="price_desc">
                                                    Azalan Fiyat
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row products mt-4 p-4">
                                <div className="col-md-3 wrapper-product position-relative mb-5">
                                    <div className="product-image position-relative">
                                        <a href="http://eticaret.com/voluptatem-atque-la">
                                            <img
                                                src="http://eticaret.com/storage/files/1/laravel_ozgecmis_resume_projesi_16.png"
                                                className="img-fluid" alt="Georgia Washington 2"/>
                                        </a>
                                        <div className="product-overlay">
                                            <span className="product-tag text-orange fw-bold-600">Yeni</span>
                                            <span className="favorite"><i className="bi bi-heart"></i></span>
                                            <span className="un-favorite"><i
                                                className="bi bi-heart-fill"></i></span>
                                            <a href="http://eticaret.com/urun-listesi?brands=marka1"
                                               className="product-brand text-orange fw-bold-600">
                                                marka1
                                            </a>
                                        </div>
                                    </div>
                                    <div className="product-info text-center pt-3">
                                        <a href="http://eticaret.com/voluptatem-atque-la">
                                            <h4 className="product-title">Georgia Washington 2</h4>
                                            <div className="text-muted product-description">
                                                Erkek Bot
                                            </div>
                                        </a><a href="http://eticaret.com/voluptatem-atque-la"
                                               className="product-price text-orange">
                                        369.00 TL
                                    </a>

                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ProductList
