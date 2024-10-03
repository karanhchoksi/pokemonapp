"use client";

import React from 'react';
import Link from 'next/link';

interface PokemonCardProps {
  pokemonObj: {
    name: string,
    url: string
  };
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemonObj } : any) => {
  return (
    <div className="border rounded-lg p-4 text-center">
      <Link href={`/pokemon/${pokemonObj.name}`}>
      <img 
      src={pokemonObj?.sprites?.front_default}
      alt={pokemonObj.name} 
      width={150}
      height={150}
    />
        <h2 className="font-bold capitalize">{pokemonObj.name}</h2>
        <p>Details →</p>
      </Link>
    </div>
  );
};

export default PokemonCard;
