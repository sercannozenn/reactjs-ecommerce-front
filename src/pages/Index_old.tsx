import { useEffect, useRef, useState } from "react";

import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Autoplay} from 'swiper/modules';
import { SliderService } from "../api/services/SliderService";
import { Slider } from "../types/Slider";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/navigation";
// @ts-ignore
import "swiper/css/pagination";
// @ts-ignore
import "swiper/css/scrollbar";

import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { TfiAnnouncement } from "react-icons/tfi";
import { FcCalendar } from "react-icons/fc";

import urun from '../assets/images/urun1.webp';
import {parseInlineStyle} from "../utils/style.ts";
import {Product} from "../types/Product.ts";
import {ProductService} from "../api/services/ProductService.ts";
// import slider from '../assets/images/slider.jpg';

function Index() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const timelineData = [
        {
            id: 1,
            date: "2024-01-01",
            title: "Başlangıç",
            description: "Bu bizim başlangıcımız.",
            icon: <TfiAnnouncement/>, // Dinamik ikon
            iconStyle: {background: "rgb(33, 150, 243)", color: "#fff"}, // İkon stili
        },
        {
            id: 2,
            date: "2024-02-01",
            title: "İlerleme",
            description: "Proje ilerliyor.",
            icon: <FcCalendar/>, // Dinamik ikon
            iconStyle: {background: "rgb(16, 204, 82)", color: "#fff"}, // İkon stili
        },
        {
            id: 3,
            date: "2024-03-01",
            title: "Tamamlanma",
            description: "Proje tamamlandı.",
            icon: <FcCalendar/>, // Dinamik ikon
            iconStyle: {background: "rgb(233, 30, 99)", color: "#fff"}, // İkon stili
        },
    ];
    const [visibleCount, setVisibleCount] = useState(2); // Başlangıçta 3 öğe göster
    const [sliders, setSliders] = useState<Slider[]>([]);
    const [latestProducts, setLatestProducts] = useState<Product[]>([]);

    // Gösterilecek öğeleri hesapla
    const visibleData = timelineData.slice(0, visibleCount);

    // "Load More" butonuna tıklandığında öğe sayısını artır
    const loadMore = () => {
        setVisibleCount((prevCount) => prevCount + 2); // 2 adet daha ekle
    };

    useEffect(() => {
        const fetchSlider = async () => {
            try {
                const data = await SliderService.getAll();
                setSliders(data.filter(item => item.is_active)); // sadece aktifler
            } catch (error) {
                console.error("Slider verisi çekilirken hata:", error);
            }
        };
        const fetchLatestProducts = async () => {
            try {
                const data = await ProductService.getLatest(8);
                setLatestProducts(data);
            } catch (error) {
                console.error("Ürünler çekilirken hata:", error);
            }
        };


        fetchSlider();
        fetchLatestProducts()
    }, []);


    return (
        <>
            <section className="slider position-relative bg-orange mt-2">
                <Swiper
                    modules={[Navigation]}
                    navigation={true}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                >
                    {sliders.map((slider) => (
                        <SwiperSlide key={slider.id}>
                            <div className="slide">
                                <img src={slider.path_url} alt="slider" />
                            </div>
                            <div className="slider-title">
                                <div className="title-wrapper">
                                    <h3
                                        className="font-playfair fw-bold-600"
                                        style={{
                                            color: slider.row_1_color,
                                            ...parseInlineStyle(slider.row_1_css || '')
                                        }}
                                    >
                                        {slider.row_1_text}
                                    </h3>
                                    <h2
                                        className="fw-bold-600 text-white"
                                        style={{
                                            color: slider.row_2_color,
                                            ...parseInlineStyle(slider.row_2_css || '')
                                        }}
                                    >
                                        {slider.row_2_text}
                                    </h2>
                                    <a
                                        href={slider.button_url}
                                        target={slider.button_target}
                                        className="btn btn-outline-dark text-center mt-3"
                                        style={{
                                            color: slider.button_color,
                                            ...parseInlineStyle(slider.button_css || '')
                                        }}
                                    >
                                        {slider.button_text}
                                    </a>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>

            <div className="container-fluid px-0">
                <section className="latest-added-products position-relative my-5 p-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 position-relative">
                                <h3 className="fw-bold-600">Yeni Gelenler</h3>
                                <div className="swiper-button-prev" ref={prevRef}></div>
                                <div className="swiper-button-next" ref={nextRef}></div>
                            </div>
                            <div className="latest-added-swiper mt-4">
                                <Swiper
                                    navigation={{
                                        prevEl: prevRef.current, // Custom "Prev" butonu
                                        nextEl: nextRef.current, // Custom "Next" butonu
                                    }}
                                    modules={[Navigation, Autoplay]}
                                    autoplay={{
                                        delay: 3000, // Otomatik geçiş için 3 saniye bekle
                                        disableOnInteraction: false, // Kullanıcı dokununca autoplay'i durdurma
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
                                    spaceBetween={10}
                                    slidesPerView={4}
                                    breakpoints={{
                                        200: {
                                            slidesPerView: 1,
                                            autoplay: {
                                                delay: 2000
                                            }
                                        },
                                        780: {
                                            autoplay: {
                                                delay: 3000
                                            }
                                        }
                                    }}
                                    onSlideChange={() => console.log('slide change')}
                                >

                                    {latestProducts.map((product) => (
                                        <SwiperSlide key={product.id}>
                                            <div className="wrapper-product position-relative">
                                                <div className="product-image position-relative">
                                                    <a href="#">
                                                        <img
                                                            src={product.featured_image.image_url}
                                                            className="img-fluid"
                                                            alt={product.name}
                                                        />
                                                    </a>
                                                    <div className="product-overlay">
                                                        <span className="product-tag text-orange-bold fw-bold-600">Yeni</span>
                                                        <a href="#" className="product-brand text-orange-bold fw-bold-600">
                                                            {product.brand?.name || 'Markasız'}
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="product-info text-center pt-3">
                                                    <h4 className="product-title">{product.name}</h4>
                                                    <div
                                                        className="text-muted product-description"
                                                        dangerouslySetInnerHTML={{ __html: product.short_description }}
                                                    />
                                                    <a href="#" className="product-price text-orange-bold">
                                                        {product.latest_price?.price_discount || product.latest_price?.price} TL
                                                    </a>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}







                                    <SwiperSlide>
                                        <div className="wrapper-product position-relative">
                                            <div className="product-image position-relative">
                                                <a href="">
                                                    <img src={urun} className="img-fluid" alt="Adidas"/>
                                                </a>
                                                <div className="product-overlay">
                                                    <span className="product-tag text-orange-bold fw-bold-600">Yeni</span>
                                                    <span className="favorite"><i className="bi bi-heart"></i></span>
                                                    <span className="un-favorite"><i
                                                        className="bi bi-heart-fill"></i></span>
                                                    <a href="" className="product-brand text-orange-bold fw-bold-600">
                                                        Adidas
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product-info text-center pt-3">
                                                <h4 className="product-title">Niteball</h4>
                                                <div className="text-muted product-description">
                                                    Unisex Sneaker
                                                </div>
                                                <a href="" className="product-price text-orange-bold">
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
                                                    <span className="product-tag text-orange-bold fw-bold-600">Yeni</span>
                                                    <span className="favorite"><i className="bi bi-heart"></i></span>
                                                    <span className="un-favorite"><i
                                                        className="bi bi-heart-fill"></i></span>
                                                    <a href="" className="product-brand text-orange-bold fw-bold-600">
                                                        Adidas
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product-info text-center pt-3">
                                                <h4 className="product-title">Niteball</h4>
                                                <div className="text-muted product-description">
                                                    Unisex Sneaker
                                                </div>
                                                <a href="" className="product-price text-orange-bold">
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
                                                    <span className="product-tag text-orange-bold fw-bold-600">Yeni</span>
                                                    <span className="favorite"><i className="bi bi-heart"></i></span>
                                                    <span className="un-favorite"><i
                                                        className="bi bi-heart-fill"></i></span>
                                                    <a href="" className="product-brand text-orange-bold fw-bold-600">
                                                        Adidas
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product-info text-center pt-3">
                                                <h4 className="product-title">Niteball</h4>
                                                <div className="text-muted product-description">
                                                    Unisex Sneaker
                                                </div>
                                                <a href="" className="product-price text-orange-bold">
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
                                                    <span className="product-tag text-orange-bold fw-bold-600">Yeni</span>
                                                    <span className="favorite"><i className="bi bi-heart"></i></span>
                                                    <span className="un-favorite"><i
                                                        className="bi bi-heart-fill"></i></span>
                                                    <a href="" className="product-brand text-orange-bold fw-bold-600">
                                                        Adidas
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product-info text-center pt-3">
                                                <h4 className="product-title">Niteball</h4>
                                                <div className="text-muted product-description">
                                                    Unisex Sneaker
                                                </div>
                                                <a href="" className="product-price text-orange-bold">
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
                                                    <span className="product-tag text-orange-bold fw-bold-600">Yeni</span>
                                                    <span className="favorite"><i className="bi bi-heart"></i></span>
                                                    <span className="un-favorite"><i
                                                        className="bi bi-heart-fill"></i></span>
                                                    <a href="" className="product-brand text-orange-bold fw-bold-600">
                                                        Adidas
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product-info text-center pt-3">
                                                <h4 className="product-title">Niteball</h4>
                                                <div className="text-muted product-description">
                                                    Unisex Sneaker
                                                </div>
                                                <a href="" className="product-price text-orange-bold">
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
                                                    <span className="product-tag text-orange-bold fw-bold-600">Yeni</span>
                                                    <span className="favorite"><i className="bi bi-heart"></i></span>
                                                    <span className="un-favorite"><i
                                                        className="bi bi-heart-fill"></i></span>
                                                    <a href="" className="product-brand text-orange-bold fw-bold-600">
                                                        Adidas
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product-info text-center pt-3">
                                                <h4 className="product-title">Niteball</h4>
                                                <div className="text-muted product-description">
                                                    Unisex Sneaker
                                                </div>
                                                <a href="" className="product-price text-orange-bold">
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
                <section className="requested-products-form bg-light my-5 p-5 py-lg-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <h3>Kermesimizde Görmek İstediğiniz Ürünler</h3>
                                <p className="my-4 my-lg-0">Kermesimizde yer almasını istediğiniz ürün veya ürün gruplarına dair taleplerinizi
                                    bizimle paylaşabilirsiniz. Formu doldurarak isteklerinizi kolayca
                                    iletebilirsiniz.</p>
                            </div>
                            <div className="col-md-6">
                                <form action="" className="row">
                                    <input type="text" className="form-control" placeholder="Adınız Soyadınız"/>
                                    <input type="text" className="form-control mt-2" placeholder="Email Adresiniz"/>
                                    <textarea className="form-control mt-2" placeholder="Ürün ve diğer istekleriniz"></textarea>
                                    <button type="submit" className="btn btn-success mt-2">Gönder</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="events my-5 p-5 py-lg-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 px-0">
                                <h3>Etkinlik ve Duyurular</h3>
                                <VerticalTimeline className="w-100">
                                    {visibleData.map((item) => (
                                        <VerticalTimelineElement
                                            className="vertical-timeline-element--work"
                                            textClassName="bg-orange-bold"
                                            contentStyle={{ color: '#fff'}}
                                            contentArrowStyle={{borderRight: '7px solid  rgb(33, 150, 243)'}}
                                            key={item.id}
                                            date={item.date}
                                            dateClassName="text-dark"
                                            icon={item.icon}
                                            iconStyle={item.iconStyle}
                                        >
                                            <h3>{item.title}</h3>
                                            <p>{item.description}</p>
                                        </VerticalTimelineElement>
                                    ))}
                                </VerticalTimeline>

                                {visibleCount < timelineData.length && (
                                    <div style={{textAlign: "center", marginTop: "20px"}}>
                                        <button onClick={loadMore} style={{padding: "10px 20px", fontSize: "16px"}}>
                                            Daha Fazla Yükle
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                </section>
            </div>
        </>
    )
}

export default Index
