import React, { FC, useEffect, useState } from 'react';
import { classNames } from '~utils/ClassNames';
import './Navbar.scss';

export interface INavbar extends React.HTMLProps<HTMLDivElement> {
    style?: React.CSSProperties;
}

const Navbar: FC<INavbar> = (props: INavbar) => {
    const { children, className, style } = props;
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        setScrolled(offset > 200);
    };

    const overrideStyles = { ...style } as React.CSSProperties;
    const scrolledClass = scrolled ? 'scrolled' : '';
    const baseClassName = classNames('navbar', scrolledClass, className);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    });

    return (
        <nav {...props} className={baseClassName} style={overrideStyles}>
            {children}
        </nav>
    );
};

export default Navbar;
