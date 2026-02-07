import React from 'react';
import { useTranslation } from 'react-i18next';
import classes from './Move.module.scss';
import Button from "../../Button/Button.jsx";
import { Fade } from "react-awesome-reveal";

import bg from '../../../assets/images/move/move-bg.png';
import bgMobile from '../../../assets/images/move/move-bg-mobile.png';
import ellipse1 from '../../../assets/images/move/ellipse1.svg';
import ellipse2 from '../../../assets/images/move/ellipse2.svg';

const Move = () => {
    const { t } = useTranslation();

    return (
        <section className={classes.move}>
            <div className={`${classes.container} container`}>
                <div className={classes.moveContent}>
                    <Fade direction="up" delay={10}>
                        <h2 className={classes.moveContentTitle}>{t('move.title')}</h2>
                    </Fade>
                    <Fade direction="up" delay={25}>
                        <div className={classes.moveContentText}>{t('move.text')}</div>
                        <Button
                            text={t('button.start')}
                            variant="content"
                        />
                    </Fade>
                    <div className={classes.moveContentBg}>
                        <picture>
                            <source srcSet={bgMobile} media="(max-width: 768px)" />
                            <img src={bg} alt="" loading="lazy" />
                        </picture>
                    </div>
                    <div className={classes.ellipseWrapper1}>
                        <Fade direction="right" delay={15}>
                            <div className={classes.ellipse1}>
                                <img src={ellipse1} alt="" loading="lazy" />
                            </div>
                        </Fade>
                    </div>
                    <div className={classes.ellipseWrapper2}>
                        <Fade direction="left" delay={15}>
                            <div className={classes.ellipse2}>
                                <img src={ellipse2} alt="" loading="lazy" />
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Move;
