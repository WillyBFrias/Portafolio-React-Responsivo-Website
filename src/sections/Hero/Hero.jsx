import styles from './HeroStyles.module.css'
import heroImg from '../../assets/hero-img.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import linkedinLight from '../../assets/linkedin-light.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import CV from '../../assets/cv.pdf'
import { useTheme } from '../../common/ThemeContext'


function Hero() {
 const { theme, toggleTheme } = useTheme();
 
 const themeIcon = theme === 'light' ? sun : moon;
 const githubIcon = theme === 'light' ? githubLight : githubDark;
 const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
 
  
    return (
    <section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img 
                className={styles.hero} 
                src={heroImg} 
                alt="perfil" 
            />
            <img className={styles.colorMode} 
             src={themeIcon} 
             alt="modo de color del icono"
             onClick={toggleTheme} 
            />
        </div>
        <div className={styles.info}>
            <h1>
                Guillermo 
                <br /> 
                Bacio
            </h1>
            <h2>Ingeniero en Tecnología de Software</h2>
            <span>
                <a href="https://github.com/WillyBFrias" target='_blank'>
                    <img src={githubIcon} alt="Github icon" />
                </a>
                <a href="https://www.linkedin.com/in/guillermo-bacio-frias-1ba574207/" target='_blank'>
                    <img src={linkedinIcon} alt="Linkedin icon" />
                </a>
            </span>
            <p className={styles.description}>
                Apasionado por diseñar y desarrollar aplicaciones web innovadoras con React,C#,JS.
            </p>
            <a href={CV} download>
                <button className='hover'>
                    Resumen
                </button>
            </a>
        </div>
    </section>
  );
}

export default Hero