import React, { useEffect } from 'react';
import Image from 'next/image';
import styles from '../../styles/Navbar.module.scss';

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
      } else {
        navScr.style.backgroundColor = 'transparent';
      }
    };
  };
  return (
    <>
      <nav className={styles.navbar} id='navbar'>
        <div className={styles.nav_container}>
          <div className={styles.nav_logo}>
            <Image src='/lara.svg' height={80} width={80} alt='logo' />
          </div>
          {/* <div className={styles.nav_links}>
            <ul>
              <li>
                <a href='#'>Home</a>
              </li>
              <li>
                <a href='#'>About</a>
              </li>
              <li>
                <a href='#'>Contact</a>
              </li>
            </ul>
          </div> */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
