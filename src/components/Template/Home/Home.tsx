import React from "react";
import Menu from "components/molecules/Menu/Menu";
import Searcher from "components/atoms/Searcher/Searcher";
import PokemonList from "components/molecules/PokemonList/PokemonList";

const Home = () => {
  return (
    <div>
      <Menu />
      <Searcher />
      <PokemonList />
    </div>
  );
};

export default Home;
