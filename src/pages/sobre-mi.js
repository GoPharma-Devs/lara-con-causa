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
          
            <p>
            Trabajé 7 años en la industria de biotecnología como proveedora de tecnologías e insumos para los centros de investigación y la industria de este sector en nuestro país. Es decir, todos aquellos científicos que estudian el ADN, las proteínas, microorganismos como bacterias, hongos y virus y las empresas que producen todo esto con algún fin terapéutico, alimentario o agroindustrial.
            </p>
            <p>
            Desde hace 16 años trabajo para la industria farmacéutica, específicamente en el área de “Estudios Clínicos” en esto que ahora nos es más familiar por la Covid; todo el trabajo de investigación que hacen las compañías para probar una molécula antes de poder comercializarla como medicamento o vacuna para la cura o tratamiento de muchas enfermedades.
            </p>
           
          </div>
          <div className={styles.about_image}>
            <Image src='/aboutme.png' height={556} width={492} alt='lara' />
          </div>
        </div>
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
      </section>
    </>
  );
}

export default About;
