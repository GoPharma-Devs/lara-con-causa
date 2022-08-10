import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from 'src/components/about/About.module.scss';
import Navbar from 'src/components/nav/Navbar';
function About() {
  return (
    <>
      <Navbar />
      <section className={styles.AboutPage}>
        <div className={styles.about_container}>
          <div className={styles.about_image}>
            <Image src='/aboutme.png' height={556} width={492} alt='lara' />
          </div>
          <div className={styles.about_text}>
            <strong>Sobre mí</strong>
            <h1>Lara como persona y profesionista </h1>
            <p>
              Soy mexicana, tengo 49 años, soy mamá de una hermosa adolescente
              de 16 años que ama la danza, esposa desde hace 24 años de un
              tierno caballero que ama el prog-rock, primera hija de un
              matrimonio que ya celebra 52 años juntos, hermana, tía,
              profesionista, emprendedora y siempre DEPORTISTA.
            </p>
            <p>
              Soy química de profesión y tengo una maestría en biotecnología.
            </p>
           
          </div>
        </div>
        <div className={styles.about_container}>
         
          <div className={styles.about_text}>
            <strong>Sobre mí</strong>
            <h1>Lara como persona y profesionista </h1>
            <p>
              Soy mexicana, tengo 49 años, soy mamá de una hermosa adolescente
              de 16 años que ama la danza, esposa desde hace 24 años de un
              tierno caballero que ama el prog-rock, primera hija de un
              matrimonio que ya celebra 52 años juntos, hermana, tía,
              profesionista, emprendedora y siempre DEPORTISTA.
            </p>
            <p>
              Soy química de profesión y tengo una maestría en biotecnología.
            </p>
           
          </div>
          <div className={styles.about_image}>
            <Image src='/aboutme.png' height={556} width={492} alt='lara' />
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
