import React, { useEffect } from 'react';
import Image from 'next/image';
import styles from '../../styles/Navbar.module.scss';
import Link from 'next/link';

function Navbar() {
  useEffect(() => {
    navegador();
  }, []);

  const navegador = () => {
    const navScr = document.getElementById('navbar');
    window.onscroll = function () {
      if (
        document.body.scrollTop >= 30 ||
        document.documentElement.scrollTop >= 30
      ) {
        navScr.style.backgroundColor = '#4C52A2';
        navScr.style.color = '#fff';

      } else {
        navScr.style.backgroundColor = 'transparent';
        navScr.style.color = 'inherit';
      }
    };
  };
  return (
    <>
      <nav className={styles.navbar} id='navbar'>
        <div className={styles.nav_container}>
          <Link href={'/'}>
            <a className={styles.nav_logo}>
              <Image src='/lara.svg' height={80} width={80} alt='logo' />
            </a>
          </Link>
          <div className={styles.nav_links}>
            <ul>
              <li>
                <Link href='/sobre-mi'>
                  <a>Sobre mí</a>
                </Link>
              </li>
              <li>
                <Link href='/contacto'>
                  <a>Contacto</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
