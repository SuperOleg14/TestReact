import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import classes from './Client.module.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import arrow from '../../../assets/images/slider-arrow.svg';
import rating from '../../../assets/images/rating.svg';
import photo from '../../../assets/images/client.png';
import { Fade } from "react-awesome-reveal";

const Client = () => {
    const { t } = useTranslation();
    const [swiper, setSwiper] = useState(null);
    const [active, setActive] = useState(0);
    const isMobile = window.innerWidth <= 480;

    const list = [
        {
            photo: photo,
            text: 'client.list1.text',
            name: 'client.list1.name',
            country: 'client.list1.country',
            rating: 'client.list1.rating'
        },
        {
            photo: photo,
            text: 'client.list2.text',
            name: 'client.list2.name',
            country: 'client.list2.country',
            rating: 'client.list2.rating'
        },
        {
            photo: photo,
            text: 'client.list3.text',
            name: 'client.list3.name',
            country: 'client.list3.country',
            rating: 'client.list3.rating'
        },
        {
            photo: photo,
            text: 'client.list3.text',
            name: 'client.list3.name',
            country: 'client.list3.country',
            rating: 'client.list3.rating'
        },
        {
            photo: photo,
            text: 'client.list3.text',
            name: 'client.list3.name',
            country: 'client.list3.country',
            rating: 'client.list3.rating'
        },
    ];

    return (
        <section className={`${classes.client} client`}>
            <div className={`${classes.container} container`}>
                <h2 className="title title--center">{t('client.title')}</h2>
                <Fade direction="up">
                    <div className={classes.clientSlider}>
                        <Swiper
                            modules={[Navigation]}
                            onSwiper={setSwiper}
                            onSlideChange={(s) => setActive(s.realIndex)}
                            centeredSlides
                            spaceBetween={20}
                            loop={true}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                },
                                768: {
                                    slidesPerView: 1.2,
                                },
                                991: {
                                    slidesPerView: 1.8,
                                },
                            }}
                        >
                            {list.map((item, index) => (
                                <SwiperSlide key={index} className={classes.clientSliderItem}>
                                    <div className={classes.clientSliderBlock}>
                                        <div className={classes.clientSliderItemText}>
                                            {t(item.text)}
                                        </div>
                                        <div className={classes.clientSliderItemInfo}>
                                            <div className={classes.flexCenter}>
                                                <div className={classes.clientSliderItemPhoto}>
                                                    <img src={item.photo} alt='client' loading='lazy' />
                                                </div>
                                                <div>
                                                    <div className={classes.clientSliderItemName}>
                                                        {t(item.name)}
                                                    </div>
                                                    <div className={classes.clientSliderItemCountry}>
                                                        {t(item.country)}
                                                    </div>
                                                    {isMobile && (
                                                        <div className={classes.flexCenter}>
                                                            <div className={classes.clientSliderItemRating}>
                                                                {t(item.rating)}
                                                            </div>
                                                            <div className={classes.clientSliderItemRatingPhoto}>
                                                                <img src={rating} alt="Client" loading="lazy" />
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            {!isMobile && (
                                                <div className={classes.flexCenter}>
                                                    <div className={classes.clientSliderItemRating}>
                                                        {t(item.rating)}
                                                    </div>
                                                    <div className={classes.clientSliderItemRatingPhoto}>
                                                        <img src={rating} alt="Client" loading="lazy" />
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </SwiperSlide> ))}
                        </Swiper>

                        <div className={classes.sliderBtn}>
                            <button
                                className={`${classes.sliderBtnItem} ${classes.sliderBtnItemPrev} ${active === 0 ? classes.disabled : ''}`}
                                onClick={() => swiper?.slidePrev()}
                            >
                                <img src={arrow} alt="Prev" />
                            </button>

                            <button
                                className={`${classes.sliderBtnItem} ${
                                    active === list.length - 1 ? classes.disabled : ''
                                }`}
                                onClick={() => swiper?.slideNext()}
                            >
                                <img src={arrow} alt="Next" />
                            </button>
                        </div>
                    </div>
                </Fade>
            </div>
        </section>
    );
};

export default Client;
