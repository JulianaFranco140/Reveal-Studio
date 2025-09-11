import Image from 'next/image';
import styles from './BackButton.module.css';

const BackButton = () => {
  return (
    <a href="#top" className={styles.scrollToTop}>
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