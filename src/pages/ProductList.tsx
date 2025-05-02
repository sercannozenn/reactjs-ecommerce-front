import { useGetFiltersQuery } from '../api/services/FilterCacheService';
import {Dispatch, SetStateAction, useEffect, useState} from 'react';
import RecursiveCategoryFilter from "../components/filters/RecursiveCategoryFilter.tsx";
import {Product} from "../types/Product.ts";
import {ProductService} from "../api/services/ProductService.ts";
import { useSearchParams } from 'react-router-dom';


function ProductList() {
    const [searchParams, setSearchParams] = useSearchParams();

    const { data: filters, isLoading: fL } = useGetFiltersQuery();

    const [selectedGenders,    setSelectedGenders]    = useState<string[]>([]);
    const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
    const [selectedBrands,     setSelectedBrands]     = useState<number[]>([]);

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
    });

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


    const [products, setProducts] = useState<Product[]>([]);
    const [isLoadingProducts, setIsLoadingProducts] = useState(false);



    if (fL || !filters) return <div>Filtreler yükleniyor…</div>;

    const { genders, categories, brands } = filters!;


    function toggleSelection<T>(value: T, selectedArr: T[], setter: Dispatch<SetStateAction<T[]>>) {
        if (selectedArr.includes(value)) {
            setter(selectedArr.filter(item => item !== value));
        } else {
            setter([...selectedArr, value]);
        }
    }

    const handleSortChange = (value: string) => {
        let [by, direction] = value.split('_');
        if (by === 'price'){
            by = 'final_price';
        }
        setSortBy(by);
        setSortDirection(direction as 'asc' | 'desc');
        setSortOrder(value); // UI'de seçili olarak gösterilmesi için
    };
    const fetchProducts = async () => {
        setIsLoadingProducts(true);
        try {
            const data = await ProductService.list(filterParams);
            setProducts(data.data);
            console.log(data)
            setPagination(data.meta);
        } catch (e) {
            console.error('Ürünler alınamadı', e);
        } finally {
            setIsLoadingProducts(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, [
        search,
        selectedGenders,
        selectedCategories,
        selectedBrands,
        minPrice,
        maxPrice,
        sortOrder,
    ]);
    useEffect(() => {
        fetchProducts();
    }, [
        page,
        search,
        selectedGenders,
        selectedCategories,
        selectedBrands,
        minPrice,
        maxPrice,
        sortBy,
        sortDirection,
    ]);
    useEffect(() => {
        const genderParam = searchParams.get('genders') || '';
        const categoryParam = searchParams.get('categories') || '';
        const brandParam = searchParams.get('brands') || '';

        setSelectedGenders(genderParam.split(',').filter(Boolean));
        setSelectedCategories(categoryParam.split(',').filter(Boolean).map(Number));
        setSelectedBrands(brandParam.split(',').filter(Boolean).map(Number));

        setSearch(searchParams.get('search') || '');
        setMinPrice(searchParams.get('min_price') || '');
        setMaxPrice(searchParams.get('max_price') || '');
        setSortOrder(searchParams.get('sort') || 'id_desc');
        setPage(Number(searchParams.get('page') || 1));



        const sortParam = searchParams.get('sort') || 'id_desc';
        let [by, direction] = sortParam.split('_');
        if (by === 'price'){
            by = 'final_price';
        }
        setSortOrder(sortParam);
        setSortBy(by);
        setSortDirection(direction as 'asc' | 'desc');
    }, [searchParams]);
    useEffect(() => {
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

        // Boş olanları temizle
        Object.keys(params).forEach(key => {
            if (!params[key]) delete params[key];
        });

        setSearchParams(params);
    }, [
        search,
        selectedGenders,
        selectedCategories,
        selectedBrands,
        minPrice,
        maxPrice,
        sortOrder,
        page
    ]);



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
                                                        checked={selectedBrands.includes(brand.id)}
                                                        onChange={() =>
                                                            toggleSelection(brand.id, selectedBrands, setSelectedBrands)
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
                                            <span className="text-decoration-underline product-count fw-bold-600">120 Ürün Listelendi</span>
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
