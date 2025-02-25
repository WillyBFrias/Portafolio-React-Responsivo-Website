import React from 'react'
import styles from './ProjectsStyles.module.css'
import Program from '../../assets/Program-Api de Marvel Comics.png'
import Portal from '../../assets/PersonalTracking.png'
import Insta from '../../assets/My Instagram.png'
import Tenis from '../../assets/Shoe Website - Nike.png'
import ProjectCard from '../../common/ProjectCard'

function Projects() {
  return  <section id="projects" className={styles.container}>
       <h1 className="sectionTitle">Proyectos</h1>
       <div className={styles.projectsContainer}>
            <ProjectCard 
                src={Program} 
                link="https://github.com/WillyBFrias/Program"
                h3="Api"
                p="Buscador de super héroes de Marvel Comics." 
            />
            <ProjectCard 
                src={Portal} 
                link="https://github.com/WillyBFrias/PersonalTracking"
                h3="Portal de Proveedores"
                p="Un portal para empleados y administradores." 
            />
            <ProjectCard 
                src={Insta} 
                link="https://github.com/WillyBFrias/My-Instagram"
                h3="My Instagram"
                p="El login de Instagram." 
            />
            <ProjectCard 
                src={Tenis} 
                link="https://github.com/WillyBFrias/shoe-website"
                h3="Tienda de Tenis"
                p="Pagina web de Tenis marca Nike" 
            />
       </div>
    </section>
}

export default Projects 