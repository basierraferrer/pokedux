import React from "react";
import FontIcon from "../FontIcon/FontIcon";
import styles from "./PokemonCard.module.scss";

const PokemonCard = () => {
  // TODO: change prefix to fas and add style favorite by onClick
  return (
    <div className={styles.pokemonCard}>
      <FontIcon iconName="star" prefix="far" className={styles.favIcon} />
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        alt="Pokemon front"
        className={styles.image}
      />
      <p className={styles.title}>Ditto</p>
      <div className={styles.labels}>
        <label className={styles.label}>Normal</label>
      </div>
    </div>
  );
};

export default PokemonCard;
