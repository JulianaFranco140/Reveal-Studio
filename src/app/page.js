import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
   <main id="top" className={styles.main}>
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
     <div className={styles.portafolio}>
      <h2 className={styles.portafolioTitle}>Conoce un poco de nuestro trabajo...</h2>
      <div className={styles.portafolioGrid}>
        <Image 
          src="/foto1.jpeg" 
          alt="Portafolio foto 1" 
          width={200} 
          height={200}
          className={styles.portafolioImage}
        />
        <Image 
          src="/foto2.jpeg" 
          alt="Portafolio foto 2" 
          width={200} 
          height={200}
          className={styles.portafolioImage}
        />
        <Image 
          src="/foto3.jpeg" 
          alt="Portafolio foto 3" 
          width={200} 
          height={200}
          className={styles.portafolioImage}
        />
        <Image 
          src="/foto4.jpeg" 
          alt="Portafolio foto 4" 
          width={200} 
          height={200}
          className={styles.portafolioImage}
        />
        <Image 
          src="/foto5.jpeg" 
          alt="Portafolio foto 5" 
          width={200} 
          height={200}
          className={styles.portafolioImage}
        />
        <Image 
          src="/foto6.jpeg" 
          alt="Portafolio foto 6" 
          width={200} 
          height={200}
          className={styles.portafolioImage}
        />
        <Image 
          src="/foto7.jpeg" 
          alt="Portafolio foto 7" 
          width={200} 
          height={200}
          className={styles.portafolioImage}
        />
        <Image 
          src="/foto8.jpeg" 
          alt="Portafolio foto 8" 
          width={200} 
          height={200}
          className={styles.portafolioImage}
        />
      </div>
        <Link href="https://www.instagram.com/reveal_oficial?igsh=MXc1OGh2cHVuaG5iMQ==" className={styles.verMas} target="_blank">
          Ver más...
        </Link>
     </div>
     <div className={styles.equipo}>
      <h2 className={styles.equipoTitle}>Te presentamos a nuestro equipo</h2>
      <div className={styles.equipoGrid}>
        <div className={styles.equipoMiembro}>
          <a href="https://www.instagram.com/dreapulgarin16?igsh=MWl5MG1rOGU0ZnYzZw%3D%3D&utm_source=qr" target="_blank" rel="Andrea ig">
            <Image 
              src="/Andrea.jpeg" 
              alt="Andrea Pulgarín" 
              width={150} 
              height={150}
              className={styles.equipoImage}
            />
          </a>
          <h3 className={styles.equipoNombre}>Andrea Pulgarín</h3>
        </div>
        <div className={styles.equipoMiembro}>
          <a href="https://www.instagram.com/sofiis_velasquez?igsh=aXR4czhmYmhjbG5x" target="_blank" rel="Sofia ig">
            <Image 
              src="/Sofia.jpeg" 
              alt="Sofia Velásquez" 
              width={150} 
              height={150}
              className={styles.equipoImage}
            />
          </a>
          <h3 className={styles.equipoNombre}>Sofia Velásquez</h3>
        </div>
        <div className={styles.equipoMiembro}>
          <a href="https://www.instagram.com/juanfermp17?igsh=NXY3dG5uZWplaTly" target="_blank" rel="Juan Fernando ig">
            <Image 
              src="/JuanFernando.jpeg" 
              alt="Juan Fernando Montoya" 
              width={150} 
              height={150}
              className={styles.equipoImage}
            />
          </a>
          <h3 className={styles.equipoNombre}>Juan Fernando Montoya</h3>
        </div>
        <div className={styles.equipoMiembro}>
          <a href="https://www.instagram.com/vale_sanchezq?igsh=d3ZudXViNW9sa3Jp" target="_blank" rel="Vale ig">
            <Image 
              src="/Vale.jpeg" 
              alt="Vale Sánchez" 
              width={150} 
              height={150}
              className={styles.equipoImage}
            />
          </a>
          <h3 className={styles.equipoNombre}>Vale Sánchez</h3>
        </div>
        <div className={styles.equipoMiembro}>
          <a href="https://www.instagram.com/majandry_06?igsh=NTZ2bzBxMGVxZ3Ay" target="_blank" rel="Maria Alejandra ig">
            <Image 
              src="/MAlejandra.jpeg" 
              alt="María Alejandra" 
              width={150} 
              height={150}
              className={styles.equipoImage}
            />
          </a>
          <h3 className={styles.equipoNombre}>María Alejandra</h3>
        </div>
      </div>
     </div>
   </main>
  );
}
