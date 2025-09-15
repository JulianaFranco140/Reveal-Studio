import styles from './Conocenos.module.css';

const Conocenos = () => {
  return (
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
  );
};

export default Conocenos;
