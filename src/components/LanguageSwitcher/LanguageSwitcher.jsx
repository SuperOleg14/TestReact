import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import arrow from '../../assets/images/arrow-down.svg';
import './LanguageSwitcher.scss';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const [open, setOpen] = useState(false);

    const changeLang = (lang) => {
        i18n.changeLanguage(lang);
        setOpen(false);
    };

    return (
        <div className="lang">
            <button
                onClick={() => setOpen(!open)}
                className="lang__current"
            >
                {i18n.language.toUpperCase()}
                <img
                    src={arrow}
                    alt="arrow"
                    className={`lang__arrow ${open ? 'open' : ''}`}
                />
            </button>

            {open && (
                <div className="lang__dropdown">
                    <button onClick={() => changeLang('en')}>EN</button>
                    <button onClick={() => changeLang('es')}>ES</button>
                </div>
            )}
        </div>
    );
};

export default LanguageSwitcher;