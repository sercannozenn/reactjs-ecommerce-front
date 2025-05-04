import {useEffect, useRef, useState} from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { SliderService } from "../api/services/SliderService";
import { Slider } from "../types/Slider";
import { Product } from "../types/Product.ts";
import { ProductService } from "../api/services/ProductService.ts";
import { AnnouncementService } from '../api/services/AnnouncementService';
import { Announcement } from '../types/Announcement';
import {useRouteNavigator} from "../router/RouteHelper.ts";

import {parseInlineStyle} from "../utils/style.ts";


// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/navigation";
// @ts-ignore
import "swiper/css/pagination";
// @ts-ignore
import "swiper/css/scrollbar";

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { TfiAnnouncement } from "react-icons/tfi";
import { FcCalendar } from "react-icons/fc";

import dayjs from 'dayjs';
import 'dayjs/locale/tr';

dayjs.locale('tr');

function Index() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const navigateToRoute = useRouteNavigator();


    const [sliders, setSliders] = useState<Slider[]>([]);
    const [latestProducts, setLatestProducts] = useState<Product[]>([]);


    const [announcements, setAnnouncements] = useState<Announcement[]>([]);
    const [announcementsOffset, setAnnouncementsOffset] = useState(0);
    const [announcementsHasMore, setAnnouncementsHasMore] = useState(true);

    // "Load More" butonuna tıklandığında öğe sayısını artır
    const loadMore = async () => {
        const data = await AnnouncementService.getHomepageItems({ offset: announcementsOffset, limit: 2, is_active: 1 });
        setAnnouncements(prev => [...prev, ...data]);
        setAnnouncementsOffset(prev => prev + data.length);
        if (data.length < 2) {
            setAnnouncementsHasMore(false); // daha fazla veri yok
        }
    };
    const loadMoreAll = () => {
        navigateToRoute('AnnouncementAll');
    }

    const getIconData = (type: string) => {
        if (type === 'announcement') {
            return {
                icon: <TfiAnnouncement />,
                iconStyle: { background: "rgb(33, 150, 243)", color: "#fff" }
            };
        }

        return {
            icon: <FcCalendar />,
            iconStyle: { background: "rgb(16, 204, 82)", color: "#fff" }
        };
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
        const fetchAnnouncements = async () => {
            const data = await AnnouncementService.getHomepageItems({ limit: 2, offset: announcements.length, is_active: 1 });

            setAnnouncements(data);
            setAnnouncementsOffset(data.length);
            setAnnouncementsHasMore(data.length === 2)
        };


        fetchAnnouncements();
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
                                    <h3 className="font-playfair fw-bold-600"
                                        style={{
                                            color: slider.row_1_color,
                                            ...parseInlineStyle(slider.row_1_css || '')
                                        }}>
                                        {slider.row_1_text}
                                    </h3>
                                    <h2 className="fw-bold-600 text-white"
                                        style={{
                                            color: slider.row_2_color,
                                            ...parseInlineStyle(slider.row_2_css || '')
                                        }}>
                                        {slider.row_2_text}
                                    </h2>
                                    <a href={slider.button_url}
                                        target={slider.button_target}
                                        className="btn btn-outline-dark text-center mt-3"
                                        style={{
                                            color: slider.button_color,
                                            ...parseInlineStyle(slider.button_css || '')
                                        }}>
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
                                                        {product.final_price || product.latest_price?.price_discount || product.latest_price?.price} TL
                                                    </a>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}

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
                                    {announcements.map((item) => {
                                        const { icon, iconStyle } = getIconData(item.type);

                                        return (
                                            <VerticalTimelineElement
                                                className="vertical-timeline-element--work"
                                                textClassName="bg-orange-bold"
                                                contentStyle={{ color: '#fff'}}
                                                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                                                key={item.id}
                                                date={dayjs(item.date).format('D MMMM YYYY')}
                                                dateClassName="text-dark"
                                                icon={icon}
                                                iconStyle={iconStyle}
                                            >
                                                <h3>{item.title}</h3>
                                                <div dangerouslySetInnerHTML={{ __html: item.description }} />
                                            </VerticalTimelineElement>
                                        );
                                    })}

                                </VerticalTimeline>

                                {announcementsHasMore && (
                                    <div style={{textAlign: "center", marginTop: "20px"}}>
                                        <button className="me-4" onClick={loadMore} style={{padding: "10px 20px", fontSize: "16px"}}>
                                            Daha Fazla Yükle
                                        </button>
                                        <button onClick={loadMoreAll} style={{padding: "10px 20px", fontSize: "16px"}}>
                                            Tümünü Göster
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
