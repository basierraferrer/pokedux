import React from "react";
import logo from "assets/images/logo.svg";
import styles from "./Menu.module.scss";

const Menu = () => {
  return (
    <header className={styles.menuWrapper}>
      <img className={styles.logo} src={logo} alt="logo pokedux" />
      <nav className={styles.navbar}>
        <ul className={styles.menuList}>
          <li>Home</li>
          <li>Favorites</li>
        </ul>
      </nav>
    </header>
  );
};

export default Menu;
