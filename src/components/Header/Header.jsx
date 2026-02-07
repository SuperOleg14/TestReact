import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import classes from './Header.module.scss';
import Button from '../Button/Button';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import logo from '../../assets/images/logo.svg';

const Header = () => {
    const { t } = useTranslation();
    const [navOpen, setnavOpen] = useState(false);
    const isMobile = window.innerWidth <= 991;
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header
            className={`header ${classes.header} 
            ${isScrolled ? `${classes.scrolled}` : ''}`}
        >
            <div className={`container ${classes.container}`}>
                <div className={classes.headerContent}>
                    <div className={classes.headerLeft}>
                        <div className={classes.logo}>
                            <img src={logo} alt="Logo" />
                        </div>
                        <LanguageSwitcher />
                    </div>
                    <nav className={`${classes.nav} ${navOpen ? `${classes.open}` : ''}`}>
                        <a href="/">{t('nav.markets')}</a>
                        <a href="/">{t('nav.trading')}</a>
                        <a href="/">{t('nav.accounts')}</a>
                        <a href="/">{t('nav.regulation')}</a>
                        <a href="/">{t('nav.why')}</a>
                        <a href="/">{t('nav.about')}</a>
                        {isMobile && (
                            <Button
                                text={t('button.login')}
                                variant="primary"
                            />
                        )}
                    </nav>
                    {!isMobile && (
                        <Button
                            text={t('button.login')}
                            variant="primary"
                        />
                    )}

                    <button className={classes.burger} onClick={() => setnavOpen(!navOpen)}>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
