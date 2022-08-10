import React from 'react';
import Image from 'next/image';
import styles from '../../styles/Navbar.module.scss';

function Navbar() {
  return (
    <>
      <nav className={styles.navbar}>
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
