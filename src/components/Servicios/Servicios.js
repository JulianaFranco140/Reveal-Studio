import Image from "next/image";
import styles from './Servicios.module.css';

const Servicios = () => {
  return (
    <div id="servicios" className={styles.servicios}>
      <h2 className={styles.serviciosTitle}>Nuestros servicios</h2>
      <div className={styles.serviciosGrid}>
        <div className={styles.servicioCard}>
          <Image 
            src="/moda-comercial.png" 
            alt="Fotografía de moda comercial" 
            width={50} 
            height={50}
            className={styles.servicioIcon}
          />
          <h3 className={styles.servicioTitulo}>Fotografía de moda comercial</h3>
        </div>
        <div className={styles.servicioCard}>
          <Image 
            src="/moda-editorial.png" 
            alt="Fotografía de moda editorial" 
            width={50} 
            height={50}
            className={styles.servicioIcon}
          />
          <h3 className={styles.servicioTitulo}>Fotografía de moda editorial</h3>
        </div>
        <div className={styles.servicioCard}>
          <Image 
            src="/fotografia-producto.png" 
            alt="Fotografía de producto" 
            width={50} 
            height={50}
            className={styles.servicioIcon}
          />
          <h3 className={styles.servicioTitulo}>Fotografía de producto</h3>
        </div>
        <div className={styles.servicioCard}>
          <Image 
            src="/fotografia-eventos.png" 
            alt="Fotografía para eventos" 
            width={50} 
            height={50}
            className={styles.servicioIcon}
          />
          <h3 className={styles.servicioTitulo}>Fotografía para eventos</h3>
        </div>
        <div className={styles.servicioCard}>
          <Image 
            src="/book-fotografico.png" 
            alt="Book fotográfico" 
            width={50} 
            height={50}
            className={styles.servicioIcon}
          />
          <h3 className={styles.servicioTitulo}>Book fotográfico</h3>
        </div>
        <div className={styles.servicioCard}>
          <Image 
            src="/videos.png" 
            alt="Videos" 
            width={50} 
            height={50}
            className={styles.servicioIcon}
          />
          <h3 className={styles.servicioTitulo}>Videos</h3>
        </div>
        <div className={styles.servicioCard}>
          <Image 
            src="/editar-videos.png" 
            alt="Edición de videos" 
            width={50} 
            height={50}
            className={styles.servicioIcon}
          />
          <h3 className={styles.servicioTitulo}>Edición de videos</h3>
        </div>
      </div>
    </div>
  );
};

export default Servicios;
