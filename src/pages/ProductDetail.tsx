import {useRef} from "react";
import React from "react";

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

function ProductDetail() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const [thumbsSwiper, setThumbsSwiper] = React.useState(null);
    const sliders = [
        {
            image: "http://eticaret.com/storage/files/1/laravel_ozgecmis_resume_projesi_16.png"
        },
        {
            image: "http://eticaret.com/storage/files/1/laravel_ozgecmis_resume_projesi_16.png"
        },
        {
            image: "http://eticaret.com/storage/files/1/laravel_ozgecmis_resume_projesi_16.png"
        },
        {
            image: "http://eticaret.com/storage/files/1/laravel_ozgecmis_resume_projesi_16.png"
        },
        {
            image: "http://eticaret.com/storage/files/1/laravel_ozgecmis_resume_projesi_16.png"
        },
        {
            image: "http://eticaret.com/storage/files/1/laravel_ozgecmis_resume_projesi_16.png"
        },
    ]
    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
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
                                {sliders.map((slider) => (
                                    <SwiperSlide className="big-slider big-image">
                                        <div className="swiper-zoom-container">
                                            <img className="w-100"
                                                 src={slider.image}
                                                 alt="Product"/>
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
                                    // @ts-ignore
                                    swiper.params.navigation.prevEl = prevRef.current;
                                    // @ts-ignore
                                    swiper.params.navigation.nextEl = nextRef.current;
                                    swiper.navigation.init();
                                    swiper.navigation.update();
                                }}
                                // @ts-ignore
                                onSwiper={setThumbsSwiper}
                                spaceBetween={10}
                                slidesPerView={4}
                                watchSlidesProgress
                                className="thumb-sliders"
                            >
                                {sliders.map((slider) => (
                                    <SwiperSlide>
                                        <img className="thumb-image w-100"
                                             src={slider.image}
                                             alt="Thumbnail"/>
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
                        <h4 className="fw-bold-600">Georgia Washington 2</h4>
                        <div className="price text-orange fw-bold-600">369.00 TL</div>
                        <hr className="mt-5"/>
                        <h6>Erkek Bot</h6>
                        <hr/>
                        <h6>marka1</h6>
                        <hr/>
                        <p className="product-short-description font-playfair">
                            Earum asperiores lab
                        </p>
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
                                        <select id="footSize" className="form-control text-center">
                                            <option disabled={true} selected={true}>Beden</option>
                                            <option value="7">40</option>
                                            <option value="8">36</option>
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
                        <div className="discount-rate">
                            %20
                            <span className="d-block">İndirim</span>
                        </div>
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
                                    <div className="accordion-body">
                                        Ullamco exercitation
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
