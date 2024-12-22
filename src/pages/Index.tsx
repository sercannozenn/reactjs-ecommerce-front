import {useRef} from "react";

import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';

// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/navigation";
// @ts-ignore
import "swiper/css/pagination";
// @ts-ignore
import "swiper/css/scrollbar";
import urun from '../assets/images/urun1.webp';
import slider from '../assets/images/slider.jpg';

function Index() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    return (
        <>
            <section className="slider position-relative bg-orange mt-2">
                <Swiper
                    modules={[Navigation]}
                    navigation={true}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide>
                        <div className="slide">
                            <img src={slider}
                                 alt="slider"/>
                        </div>
                        <div className="slider-title">
                            <div className="title-wrapper">
                                <h3 className="font-playfair fw-bold-600">
                                    1112
                                </h3>
                                <h2 className="fw-bold-600 text-white">
                                    22
                                </h2>
                                <a href="#" target="self" className="btn btn-outline-dark text-center mt-3">
                                    tıkla
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide">
                            <img src={slider}
                                 alt="slider"/>
                        </div>
                        <div className="slider-title">
                            <div className="title-wrapper">
                                <h3 className="font-playfair fw-bold-600">
                                    1112
                                </h3>
                                <h2 className="fw-bold-600 text-white">
                                    22
                                </h2>
                                <a href="#" target="self" className="btn btn-outline-dark text-center mt-3">
                                    tıkla
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>


                </Swiper>
            </section>
            <div className="container">
                <section className="latest-added-products position-relative my-5 p-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 position-relative">
                                <h3 className="fw-bold-500">YENİ GELENLER</h3>
                                <div className="swiper-button-prev" ref={prevRef}></div>
                                <div className="swiper-button-next" ref={nextRef}></div>
                            </div>
                            <div
                                className="latest-added-swiper mt-4">
                                <Swiper
                                    navigation={{
                                        prevEl: prevRef.current, // Custom "Prev" butonu
                                        nextEl: nextRef.current, // Custom "Next" butonu
                                    }}
                                    onInit={(swiper) => {
                                        // Butonları Swiper başlatıldığında güncelle
                                        // @ts-ignore
                                        swiper.params.navigation.prevEl = prevRef.current;
                                        // @ts-ignore
                                        swiper.params.navigation.nextEl = nextRef.current;
                                        swiper.navigation.init();
                                        swiper.navigation.update();
                                    }}
                                    modules={[Navigation]}
                                    spaceBetween={10}
                                    slidesPerView={4}
                                    onSlideChange={() => console.log('slide change')}
                                >
                                    <SwiperSlide>
                                        <div className="wrapper-product position-relative">
                                            <div className="product-image position-relative">
                                                <a href="">
                                                    <img src={urun} className="img-fluid" alt="Adidas"/>
                                                </a>
                                                <div className="product-overlay">
                                                    <span className="product-tag text-orange fw-bold-600">Yeni</span>
                                                    <span className="favorite"><i className="bi bi-heart"></i></span>
                                                    <span className="un-favorite"><i
                                                        className="bi bi-heart-fill"></i></span>
                                                    <a href="" className="product-brand text-orange fw-bold-600">
                                                        Adidas
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product-info text-center pt-3">
                                                <h4 className="product-title">Niteball</h4>
                                                <div className="text-muted product-description">
                                                    Unisex Sneaker
                                                </div>
                                                <a href="" className="product-price text-orange">
                                                    1.299,00 TL
                                                </a>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="wrapper-product position-relative">
                                            <div className="product-image position-relative">
                                                <a href="">
                                                    <img src={urun} className="img-fluid" alt="Adidas"/>
                                                </a>
                                                <div className="product-overlay">
                                                    <span className="product-tag text-orange fw-bold-600">Yeni</span>
                                                    <span className="favorite"><i className="bi bi-heart"></i></span>
                                                    <span className="un-favorite"><i
                                                        className="bi bi-heart-fill"></i></span>
                                                    <a href="" className="product-brand text-orange fw-bold-600">
                                                        Adidas
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product-info text-center pt-3">
                                                <h4 className="product-title">Niteball</h4>
                                                <div className="text-muted product-description">
                                                    Unisex Sneaker
                                                </div>
                                                <a href="" className="product-price text-orange">
                                                    1.299,00 TL
                                                </a>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="wrapper-product position-relative">
                                            <div className="product-image position-relative">
                                                <a href="">
                                                    <img src={urun} className="img-fluid" alt="Adidas"/>
                                                </a>
                                                <div className="product-overlay">
                                                    <span className="product-tag text-orange fw-bold-600">Yeni</span>
                                                    <span className="favorite"><i className="bi bi-heart"></i></span>
                                                    <span className="un-favorite"><i
                                                        className="bi bi-heart-fill"></i></span>
                                                    <a href="" className="product-brand text-orange fw-bold-600">
                                                        Adidas
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product-info text-center pt-3">
                                                <h4 className="product-title">Niteball</h4>
                                                <div className="text-muted product-description">
                                                    Unisex Sneaker
                                                </div>
                                                <a href="" className="product-price text-orange">
                                                    1.299,00 TL
                                                </a>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="wrapper-product position-relative">
                                            <div className="product-image position-relative">
                                                <a href="">
                                                    <img src={urun} className="img-fluid" alt="Adidas"/>
                                                </a>
                                                <div className="product-overlay">
                                                    <span className="product-tag text-orange fw-bold-600">Yeni</span>
                                                    <span className="favorite"><i className="bi bi-heart"></i></span>
                                                    <span className="un-favorite"><i
                                                        className="bi bi-heart-fill"></i></span>
                                                    <a href="" className="product-brand text-orange fw-bold-600">
                                                        Adidas
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product-info text-center pt-3">
                                                <h4 className="product-title">Niteball</h4>
                                                <div className="text-muted product-description">
                                                    Unisex Sneaker
                                                </div>
                                                <a href="" className="product-price text-orange">
                                                    1.299,00 TL
                                                </a>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="wrapper-product position-relative">
                                            <div className="product-image position-relative">
                                                <a href="">
                                                    <img src={urun} className="img-fluid" alt="Adidas"/>
                                                </a>
                                                <div className="product-overlay">
                                                    <span className="product-tag text-orange fw-bold-600">Yeni</span>
                                                    <span className="favorite"><i className="bi bi-heart"></i></span>
                                                    <span className="un-favorite"><i
                                                        className="bi bi-heart-fill"></i></span>
                                                    <a href="" className="product-brand text-orange fw-bold-600">
                                                        Adidas
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product-info text-center pt-3">
                                                <h4 className="product-title">Niteball</h4>
                                                <div className="text-muted product-description">
                                                    Unisex Sneaker
                                                </div>
                                                <a href="" className="product-price text-orange">
                                                    1.299,00 TL
                                                </a>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="wrapper-product position-relative">
                                            <div className="product-image position-relative">
                                                <a href="">
                                                    <img src={urun} className="img-fluid" alt="Adidas"/>
                                                </a>
                                                <div className="product-overlay">
                                                    <span className="product-tag text-orange fw-bold-600">Yeni</span>
                                                    <span className="favorite"><i className="bi bi-heart"></i></span>
                                                    <span className="un-favorite"><i
                                                        className="bi bi-heart-fill"></i></span>
                                                    <a href="" className="product-brand text-orange fw-bold-600">
                                                        Adidas
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product-info text-center pt-3">
                                                <h4 className="product-title">Niteball</h4>
                                                <div className="text-muted product-description">
                                                    Unisex Sneaker
                                                </div>
                                                <a href="" className="product-price text-orange">
                                                    1.299,00 TL
                                                </a>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                </Swiper>
                            </div>
                        </div>

                    </div>
                </section>
            </div>

        </>
    )
}

export default Index
