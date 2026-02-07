import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import classes from './Trade.module.scss';
import photo1 from '../../../assets/images/trade/trade1.svg';
import photo2 from '../../../assets/images/trade/trade2.svg';
import photo3 from '../../../assets/images/trade/trade3.svg';
import photo4 from '../../../assets/images/trade/trade4.svg';
import { Fade } from "react-awesome-reveal";

const Trade = () => {
    const { t } = useTranslation();

    const list = [
        {
            photo: photo1,
            title: 'trade.list1.title',
            text: 'trade.list1.text',
        },
        {
            photo: photo2,
            title: 'trade.list2.title',
            text: 'trade.list2.text',
        },
        {
            photo: photo3,
            title: 'trade.list3.title',
            text: 'trade.list3.text',
        },
        {
            photo: photo4,
            text: 'trade.list4.text',
        },
    ];

    return (
        <section className={classes.trade}>
            <div className="container">
                <h2 className="title title--center">{t('trade.title')}</h2>
                <div className={classes.tradeContent}>
                    {list.map((item, index) => (
                        <Fade
                            direction={index < 2 ? "left" : "right"}
                            delay={100 * index}
                            key={index}
                        >
                            <div className={classes.tradeItem}>
                                <div className={classes.tradeItemPhoto}>
                                    <img src={item.photo} alt='Trade' loading='lazy' />
                                </div>
                                <div className={classes.tradeItemInfo}>
                                    {item.title && (
                                        <div className={classes.tradeItemTitle}>
                                            {t(item.title)}
                                        </div>
                                    )}
                                    <div className={classes.tradeItemText}>
                                        {t(item.text)}
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Trade;
