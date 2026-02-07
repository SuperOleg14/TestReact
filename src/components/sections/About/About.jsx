import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import classes from './About.module.scss';
import photo1 from '../../../assets/images/about/about1.svg';
import photo2 from '../../../assets/images/about/about2.svg';
import photo3 from '../../../assets/images/about/about3.svg';
import photo4 from '../../../assets/images/about/about4.svg';
import photo5 from '../../../assets/images/about/about5.svg';
import { Fade } from "react-awesome-reveal";

const About = () => {
    const { t } = useTranslation();

    const list = [
        {
            photo: photo1,
            title: 'about.list1.title',
            text: 'about.list1.text',
        },
        {
            photo: photo2,
            title: 'about.list2.title',
            text: 'about.list2.text',
        },
        {
            photo: photo3,
            title: 'about.list3.title',
            text: 'about.list3.text',
        },
        {
            photo: photo4,
            text: 'about.list4.text',
        },
        {
            photo: photo5,
            text: 'about.list5.text',
        },
    ];

    return (
        <section className={classes.about}>
            <div className="container">
                <div className={classes.aboutContent}>
                    {list.map((item, index) => (
                        <Fade
                            direction={index < 3 ? "right" : "left"}
                            delay={100 * index}
                            key={index}
                        >
                            <div className={classes.aboutItem}>
                                <div className={classes.aboutItemPhoto}>
                                    <img src={item.photo} alt='Trade' loading='lazy' />
                                </div>
                                <div className={classes.aboutItemInfo}>
                                    {item.title && (
                                        <div className={classes.aboutItemTitle}>
                                            {t(item.title)}
                                        </div>
                                    )}
                                    <div className={classes.aboutItemText}>
                                        <Trans i18nKey={item.text} components={{ span: <span /> }} />
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

export default About;
