import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
   <main className={styles.main}>
     <div className={styles.principal}>
      <video
        autoPlay
        loop
        muted
        playsInline
        className={styles.backgroundVideo}
      >
        <source src="/Reveal background.mp4" type="video/mp4" />
        Tu navegador no soporta el video.
      </video>
      <div className={styles.content}>
        <h1 className={styles.title}>Somos Reveal Studio</h1>
      </div>
     </div>
     <div className={styles.conocenos}>
      <h2 className={styles.conocenosTitle}>Conócenos más</h2>
      <p className={styles.conocenosDescription}>
        En Reveal Studio transformamos momentos ordinarios en recuerdos extraordinarios. 
        Somos un estudio de fotografía profesional especializado en capturar la esencia 
        auténtica de cada historia, desde bodas íntimas hasta retratos corporativos de 
        alto nivel.
        <br /><br />
        Nuestro enfoque combina técnica fotográfica excepcional con una visión artística 
        única, revelando la belleza natural que existe en cada persona, pareja y momento 
        especial.
      </p>
     </div>
     <div className={styles.servicios}>
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
   </main>
  );
}
