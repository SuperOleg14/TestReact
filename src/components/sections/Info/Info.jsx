import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import classes from './Info.module.scss';
import photo1 from '../../../assets/images/info/info1.png';
import photo2 from '../../../assets/images/info/info2.png';
import photo3 from '../../../assets/images/info/info3.png';
import { Fade } from "react-awesome-reveal";
import { keyframes } from '@emotion/react';

const scaleIn = keyframes`
  from {
    opacity: 0;
    transform: scale(1.08);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const Info = () => {
    const { t } = useTranslation();

    const list = [
        {
            photo: photo1,
            title: 'info.list1.title',
            text: 'info.list1.text',
        },
        {
            photo: photo2,
            title: 'info.list2.title',
            text: 'info.list2.text',
        },
        {
            photo: photo3,
            title: 'info.list3.title',
            text: 'info.list3.text',
        },
    ];

    return (
        <section className={classes.info}>
            <div className="container">
                <div className={classes.infoContent}>
                    <div className={classes.infoBlock}>
                        {list.map((item, index) => (
                            <div className={classes.infoItem} key={index}>
                                <div className={classes.infoItemInfo}>
                                    <Fade direction="right" delay={100 * index}>
                                        {item.title && (
                                            <div className={classes.infoItemTitle}>
                                                {t(item.title)}
                                            </div>
                                        )}
                                        <div className={classes.infoItemText}>
                                            {t(item.text)}
                                        </div>
                                    </Fade>
                                </div>
                                <div className={classes.infoItemPhoto}>
                                    <Fade
                                        keyframes={scaleIn}
                                        duration={600}
                                        delay={100 * index}
                                        triggerOnce
                                    >
                                        <img src={item.photo} alt='Trade' loading='lazy' />
                                    </Fade>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Info;
