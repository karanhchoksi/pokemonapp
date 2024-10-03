"use client";

import React from 'react';
import PokemonCard from './PokemonCard';

interface Pokemon {
  name: string;
  url: string;
}

interface PokemonListProps {
  pokemons: Pokemon[];
}

const PokemonList: React.FC<PokemonListProps> = ({ pokemons }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 m-5">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.name} pokemonObj={pokemon} />
      ))}
    </div>
  );
};

export default PokemonList;
