import React from 'react';
import { useTranslation } from 'react-i18next';
import classes from './Hero.module.scss';
import Button from "../../Button/Button.jsx";
import { Fade, Reveal } from "react-awesome-reveal";

import bg from '../../../assets/images/hero/hero-bg.png';
import bgMobile from '../../../assets/images/hero/hero-bg-mobile.png';
import ellipse1 from '../../../assets/images/hero/ellipse1.svg';
import ellipse2 from '../../../assets/images/hero/ellipse2.svg';

import photo1 from "../../../assets/images/hero/logo1.png";
import photo2 from "../../../assets/images/hero/logo2.png";
import photo3 from "../../../assets/images/hero/logo3.png";
import photo4 from "../../../assets/images/hero/logo4.png";
import photo5 from "../../../assets/images/hero/logo5.png";

import { keyframes } from "@emotion/react";

export const rotate = keyframes`
  from {
    transform: rotate(20deg);
  }

  to {
    transform: rotate(0deg);
  }
`;

export const fromBottomUp = keyframes`
  from {
    transform: translateY(60px);
  }

  to {
    transform: translateY(0);
  }
`;

const Hero = () => {
    const { t } = useTranslation();

    const list = [
        {
            photo: photo1,
            title: 'hero.title1',
            text: 'hero.text1',
        },
        {
            photo: photo2,
            title: 'hero.title2',
            text: 'hero.text2',
        },
        {
            photo: photo3,
            title: 'hero.title3',
            text: 'hero.text3',
        },
        {
            photo: photo4,
            title: 'hero.title4',
            text: 'hero.text4',
        },
        {
            photo: photo5,
            title: 'hero.title5',
            text: 'hero.text5',
        }
    ];

    return (
        <section className={classes.hero}>
            <div className="container">
                <div className={classes.heroContent}>
                    <div className={classes.heroContentTop}>
                       <div className={classes.heroContentPosition}>
                           <Fade direction="left" delay={10}>
                               <h2 className={classes.heroContentTitle}>{t('hero.title')}</h2>
                           </Fade>
                           <Fade direction="left" delay={40}>
                               <div className={classes.heroContentText}>{t('hero.text')}</div>
                               <Button
                                   text={t('button.start')}
                                   variant="secondary"
                               />
                           </Fade>
                       </div>
                        <div className={classes.heroContentBg}>
                            <Reveal keyframes={fromBottomUp} delay={15} duration={900}>
                                <picture>
                                    <source srcSet={bgMobile} media="(max-width: 768px)" />
                                    <img src={bg} alt="" loading="lazy" />
                                </picture>
                            </Reveal>
                        </div>
                        <div className={classes.ellipseWrapper1}>
                            <Reveal keyframes={rotate} delay={15} duration={1200}>
                                <div className={classes.ellipse2}>
                                    <img src={ellipse1} alt="" loading="lazy" />
                                </div>
                            </Reveal>
                        </div>
                        <div className={classes.ellipseWrapper2}>
                            <Reveal keyframes={rotate} delay={15} duration={1200}>
                                <div className={classes.ellipse2}>
                                    <img src={ellipse2} alt="" loading="lazy" />
                                </div>
                            </Reveal>
                        </div>
                    </div>
                    <div className={classes.heroContentBottom}>
                        <Fade direction="left" delay={70}>
                            <div className={classes.table}>
                                <div className={classes.flexCenter}>
                                    <div className={classes.tableHead}>{t('hero.list1')}</div>
                                    <div className={classes.tableHead}>{t('hero.list2')}</div>
                                </div>
                                {list.map((item, index) => (
                                    <div className={classes.flexCenter} key={index}>
                                        <div className={classes.tableTitle}>
                                            <div className={classes.tableTitlePhoto}>
                                                <img src={item.photo} alt='Hero' loading='lazy' />
                                            </div>
                                            {t(item.title)}
                                        </div>
                                        <div className={classes.tableText}>
                                            {t(item.text)}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
