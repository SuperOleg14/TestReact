import React from "react";
import { useTranslation } from "react-i18next";
import classes from './Footer.module.scss';
import { Fade } from "react-awesome-reveal";
import logo from '../../assets/images/logo.svg';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className={classes.footer}>
            <div className="container">
                <div className={classes.footerContent}>
                    <div className={classes.footerContentTop}>
                        <Fade direction="up" delay={20}>
                            <div className={classes.footerContentTopLogo}>
                                <img loading="lazy" src={logo} alt="Absolute Finance" />
                                <span>{t('footer.title')}</span>
                            </div>
                        </Fade>
                        <Fade direction="up" delay={40}>
                            <div className={classes.footerContentTopNav}>
                                <a href="javascript:void(0)" target='_blank'>{t('footer.nav.client')}</a>
                                <a href="javascript:void(0)" target='_blank'>{t('footer.nav.policy')}</a>
                                <a href="javascript:void(0)" target='_blank'>{t('footer.nav.privacy')}</a>
                            </div>
                        </Fade>
                        <Fade direction="up" delay={60}>
                            <div className={classes.footerContentTopDetails}>
                                <div className={classes.footerContentTopDetailsItem}>
                                    <div className={classes.footerContentTopDetailsItemTitle}>
                                        {t('footer.nav.address.title')}
                                    </div>
                                    <div className={classes.footerContentTopDetailsItemText}>
                                        {t('footer.nav.address.text')}
                                    </div>
                                </div>
                                <div className={classes.footerContentTopDetailsItem}>
                                    <div className={classes.footerContentTopDetailsItemTitle}>
                                        {t('footer.nav.code.title')}
                                    </div>
                                    <div className={classes.footerContentTopDetailsItemText}>
                                        {t('footer.nav.code.text')}
                                    </div>
                                </div>
                                <div className={classes.footerContentTopDetailsItem}>
                                    <div className={classes.footerContentTopDetailsItemTitle}>
                                        {t('footer.nav.mail.title')}
                                    </div>
                                    <div className={classes.footerContentTopDetailsItemText}>
                                        {t('footer.nav.mail.text')}
                                    </div>
                                </div>
                                <div className={classes.footerContentTopDetailsItem}>
                                    <div className={classes.footerContentTopDetailsItemTitle}>
                                        {t('footer.nav.phone.title')}
                                    </div>
                                    <div className={classes.footerContentTopDetailsItemText}>
                                        {t('footer.nav.phone.text')}
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    </div>
                    <Fade direction="up" delay={70}>
                        <div className={classes.footerMap}>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2702.544146963729!2d8.509787876873471!3d47.36229720481519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479009f25f62ca9b%3A0x98d6d6f6143b31b0!2sCaruso%20St%20John%20Architects%20AG!5e0!3m2!1sen!2sen!4v1770419435487"  width="100%" height="226" style={{ border: 0 }} allowFullScreen  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </Fade>
                    <Fade direction="up" delay={100}>
                        <div className={classes.footerInfo}>
                            <div className={classes.footerInfoItem}>
                                <p className={classes.footerInfoItemTitle}>{t('footer.legal.title')}</p>
                                <p className={classes.footerInfoItemText}>{t('footer.legal.text')}</p>
                            </div>
                            <div className={classes.footerInfoItem}>
                                <p className={classes.footerInfoItemTitle}>{t('footer.risk.title')}</p>
                                <p className={classes.footerInfoItemText}>{t('footer.risk.text1')}</p>
                            </div>
                            <div className={classes.footerInfoItem}>
                                <p className={classes.footerInfoItemText}>{t('footer.risk.text2')}</p>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
        </footer>
    );
};

export default Footer;