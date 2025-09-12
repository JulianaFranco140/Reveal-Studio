"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [emailCopied, setEmailCopied] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (imageSrc, imageAlt) => {
    setModalImage({ src: imageSrc, alt: imageAlt });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('revealstudiooficial@gmail.com');
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000); 
    } catch (err) {
      console.error('Error al copiar email:', err);
    }
  };
  return (
   <main id="inicio" className={styles.main}>
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
     <div id="portafolio" className={styles.portafolio}>
      <h2 className={styles.portafolioTitle}>Conoce un poco de nuestro trabajo...</h2>
      <div className={styles.portafolioGrid}>
        <Image 
          src="/foto1.jpeg" 
          alt="Portafolio foto 1" 
          width={200} 
          height={200}
          className={styles.portafolioImage}
          onClick={() => openModal("/foto1.jpeg", "Portafolio foto 1")}
        />
        <Image 
          src="/foto2.jpeg" 
          alt="Portafolio foto 2" 
          width={200} 
          height={200}
          className={styles.portafolioImage}
          onClick={() => openModal("/foto2.jpeg", "Portafolio foto 2")}
        />
        <Image 
          src="/foto3.jpeg" 
          alt="Portafolio foto 3" 
          width={200} 
          height={200}
          className={styles.portafolioImage}
          onClick={() => openModal("/foto3.jpeg", "Portafolio foto 3")}
        />
        <Image 
          src="/foto4.jpeg" 
          alt="Portafolio foto 4" 
          width={200} 
          height={200}
          className={styles.portafolioImage}
          onClick={() => openModal("/foto4.jpeg", "Portafolio foto 4")}
        />
        <Image 
          src="/foto5.jpeg" 
          alt="Portafolio foto 5" 
          width={200} 
          height={200}
          className={styles.portafolioImage}
          onClick={() => openModal("/foto5.jpeg", "Portafolio foto 5")}
        />
        <Image 
          src="/foto6.jpeg" 
          alt="Portafolio foto 6" 
          width={200} 
          height={200}
          className={styles.portafolioImage}
          onClick={() => openModal("/foto6.jpeg", "Portafolio foto 6")}
        />
        <Image 
          src="/foto7.jpeg" 
          alt="Portafolio foto 7" 
          width={200} 
          height={200}
          className={styles.portafolioImage}
          onClick={() => openModal("/foto7.jpeg", "Portafolio foto 7")}
        />
        <Image 
          src="/foto8.jpeg" 
          alt="Portafolio foto 8" 
          width={200} 
          height={200}
          className={styles.portafolioImage}
          onClick={() => openModal("/foto8.jpeg", "Portafolio foto 8")}
        />
      </div>
        <a href="https://www.instagram.com/reveal_oficial?igsh=MXc1OGh2cHVuaG5iMQ==" target="_blank" rel="noopener noreferrer" className={styles.contactoItem}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.contactoIcon}>
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="currentColor"/>
          </svg>
          <span className={styles.contactoTexto}>Puedes acceder a más contenido en @reveal_oficial</span>
        </a>
        
     </div>
     <div id="equipo" className={styles.equipo}>
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
          <p className={styles.equipoIg}><a href="https://www.instagram.com/dreapulgarin16?igsh=MWl5MG1rOGU0ZnYzZw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">@dreapulgarin16</a></p>
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
          <p className={styles.equipoIg}><a href="https://www.instagram.com/sofiis_velasquez?igsh=aXR4czhmYmhjbG5x" target="_blank" rel="noopener noreferrer">@sofiis_velasquez</a></p>
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
          <p className={styles.equipoIg}><a href="https://www.instagram.com/juanfermp17?igsh=NXY3dG5uZWplaTly" target="_blank" rel="noopener noreferrer">@juanfermp17</a></p>
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
          <p className={styles.equipoIg}><a href="https://www.instagram.com/vale_sanchezq?igsh=d3ZudXViNW9sa3Jp" target="_blank" rel="noopener noreferrer">@vale_sanchezq</a></p>
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
          <p className={styles.equipoIg}><a href="https://www.instagram.com/majandry_06?igsh=NTZ2bzBxMGVxZ3Ay" target="_blank" rel="noopener noreferrer">@majandry_06</a></p>
        </div>
      </div>
     </div>
     <div id="contacto" className={styles.contacto}>
      <h2 className={styles.contactoTitle}>Agenda con nosotros</h2>
      <div className={styles.contactoGrid}>
        <a href="https://wa.me/3053030367" target="_blank" rel="noopener noreferrer" className={styles.contactoItem}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.contactoIcon}>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.531 3.542" fill="currentColor"/>
          </svg>
          <span className={styles.contactoTexto}>WhatsApp</span>
        </a>

        <a href="https://www.instagram.com/reveal_oficial?igsh=MXc1OGh2cHVuaG5iMQ==" target="_blank" rel="noopener noreferrer" className={styles.contactoItem}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.contactoIcon}>
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="currentColor"/>
          </svg>
          <span className={styles.contactoTexto}>Instagram</span>
        </a>

        <a href="https://www.facebook.com/share/176JbFQV8J/" target="_blank" rel="noopener noreferrer" className={styles.contactoItem}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.contactoIcon}>
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="currentColor"/>
          </svg>
          <span className={styles.contactoTexto}>Facebook</span>
        </a>

        <a href="https://www.tiktok.com/@reveal_oficial?_t=ZS-8zeHGaxI1j7&_r=1" target="_blank" rel="noopener noreferrer" className={styles.contactoItem}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.contactoIcon}>
            <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" fill="currentColor"/>
          </svg>
          <span className={styles.contactoTexto}>Tik Tok</span>
        </a>

        <button type="button" onClick={copyEmail} className={styles.contactoItem}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.contactoIcon}>
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" fill="none"/>
            <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" fill="none"/>
          </svg>
          <span className={styles.contactoTexto}>
            {emailCopied ? '¡Copiado!' : 'revealstudiooficial@gmail.com'}
          </span>
        </button>
      </div>
     </div>


     {isModalOpen && modalImage && (
       <div className={styles.modal} onClick={closeModal}>
         <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
           <button className={styles.closeButton} onClick={closeModal}>
             ×
           </button>
           <Image
             src={modalImage.src}
             alt={modalImage.alt}
             width={800}
             height={600}
             className={styles.modalImage}
           />
         </div>
       </div>
     )}
   </main>
  );
}
