import Image from "next/image";
import styles from './Equipo.module.css';

export default function Equipo() {
  return (
    <div id="equipo" className={styles.equipo}>
      <h2 className={styles.equipoTitle}>¡Te presentamos a nuestro equipo!</h2>

      
      <div className={styles.equipoCard}>
        <div className={styles.equipoImageContainer}>
          <a href="https://www.instagram.com/dreapulgarin16?igsh=MWl5MG1rOGU0ZnYzZw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
            <Image 
              src="/Andrea.jpeg" 
              alt="Andrea Pulgarín" 
              width={150} 
              height={150}
              className={styles.equipoImage}
            />
          </a>
        </div>
        
        <div className={styles.equipoContent}>
          <div className={styles.equipoHeader}>
            <h3 className={styles.equipoNombre}>Andrea Pulgarín Márceles</h3>
            <div className={styles.equipoIg}>
              <a href="https://www.instagram.com/dreapulgarin16?igsh=MWl5MG1rOGU0ZnYzZw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
                @dreapulgarin16
              </a>
            </div>
          </div>
          
          <div className={styles.equipoRoles}>
            <ul>
              <li>Líder y fundadora de Reveal.</li>
              <li>Diseñadora de modas.</li>
              <li>Encargada de producción y estilismo editorial.</li>
              <li>Asistente de producción fotográfica.</li>
            </ul>
          </div>
        </div>        
      </div>

      <div className={styles.equipoCard}>
        <div className={styles.equipoImageContainer}>
          <a href="https://www.instagram.com/juanfermp17?igsh=NXY3dG5uZWplaTly" target="_blank" rel="noopener noreferrer">
            <Image 
              src="/JuanFernando.jpeg" 
              alt="Juan Fernando Montoya" 
              width={150} 
              height={150}
              className={styles.equipoImage}
            />
          </a>
        </div>
        
        <div className={styles.equipoContent}>
          <div className={styles.equipoHeader}>
            <h3 className={styles.equipoNombre}>Juan Fernando Montoya Palacio</h3>
            <div className={styles.equipoIg}>
              <a href="https://www.instagram.com/juanfermp17?igsh=NXY3dG5uZWplaTly" target="_blank" rel="noopener noreferrer">
                @juanfermp17
              </a>
            </div>
          </div>
          
          <div className={styles.equipoRoles}>
            <ul>
              <li>Miembro fundador de Reveal.</li>
              <li>Fotógrafo</li>
              <li>Escritor.</li>
              <li>Diseñador gráfico.</li>
              <li>Comunicador audiovisual</li>
            </ul>
          </div>
        </div>        
      </div>

    <div className={styles.equipoCard}>
        <div className={styles.equipoImageContainer}>
          <a href="https://www.instagram.com/juanpulgarinn?igsh=MTBocHBoemw1bGg3aA==" target="_blank" rel="noopener noreferrer">
            <Image 
              src="/JuanPablo.png" 
              alt="Juan Pablo Pulgarín Márceles" 
              width={150} 
              height={150}
              className={styles.equipoImage}
            />
          </a>
        </div>
        
        <div className={styles.equipoContent}>
          <div className={styles.equipoHeader}>
            <h3 className={styles.equipoNombre}>Juan Pablo Pulgarín Márceles</h3>
            <div className={styles.equipoIg}>
              <a href="https://www.instagram.com/juanpulgarinn?igsh=MTBocHBoemw1bGg3aA==" target="_blank" rel="noopener noreferrer">
                @juanpulgarinn
              </a>
            </div>
          </div>
          
          <div className={styles.equipoRoles}>
            <ul>
              <li>Miembro fundador de Reveal.</li>
              <li>Fotógrafo.</li>
              <li>Bailarín.</li>
              <li>Comunicador audiovisual (Con énfasis en edición de vídeos).</li>
            </ul>
          </div>
        </div>        
      </div>    



      <div className={styles.equipoCard}>
        <div className={styles.equipoImageContainer}>
          <a href="https://www.instagram.com/_banett?igsh=ZnpsdnludzBzdXo0" target="_blank" rel="noopener noreferrer">
            <Image 
              src="/Esteban.png" 
              alt="Esteban Palmett Cuartas" 
              width={150} 
              height={150}
              className={styles.equipoImage}
            />
          </a>
        </div>
        
        <div className={styles.equipoContent}>
          <div className={styles.equipoHeader}>
            <h3 className={styles.equipoNombre}>Esteban Palmett Cuartas</h3>
            <div className={styles.equipoIg}>
              <a href="https://www.instagram.com/_banett?igsh=ZnpsdnludzBzdXo0" target="_blank" rel="noopener noreferrer">
                @_banett
              </a>
            </div>
          </div>
          
          <div className={styles.equipoRoles}>
            <ul>
              <li>Fotógrafo (Con énfasis en fotografía de moda).</li>
            </ul>
          </div>
        </div>        
      </div>  


      <div className={styles.equipoCard}>
        <div className={styles.equipoImageContainer}>
          <a href="https://www.instagram.com/_el_wuawua?igsh=MWJ6azA5bHM0bHUxZQ==" target="_blank" rel="noopener noreferrer">
            <Image 
              src="/JuanJose.png" 
              alt="Juan José " 
              width={150} 
              height={150}
              className={styles.equipoImage}
            />
          </a>
        </div>

        <div className={styles.equipoContent}>
          <div className={styles.equipoHeader}>
            <h3 className={styles.equipoNombre}>Juan José Burbano</h3>
            <div className={styles.equipoIg}>
              <a href="https://www.instagram.com/_el_wuawua?igsh=MWJ6azA5bHM0bHUxZQ==" target="_blank" rel="noopener noreferrer">
                @_el_wuawua
              </a>
            </div>
          </div>

          <div className={styles.equipoRoles}>
            <ul>
              <li>Fotógrafo.</li>
            </ul>
          </div>
        </div>        
      </div>



    <div className={styles.equipoCard}>
        <div className={styles.equipoImageContainer}>
          <a href="https://www.instagram.com/majandry_06?igsh=NTZ2bzBxMGVxZ3Ay" target="_blank" rel="noopener noreferrer">
            <Image 
              src="/MAlejandra.jpeg" 
              alt="Maria Alejandra Torres Espinosa" 
              width={150} 
              height={150}
              className={styles.equipoImage}
            />
          </a>
        </div>

        <div className={styles.equipoContent}>
          <div className={styles.equipoHeader}>
            <h3 className={styles.equipoNombre}>María Alejandra Torres Espinosa</h3>
            <div className={styles.equipoIg}>
              <a href="https://www.instagram.com/majandry_06?igsh=NTZ2bzBxMGVxZ3Ay" target="_blank" rel="noopener noreferrer">
                @majandry_06
              </a>
            </div>
          </div>

          <div className={styles.equipoRoles}>
            <ul>
              <li>Diseñadora de modas (Con énfasis en en ilustración y confección en todo tipo de prendas y productos).</li>
              <li>Encargada de producción y estilismo editorial.</li>
            </ul>
          </div>
        </div>        
      </div>




      <div className={styles.equipoCard}>
        <div className={styles.equipoImageContainer}>
          <a href="https://www.instagram.com/vale_sanchezq?igsh=d3ZudXViNW9sa3Jp" target="_blank" rel="noopener noreferrer">
            <Image 
              src="/Vale.jpeg" 
              alt="Valeria Sánchez" 
              width={150} 
              height={150}
              className={styles.equipoImage}
            />
          </a>
        </div>

        <div className={styles.equipoContent}>
          <div className={styles.equipoHeader}>
            <h3 className={styles.equipoNombre}>Valeria Sánchez</h3>
            <div className={styles.equipoIg}>
              <a href="https://www.instagram.com/vale_sanchezq?igsh=d3ZudXViNW9sa3Jp" target="_blank" rel="noopener noreferrer">
                @vale_sanchezq
              </a>
            </div>
          </div>

          <div className={styles.equipoRoles}>
            <ul>
              <li>Maquillista profesional (artístico y social.)</li>
              <li>Modelo.</li>
              <li>Actriz</li>
            </ul>
          </div>
        </div>        
      </div>

      <div className={styles.equipoCard}>
        <div className={styles.equipoImageContainer}>
          <a href="https://www.instagram.com/sofia_velasquez?igsh=d3ZudXViNW9sa3Jp" target="_blank" rel="noopener noreferrer">
            <Image 
              src="/Sofia.jpeg" 
              alt="Sofía Velásquez" 
              width={150} 
              height={150}
              className={styles.equipoImage}
            />
          </a>
        </div>

        <div className={styles.equipoContent}>
          <div className={styles.equipoHeader}>
            <h3 className={styles.equipoNombre}>Sofía Velásquez</h3>
            <div className={styles.equipoIg}>
              <a href="https://www.instagram.com/sofia_velasquez?igsh=d3ZudXViNW9sa3Jp" target="_blank" rel="noopener noreferrer">
                @sofia_velasquez
              </a>
            </div>
          </div>

          <div className={styles.equipoRoles}>
            <ul>
              <li>Encargada del área legal de la empresa.</li>
              <li>Abogada</li>
              <li>Asistente en producción fotográfica.</li>
            </ul>
          </div>
        </div>        
      </div>

    </div>
  );
}
