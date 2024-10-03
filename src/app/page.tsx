"use client";

import SearchForm from './components/SearchForm';
import PokemonList from './components/PokemonList';
import { useEffect, useState } from 'react';
import { fetchPokemonDetails, fetchPokemons, fetchPokemonTypes } from './utils/api';

export default function Home() {
  const [pokemons, setPokemons] = useState<any[]>([]);
  const [filteredPokemons, setFilteredPokemons] = useState<any[]>([]);
  const [pokemonTypes, setPokemonTypes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const fetchedPokemons = await fetchPokemons();
        const pokemonList = await Promise.all(
          fetchedPokemons.map(async (pokemon :any) => {
            const data = await fetchPokemonDetails(pokemon.name);
            return data;
          })
        );
        setPokemons(pokemonList);
        const fetchedTypes = await fetchPokemonTypes();
        setFilteredPokemons(pokemonList);
        setPokemonTypes(fetchedTypes);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);
  

  const handleSearch = (searchTerm: string, selectedType: string) => {
    const filtered = pokemons.filter(pokemon => {
      const hasTypes = Array.isArray(pokemon.types);
      const matchesType = selectedType 
        ? hasTypes && pokemon.types.some((type: any) => type.type.name === selectedType) 
        : true;
      const matchesName = pokemon.name.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesType && matchesName;
    });
    setFilteredPokemons(filtered);
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="container mx-auto">
      <SearchForm onSearch={handleSearch} pokemonTypes={pokemonTypes} />
      <PokemonList pokemons={filteredPokemons} />
    </div>
  );
}
