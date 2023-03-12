import React, { useContext } from 'react';

import { ThemeContext } from '../../contexts/theme-context';
import ButtonToggleTheme from '../button-theme/ButtonToggleTheme';
import styles from './Navbar.module.css';
const Navbar = () => {
  const { darkTheme } = useContext(ThemeContext);
  return (
    <>
      <nav
        className={
          darkTheme
            ? `dark-theme ${styles.navbar}`
            : `ligth-theme ${styles.navbar}`
        }
      >
        <ul role={'listitem'}>
          <li>API19</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
        <ButtonToggleTheme />
      </nav>
    </>
  );
};

export default Navbar;
