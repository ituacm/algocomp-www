import { useRef, useEffect } from 'react'

import styles from './Navigation.module.scss'


export default function Navigation() {
    const headerRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            document.documentElement.style.setProperty(
                '--scroll-padding',
                headerRef.current.offsetHeight + parseFloat(
                        window
                            .getComputedStyle(headerRef.current)
                            .getPropertyValue('margin-top')
                    ) + 'px'
            );
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [headerRef]);

    return (
        <header ref={headerRef} className="bd">
            <a href="/#homepage">
                <img src="/img/svg/logo-full.svg" />
            </a>
            <div className={styles['buttons']}>
                <a href="/#details" className={styles['wide-screen-button']}>
                    Hakkında
                </a>
                <a href="/#timeline">Zaman Çizelgesi</a>
                <a href="/#awards">Ödüller</a>
                <a href="/#format">Format</a>
                <a href="/#faq">SSS</a>
            </div>
            <div className={styles['rigth-button']}>
                <button 
                    className="rounded-acm-button"
                    onClick={() => window.open(import.meta.env.VITE_REGISTRATION_LINK, '_blank')}
                >
                    Kayıt
                </button>
            </div>
        </header>
    );
}
