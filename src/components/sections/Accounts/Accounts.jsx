import React from 'react';
import { useTranslation } from 'react-i18next';
import classes from './Accounts.module.scss';
import Button from "../../Button/Button.jsx";
import { Fade } from "react-awesome-reveal";

const accounts = () => {
    const { t } = useTranslation();

    const list = [
        {
            title: 'accounts.list1.title',
            price: 'accounts.list1.price',
            text1: 'accounts.list1.text1',
            text2: 'accounts.list1.text2',
        },
        {
            title: 'accounts.list2.title',
            price: 'accounts.list2.price',
            text1: 'accounts.list2.text1',
            text2: 'accounts.list2.text2',
        },
        {
            title: 'accounts.list3.title',
            price: 'accounts.list3.price',
            text1: 'accounts.list3.text1',
            text2: 'accounts.list3.text2',
        },
    ];

    return (
        <section className={classes.accounts}>
            <div className="container">
                <div className={`${classes.accountsTitle} title`}>{t('accounts.title')}</div>
                <Fade direction="up">
                    <div className={classes.accountsContent}>
                        {list.map((item, index) => (
                            <div className={classes.accountsContentItem}>
                                <div className={classes.accountsContentItemBg}>
                                    <div className={classes.accountsContentItemTop}>
                                        <div className={classes.accountsContentItemTitle}>
                                            {t(item.title)}
                                        </div>
                                        <div className={classes.flexCenter}>
                                            <div className={classes.accountsContentItemPrice}>
                                                {t(item.price)}
                                            </div>
                                            <div className={classes.accountsContentItemDeposit}>
                                                {t('accounts.deposit')}
                                            </div>
                                        </div>
                                    </div>
                                    <ul>
                                        <li>
                                            {t(item.text1)}
                                        </li>
                                        <li>
                                            {t(item.text2)}
                                        </li>
                                    </ul>
                                    <div className={classes.accountsContentItemBtn}>
                                        <Button
                                            text={t('button.start')}
                                            variant="content"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Fade>
            </div>
        </section>
    );
};

export default accounts;
