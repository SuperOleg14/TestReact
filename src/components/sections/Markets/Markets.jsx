import React from 'react';
import { useTranslation } from 'react-i18next';
import classes from './Markets.module.scss';
import photo1 from '../../../assets/images/markets/markets1.png';
import photo2 from '../../../assets/images/markets/markets2.png';
import { Fade } from "react-awesome-reveal";

const Markets = () => {
    const { t } = useTranslation();

    return (
        <section className={classes.markets}>
            <div className="container">
                <div className={`${classes.marketsTitle} title`}>{t('markets.title')}</div>
                <Fade direction="up">
                    <div className={classes.marketsContent}>
                        <div className={classes.marketsItem}>
                            <div className={classes.marketsItemBg}>
                                <div className={classes.marketsItemTitle}>
                                    {t('markets.list1.title')}
                                </div>
                                <div className={classes.marketsItemNumber}>
                                    {t('markets.list1.number')}
                                </div>
                                <div className={classes.marketsItemProduct}>
                                    {t('markets.product')}
                                </div>
                                <div className={classes.marketsItemPhoto}>
                                    <img src={photo1} alt='Trade' loading='lazy' />
                                </div>
                            </div>
                        </div>
                        <div className={classes.marketsItem}>
                            <div className={classes.marketsItemBg}>
                                <div className={classes.marketsItemTitle}>
                                    {t('markets.list2.title')}
                                </div>
                                <div className={classes.marketsItemNumber}>
                                    {t('markets.list2.number')}
                                </div>
                                <div className={classes.marketsItemProduct}>
                                    {t('markets.product')}
                                </div>
                            </div>
                            <div className={classes.marketsItemBg}>
                                <div className={classes.marketsItemTitle}>
                                    {t('markets.list2.title')}
                                </div>
                                <div className={classes.marketsItemNumber}>
                                    {t('markets.list2.number')}
                                </div>
                                <div className={classes.marketsItemProduct}>
                                    {t('markets.product')}
                                </div>
                            </div>
                        </div>
                        <div className={classes.marketsItem}>
                            <div className={classes.marketsItemBg}>
                                <div className={classes.marketsItemTitle}>
                                    {t('markets.list4.title')}
                                </div>
                                <div className={classes.marketsItemNumber}>
                                    {t('markets.list4.number')}
                                </div>
                                <div className={classes.marketsItemProduct}>
                                    {t('markets.product')}
                                </div>
                                <div className={classes.marketsItemPhoto}>
                                    <img src={photo2} alt='Trade' loading='lazy' />
                                </div>
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
        </section>
    );
};

export default Markets;
