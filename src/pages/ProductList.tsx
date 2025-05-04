import { useGetFiltersQuery } from '../api/services/FilterCacheService';
import {Dispatch, SetStateAction, useEffect, useState} from 'react';
import RecursiveCategoryFilter from "../components/filters/RecursiveCategoryFilter.tsx";
import {Product} from "../types/Product.ts";
import {ProductService} from "../api/services/ProductService.ts";
import { useSearchParams } from 'react-router-dom';


function ProductList() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [isParamsInitialized, setIsParamsInitialized] = useState(false); // URL'den gelen parametrelerin yalnızca bir kez okunup filtre state'lerine set edilmesini kontrol eder

    const { data: filters } = useGetFiltersQuery(); // API'den tüm filtre seçeneklerini alır (gender, category, brand)
    console.log(filters);
    // Filtre state'leri
    const [selectedGenders, setSelectedGenders] = useState<string[]>([]);
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

    // Diğer filtre ve sıralama state'leri
    const [search, setSearch] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [sortOrder, setSortOrder] = useState('id_desc');
    const [sortBy, setSortBy] = useState('id');
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
    const [page, setPage] = useState(1);
    const [pagination, setPagination] = useState({
        current_page: 1,
        last_page: 1,
        total: 0
    });

    const [products, setProducts] = useState<Product[]>([]);
    const [isLoadingProducts, setIsLoadingProducts] = useState(false);

    // API'ye gönderilecek filtre parametreleri
    const filterParams = {
        filter: {
            search: search,
            genders: selectedGenders,
            categories: selectedCategories,
            brands: selectedBrands,
            min_price_discount: minPrice,
            max_price_discount: maxPrice,
        },
        page: page,
        sortBy: sortBy,
        sortOrder: sortDirection,
    };

    // Checkbox türü alanlar için toggle fonksiyonu (seçili ise çıkar, değilse ekle)
    function toggleSelection<T>(value: T, selectedArr: T[], setter: Dispatch<SetStateAction<T[]>>) {
        if (selectedArr.includes(value)) {
            setter(selectedArr.filter(item => item !== value));
        } else {
            setter([...selectedArr, value]);
        }
        setPage(1); // Filtre değişince sayfayı başa al
    }

    // Sıralama dropdown'ı değişince çalışır
    const handleSortChange = (value: string) => {
        let [by, direction] = value.split('_');
        if (by === 'price') by = 'final_price'; // fiyat için özel alan ismi
        setSortBy(by);
        setSortDirection(direction as 'asc' | 'desc');
        setSortOrder(value);
    };

    // Ürünleri filtreye göre getirir
    const fetchProducts = async () => {
        setIsLoadingProducts(true);
        try {
            const data = await ProductService.list(filterParams);
            setProducts(data.data);
            setPagination(data.meta);
        } catch (e) {
            console.error('Ürünler alınamadı', e);
        } finally {
            setIsLoadingProducts(false);
        }
    };

    // İlk açılışta URL parametrelerini okuyup filtre state'lerine set eder (bir kere çalışır)
    useEffect(() => {
        console.log("geldi")
        if (!isParamsInitialized) {
            const searchParam = searchParams.get('search') || '';
            const genderParam = searchParams.get('genders') || '';
            const categoryParam = searchParams.get('categories') || '';
            const brandParam = searchParams.get('brands') || '';
            const minPriceParam = searchParams.get('min_price') || '';
            const maxPriceParam = searchParams.get('max_price') || '';
            const sortParam = searchParams.get('sort') || 'id_desc';
            const pageParam = searchParams.get('page') || '1';

            let [by, direction] = sortParam.split('_');
            if (by === 'price') by = 'final_price';

            setSearch(searchParam);
            setSelectedGenders(genderParam.split(',').filter(Boolean));
            setSelectedCategories(categoryParam.split(',').filter(Boolean));
            setSelectedBrands(brandParam.split(',').filter(Boolean));
            setMinPrice(minPriceParam);
            setMaxPrice(maxPriceParam);
            setSortOrder(sortParam);
            setSortBy(by);
            setSortDirection(direction as 'asc' | 'desc');
            setPage(Number(pageParam));

            setIsParamsInitialized(true); // Bu flag ile ikinci useEffect'in tetiklenmesini sağlıyoruz
        }
    }, [searchParams, isParamsInitialized]);

    // Filtrelerde herhangi bir değişiklik olduğunda ürünleri getirir ve URL'yi günceller
    useEffect(() => {
        console.log("geldi")
        if (!isParamsInitialized) return;

        const params: any = {
            search,
            genders: selectedGenders.join(','),
            categories: selectedCategories.join(','),
            brands: selectedBrands.join(','),
            min_price: minPrice,
            max_price: maxPrice,
            sort: sortOrder,
            page: page.toString(),
        };

        // Boş değerleri URL'ye yazmamak için temizliyoruz
        Object.keys(params).forEach(key => {
            if (!params[key]) delete params[key];
        });

        setSearchParams(params); // URL parametrelerini güncelle
        fetchProducts(); // Ürünleri getir
    }, [search, selectedGenders, selectedCategories, selectedBrands, minPrice, maxPrice, sortOrder, page, isParamsInitialized]);

    // const { genders, categories, brands } = filters!; // API'den gelen filtre verilerini destructure ediyoruz
    const { genders = [], categories = [], brands = [] } = filters || {};


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
                                                   className="form-control search-text"
                                                   value={search}
                                                   onChange={(e) => setSearch(e.target.value)}
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
                                                               placeholder="En az"
                                                               value={minPrice}
                                                               onChange={(e) => setMinPrice(e.target.value)}


                                                        />
                                                    </div>
                                                    <div className="col">
                                                        <input type="text" name="max_price"
                                                               className="max-price form-control"
                                                               placeholder="En çok"
                                                               value={maxPrice}
                                                               onChange={(e) => setMaxPrice(e.target.value)}
                                                        />
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
                                            <span className="text-decoration-underline product-count fw-bold-600">Toplam {pagination.total} Ürün Listelenmektedir.</span>
                                        </div>
                                        <div className="col">
                                            <select name="sort"
                                                    id="sortSelect"
                                                    className="sortby float-end"
                                                    value={sortOrder}
                                                    onChange={(e) => handleSortChange(e.target.value)}
                                            >
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
                                {isLoadingProducts ? (
                                    <div>Ürünler yükleniyor...</div>
                                ) : products && products.length === 0 ? (
                                    <div>Ürün bulunamadı.</div>
                                ) : (
                                    products.map((product) => (
                                        <div key={product.id} className="col-md-3 wrapper-product position-relative mb-5">
                                            <div className="product-image position-relative">
                                                <a href={`/urun/${product.slug}`}>
                                                    <img
                                                        src={product.featured_image.image_url}
                                                        className="img-fluid"
                                                        alt={product.name}
                                                    />
                                                </a>
                                                <div className="product-overlay">
                                                    <span className="product-tag text-orange fw-bold-600">Yeni</span>
                                                    <span className="favorite"><i className="bi bi-heart"></i></span>
                                                    <span className="un-favorite"><i className="bi bi-heart-fill"></i></span>
                                                    <a href={`/urun-listesi?brands=${product.brand?.slug}`} className="product-brand text-orange fw-bold-600">
                                                        {product.brand?.name}
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product-info text-center pt-3">
                                                <a href={`/urun/${product.slug}`}>
                                                    <h4 className="product-title">{product.name}</h4>
                                                    <div className="text-muted product-description">
                                                        {product.categories?.[0]?.name}
                                                    </div>
                                                </a>
                                                <a href={`/urun/${product.slug}`} className="product-price text-orange">
                                                    {product.final_price} TL
                                                </a>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                            {pagination.last_page > 1 && (
                                <div className="col-md-12 d-flex justify-content-center">
                                    <ul className="pagination">
                                        {/* Önceki Buton */}
                                        <li>
                                            <a
                                                onClick={() => pagination.current_page > 1 && setPage(pagination.current_page - 1)}
                                                className={pagination.current_page === 1 ? 'disabled previous' : 'previous'}
                                            >
                                                &lsaquo;
                                            </a>
                                        </li>

                                        {/* Sayfa Numaraları */}
                                        {Array.from({ length: pagination.last_page }, (_, i) => i + 1).map((pageNumber) => (
                                            <li key={pageNumber} className={pagination.current_page === pageNumber ? 'active' : ''}>
                                                {pagination.current_page === pageNumber ? (
                                                    <a href="#">{pageNumber}</a>
                                                ) : (
                                                    <a onClick={() => setPage(pageNumber)}>{pageNumber}</a>
                                                )}
                                            </li>
                                        ))}

                                        {/* Sonraki Buton */}
                                        <li>
                                            <a
                                                onClick={() => pagination.current_page < pagination.last_page && setPage(pagination.current_page + 1)}
                                                className={pagination.current_page === pagination.last_page ? 'disabled next' : 'next'}
                                            >
                                                &rsaquo;
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            )}


                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ProductList
