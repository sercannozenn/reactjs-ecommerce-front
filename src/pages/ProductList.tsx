import { useGetFiltersQuery } from '../api/services/FilterCacheService';
import {Dispatch, SetStateAction, useState} from 'react';
import RecursiveCategoryFilter from "../components/filters/RecursiveCategoryFilter.tsx";

function ProductList() {
    const { data: filters, isLoading: fL } = useGetFiltersQuery();

    const [selectedGenders,    setSelectedGenders]    = useState<string[]>([]);
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [selectedBrands,     setSelectedBrands]     = useState<string[]>([]);

    if (fL || !filters) return <div>Filtreler yükleniyor…</div>;

    const { genders, categories, brands } = filters!;

    console.log(genders, categories, brands);



    const toggleSelection = (
        slug: string,
        selectedArr: string[],
        setter: Dispatch<SetStateAction<string[]>>
    ) => {
        if (selectedArr.includes(slug)) {
            setter(selectedArr.filter(item => item !== slug));
        } else {
            setter([...selectedArr, slug]);
        }
    };


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
                                            <RecursiveCategoryFilter
                                                categories={categories}
                                                selected={selectedCategories}
                                                toggle={(slug) => toggleSelection(slug, selectedCategories, setSelectedCategories)}
                                            />
                                        </div>
                                    </div>
                                    <div className="filter-item-wrapper mt-2">
                                        <h3 className="filter-title">Markalar</h3>
                                        <div className="filter-detail">

                                            {brands.map((brand) => (
                                                <div key={brand.id} className="form-check filter-item">
                                                    <input
                                                        type="checkbox"
                                                        className="form-check-input"
                                                        name="brands"
                                                        value={brand.slug}
                                                        id={`brand-${brand.id}`}
                                                        checked={selectedBrands.includes(brand.slug)}
                                                        onChange={() =>
                                                            toggleSelection(brand.slug, selectedBrands, setSelectedBrands)
                                                        }
                                                    />
                                                    <label htmlFor={`brand-${brand.id}`}>{brand.name}</label>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="filter-item-wrapper mt-2">
                                        <h3 className="filter-title">Cinsiyet</h3>
                                        <div className="filter-detail">
                                            {genders.map((gender, index) => (
                                                <div className="form-check filter-item" key={gender.value}>
                                                    <input
                                                        type="checkbox"
                                                        className="form-check-input"
                                                        name="genders"
                                                        value={gender.value}
                                                        id={`gender-${index}`}
                                                        checked={selectedGenders.includes(gender.value)}
                                                        onChange={() => toggleSelection(gender.value, selectedGenders, setSelectedGenders)}
                                                    />
                                                    <label htmlFor={`gender-${index}`}>{gender.label}</label>
                                                </div>
                                            ))}
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
