import Image from "next/image";
import styles from './Portafolio.module.css';

const Portafolio = ({ onImageClick }) => {
  return (
    <div id="portafolio" className={styles.portafolio}>
      <h2 className={styles.portafolioTitle}>Conoce un poco de nuestro trabajo...</h2>
      <div className={styles.portafolioGrid}>
        <Image 
          src="/foto1.jpeg" 
          alt="Portafolio foto 1" 
          width={200} 
          height={200}
          className={styles.portafolioImage}
          onClick={() => onImageClick("/foto1.jpeg", "Portafolio foto 1")}
        />
        <Image 
          src="/foto2.jpeg" 
          alt="Portafolio foto 2" 
          width={200} 
          height={200}
          className={styles.portafolioImage}
          onClick={() => onImageClick("/foto2.jpeg", "Portafolio foto 2")}
        />
        <Image 
          src="/foto3.jpeg" 
          alt="Portafolio foto 3" 
          width={200} 
          height={200}
          className={styles.portafolioImage}
          onClick={() => onImageClick("/foto3.jpeg", "Portafolio foto 3")}
        />
        <Image 
          src="/foto4.jpeg" 
          alt="Portafolio foto 4" 
          width={200} 
          height={200}
          className={styles.portafolioImage}
          onClick={() => onImageClick("/foto4.jpeg", "Portafolio foto 4")}
        />
        <Image 
          src="/foto5.jpeg" 
          alt="Portafolio foto 5" 
          width={200} 
          height={200}
          className={styles.portafolioImage}
          onClick={() => onImageClick("/foto5.jpeg", "Portafolio foto 5")}
        />
        <Image 
          src="/foto6.jpeg" 
          alt="Portafolio foto 6" 
          width={200} 
          height={200}
          className={styles.portafolioImage}
          onClick={() => onImageClick("/foto6.jpeg", "Portafolio foto 6")}
        />
        <Image 
          src="/foto7.jpeg" 
          alt="Portafolio foto 7" 
          width={200} 
          height={200}
          className={styles.portafolioImage}
          onClick={() => onImageClick("/foto7.jpeg", "Portafolio foto 7")}
        />
        <Image 
          src="/foto8.jpeg" 
          alt="Portafolio foto 8" 
          width={200} 
          height={200}
          className={styles.portafolioImage}
          onClick={() => onImageClick("/foto8.jpeg", "Portafolio foto 8")}
        />
      </div>
      <a href="https://www.instagram.com/reveal_oficial?igsh=MXc1OGh2cHVuaG5iMQ==" target="_blank" rel="noopener noreferrer" className={styles.contactoItem}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.contactoIcon}>
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="currentColor"/>
        </svg>
        <span className={styles.contactoTexto}>Puedes acceder a más contenido en @reveal_oficial</span>
      </a>
    </div>
  );
};

export default Portafolio;
