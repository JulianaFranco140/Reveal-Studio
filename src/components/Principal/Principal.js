import styles from './Principal.module.css';

const Principal = () => {
  return (
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
  );
};

export default Principal;
