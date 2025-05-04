import {useEffect, useRef, useState} from "react";
import React from "react";
import {Link, useParams} from "react-router";
import type { Swiper as SwiperType } from 'swiper';

import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Thumbs, Zoom} from 'swiper/modules';
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/navigation";
// @ts-ignore
import "swiper/css/pagination";
// @ts-ignore
import "swiper/css/scrollbar";
// @ts-ignore
import "swiper/css/zoom";
import {Product} from "../types/Product.ts";
import {ProductService} from "../api/services/ProductService.ts";

function ProductDetail() {
    const { slug } = useParams();
    const [selectedSize, setSelectedSize] = useState("");

    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const [product, setProduct] = useState<Product | null>(null);
    useEffect(() => {
        if (slug) {
            ProductService.getDetail(slug)
                .then(data => setProduct(data))
                .catch(err => console.error("Ürün detayı alınamadı", err));
        }
    }, [slug]);

    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div className="product-image-wrapper position-relative">
                            <Swiper
                                modules={[Navigation, Thumbs, Zoom]}
                                spaceBetween={10}
                                navigation={true}
                                thumbs={{swiper: thumbsSwiper}}
                                zoom
                                className=""
                                fadeEffect={{crossFade: true}}
                            >
                                {product?.images.map((image) => (
                                    <SwiperSlide className="big-slider big-image" key={image.id}>
                                        <div className="swiper-zoom-container">
                                            <img className="w-100"
                                                 src={image.image_url}
                                                 alt={product?.name}/>
                                        </div>
                                    </SwiperSlide>
                                ))}

                            </Swiper>

                            <Swiper
                                modules={[Navigation, Thumbs]}
                                navigation={{
                                    prevEl: prevRef.current,
                                    nextEl: nextRef.current,
                                }}
                                onInit={(swiper) => {
                                    if (typeof swiper.params.navigation === 'object')
                                    {
                                        swiper.params.navigation.prevEl = prevRef.current;
                                        swiper.params.navigation.nextEl = nextRef.current;

                                    }
                                    swiper.navigation.init();
                                    swiper.navigation.update();
                                }}
                                onSwiper={(swiper) => setThumbsSwiper(swiper)}
                                spaceBetween={10}
                                slidesPerView={4}
                                watchSlidesProgress
                                className="thumb-sliders"
                            >
                                {product?.images.map((image) => (
                                    <SwiperSlide key={image.id}>
                                        <img className="thumb-image w-100"
                                             src={image.image_url}
                                             alt={product?.name}/>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            <div className="thumb-sliders-buttons text-center">
                                <span className="thumb-prev me-4 swiper-button-disabled"
                                      role="button"
                                      aria-label="Previous slide"
                                      aria-controls="swiper-wrapper-d59329257dbb4d38"
                                      ref={prevRef}
                                      aria-disabled="true">
                                    <i className="bi bi-arrow-left"></i>
                                </span>
                                <span className="thumb-next"
                                      ref={nextRef}
                                      role="button"
                                      aria-label="Next slide"
                                      aria-controls="swiper-wrapper-d59329257dbb4d38"
                                      aria-disabled="false">
                                    <i className="bi bi-arrow-right"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7 product-detail position-relative">
                        <h4 className="fw-bold-600">{product?.name}</h4>
                        <div className="price del-price text-orange fw-bold-600 text-muted"><del>{product?.price} TL</del></div>
                        <div className="price text-orange fw-bold-600">{product?.final_price} TL</div>
                        <hr className="mt-5"/>
                        <h6>Ürünün Kategorileri:  {product?.categories?.map((category, index) => (
                            <React.Fragment key={category.id}>
                                <Link
                                    key={category.id}
                                    to={`/urun-listesi/?categories=${category.slug}`}
                                    className="product-detail-category"
                                >{category.name}</Link>
                                {index < product.categories.length - 1 && ', '}
                            </React.Fragment>
                        ))}</h6>
                        <hr/>
                        <h6>{product?.brand.name}</h6>
                        <hr/>
                        <p className="product-short-description font-playfair" dangerouslySetInnerHTML={{ __html: product?.short_description  || ''}}></p>
                        <div className="shopping">
                            <div className="row">
                                <div className="col-md-1 text-center">
                                    <i className="bi bi-heart text-orange"></i>
                                </div>
                                <div className="col-md-5">
                                    <div className="piece-wrapper">
                                        <div className="input-group">
                                            <span className="piece-decrease"> - </span>
                                            <input type="text" className="piece" value="0" disabled={true}/>
                                            <span className="piece-increase"> + </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-5">
                                    <div className="input-group">
                                        <select id="footSize"
                                                className="form-control text-center"
                                                value={selectedSize}
                                                onChange={(e) => setSelectedSize(e.target.value)}
                                        >
                                            <option value="">Beden</option>
                                            {product?.sizes?.map((size) => (
                                                <option key={size.id} value={size.id}>{size.size}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <hr className="my-3"/>
                                <div className="col-md-12">
                                    <a href="#" data-product-id="2"
                                       className="btn bg-orange add-to-card w-100 text-white">Sepete Ekle</a>
                                </div>
                            </div>
                        </div>
                        {product?.active_price_history?.discount && (
                            <div className="discount-rate">
                                {
                                    product.active_price_history.discount.discount_type === 'fixed'
                                        ? product.active_price_history.discount.discount_amount + " TL"
                                        : product.active_price_history.discount.discount_type === 'percentage'
                                            ? '%' + product.active_price_history.discount.discount_amount
                                            : ''
                                }
                                <span className="d-block">İndirim</span>
                            </div>
                        )}
                    </div>

                    <div className="col-md-12 mt-4">
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseOne"
                                            aria-expanded="false" aria-controls="collapseOne">
                                        Ürün Hakkında
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse"
                                     data-bs-parent="#accordionExample">
                                    <div className="accordion-body" dangerouslySetInnerHTML={{ __html: product?.long_description  || ''}}>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                            aria-expanded="false" aria-controls="collapseTwo">
                                        Teslimat
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse"
                                     data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aspernatur
                                        atque
                                        consequuntur dicta, distinctio doloremque ducimus est harum illo in itaque iure
                                        magnam
                                        mollitia, odio odit officiis quam quasi qui recusandae rem saepe sit ut! Ab
                                        accusantium
                                        alias architecto asperiores aut corporis error est eveniet fugiat id mollitia
                                        nam
                                        necessitatibus nisi nulla officiis pariatur quae quaerat quam quia quibusdam,
                                        quos rerum
                                        sed soluta temporibus totam! Dolores eaque eos facilis inventore laboriosam nam
                                        nobis
                                        perferendis, porro provident reprehenderit saepe veritatis. Consequatur
                                        cupiditate
                                        debitis dolorum nisi, provident quae recusandae totam unde velit vitae! Amet
                                        animi autem
                                        consectetur consequuntur cupiditate deserunt libero, molestiae molestias nihil
                                        officiis
                                        porro quo, sapiente totam voluptates voluptatibus! Alias atque delectus eaque
                                        esse
                                        facilis, ipsam minus recusandae tenetur velit! Expedita iste laudantium omnis
                                        quis
                                        rerum? Eligendi laudantium molestias neque obcaecati officiis quis! Asperiores
                                        at aut
                                        deleniti dolorem fuga neque perferendis quod sed sit ullam. Accusamus
                                        accusantium alias
                                        atque blanditiis dolore doloribus dolorum fugiat illo illum inventore laborum
                                        nesciunt,
                                        nostrum odio optio pariatur, possimus qui reiciendis tempora tenetur veniam,
                                        voluptate
                                        voluptatibus voluptatum. Cum debitis doloremque, dolores eligendi esse facere
                                        inventore
                                        iure libero maxime non omnis provident quaerat, quibusdam ratione repudiandae
                                        sint
                                        tempore. Ab ad est impedit magnam quidem repudiandae vero?
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ProductDetail
