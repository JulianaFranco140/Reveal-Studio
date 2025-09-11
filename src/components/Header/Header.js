import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
          <Image
            src="/reveal-icono.png"
            alt="Reveal Logo"
            width={40}
            height={40}
          />
          <Image
            src="/reveal.png"
            alt="Reveal Text"
            width={120}
            height={30}
          />
      </div>
      <nav className={styles.navigation}>
        <Link href="/" className={styles.navLink}>
          Inicio
        </Link>
        <Link href="/portafolio" className={styles.navLink}>
          Portafolio
        </Link>
        <Link href="/servicios" className={styles.navLink}>
          Servicios
        </Link>
        <Link href="/equipo" className={styles.navLink}>
          Nuestro equipo
        </Link>
        <Link href="/contacto" className={styles.navLink}>
          Contacto
        </Link>
      </nav>
    </header>
    
  );
};

export default Header;