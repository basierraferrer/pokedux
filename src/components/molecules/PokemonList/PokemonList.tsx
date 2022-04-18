import React from "react";
import PokemonCard from "components/atoms/PokemonCard/PokemonCard";
import styles from "./PokemonList.module.scss";
const PokemonList = () => {
  const pokemonList: any[] = Array(20).fill("");

  return (
    <div className={styles.pokemonList}>
      {pokemonList.map((pokemon) => (
        <PokemonCard />
      ))}
    </div>
  );
};

export default PokemonList;
