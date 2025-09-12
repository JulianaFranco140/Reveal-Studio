"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from './Header.module.css';

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    let scrollTimeout;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      
      if (currentScrollY < 50) {
        setIsVisible(true);
      } else {

        if (currentScrollY > lastScrollY) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      }
      
      setLastScrollY(currentScrollY);
    };

    const handleMouseMove = (e) => {
      if (e.clientY <= 100) {
        setIsVisible(true);
      }
    };

    
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove);

    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [lastScrollY]);

  return (
    <header className={`${styles.header} ${!isVisible ? styles.hidden : ''}`}>
      <div className={styles.logo}>
        <Link href="/">
          <Image
            src="/reveal-icono.png"
            alt="Reveal Logo"
            width={40}
            height={40}
            className={styles.logoIcon}
          />
          <Image
            src="/reveal.png"
            alt="Reveal Text"
            width={120}
            height={30}
            className={styles.logoText}
          />
        </Link>
      </div>
      <nav className={styles.navigation}>
        <Link href="#inicio" className={styles.navLink}>
          Inicio
        </Link>
        <Link href="#portafolio" className={styles.navLink}>
          Portafolio
        </Link>
        <Link href="#servicios" className={styles.navLink}>
          Servicios
        </Link>
        <Link href="#equipo" className={styles.navLink}>
          Nuestro equipo
        </Link>
        <Link href="#contacto" className={styles.navLink}>
          Contacto
        </Link>
      </nav>
    </header>
    
  );
};

export default Header;

