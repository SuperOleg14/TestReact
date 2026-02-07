import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import classes from './Why.module.scss';
import { Fade } from "react-awesome-reveal";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import arrow from '../../../assets/images/slider-arrow.svg';

import photo1 from '../../../assets/images/why/why1.svg';
import photo2 from '../../../assets/images/why/why2.svg';
import photo3 from '../../../assets/images/why/why3.svg';
import photo4 from '../../../assets/images/why/why4.svg';
import photo5 from '../../../assets/images/why/why5.svg';
import photo6 from '../../../assets/images/why/why6.svg';

const Why = () => {
    const { t } = useTranslation();
    const [swiper, setSwiper] = useState(null);
    const [active, setActive] = useState(0);

    const list = [
        { photo: photo1, title: 'why.list1.title', text: 'why.list1.text' },
        { photo: photo2, title: 'why.list2.title', text: 'why.list2.text' },
        { photo: photo3, title: 'why.list3.title', text: 'why.list3.text' },
        { photo: photo4, title: 'why.list4.title', text: 'why.list4.text' },
        { photo: photo5, title: 'why.list5.title', text: 'why.list5.text' },
        { photo: photo6, title: 'why.list6.title', text: 'why.list6.text' },
    ];

    return (
        <section className={classes.why}>
            <div className="container">
                <h2 className={`${classes.whyTitle} title`}>{t('why.title')}</h2>
                <Fade direction="up">
                    <div className={classes.whySlider}>
                        <Swiper
                            modules={[Navigation]}
                            onSwiper={setSwiper}
                            onSlideChange={(s) => setActive(s.realIndex)}
                            slidesPerView="auto"
                            spaceBetween={20}
                            loop={false}
                            className={classes.whySliderBlock}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                },
                                768: {
                                    slidesPerView: 2,
                                },
                            }}
                        >
                            {list.map((item, index) => (
                                <SwiperSlide key={index} className={classes.whySliderItem}>
                                    <div className={classes.whySliderItemPhoto}>
                                        <img src={item.photo} alt='Why' loading='lazy' />
                                    </div>
                                    <div className={classes.whySliderItemTitle}>
                                        {t(item.title)}
                                    </div>
                                    <div className={classes.whySliderItemText}>
                                        {t(item.text)}
                                    </div>
                                </SwiperSlide>
                            ))}

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

export default Why;
