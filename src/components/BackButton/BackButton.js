"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';
import styles from './BackButton.module.css';

const BackButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <a 
      href="#inicio" 
      className={`${styles.scrollToTop} ${!isVisible ? styles.hidden : ''}`}
    >
      <Image 
        src="/backButton.png" 
        alt="Back to top"
        width={26} 
        height={26}
        className={styles.backButtonIcon}
      />
    </a>
  );
};

export default BackButton;