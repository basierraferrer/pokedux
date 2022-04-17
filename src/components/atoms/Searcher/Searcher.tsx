import React from "react";
import FontIcon from "../FontIcon/FontIcon";
import styles from "./Searcher.module.scss";

const Searcher = () => {
  return (
    <div className={styles.searchWrapper}>
      <div className={styles.searcher}>
        <input
          type="search"
          className={styles.searchInput}
          placeholder="Encuentra a tu Pokemón favorito"
        />
        <FontIcon iconName="magnifying-glass" />
      </div>
    </div>
  );
};

export default Searcher;
