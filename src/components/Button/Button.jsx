import React from 'react';
import clsx from 'clsx';
import './Button.scss';

const Button = ({
                    text,
                    link = '#',
                    variant = 'primary',
                }) => {
    return (
        <a href={link} className={clsx('btn', `btn--${variant}`)}>
            {text}
        </a>
    );
};

export default Button;
