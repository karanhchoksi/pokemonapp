"use client";

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { fetchPokemonDetails } from '../../utils/api';

const PokemonDetail = () => {
  const searcParams = useParams();
  const router = useRouter(); // Use the useRouter hook for navigation
  const [pokemonDetails, setPokemonDetails] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { pokemonName } = searcParams;
    if (pokemonName) {
      const getPokemonDetails = async () => {
        try {
          const details = await fetchPokemonDetails(pokemonName as string);
          setPokemonDetails(details);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      };
      getPokemonDetails();
    }
  }, [searcParams]);

  if (loading) return <div>Loading...</div>; // Loading state

  if (!pokemonDetails) return <div>Pokémon not found</div>; // Handle not found

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="relative bg-white shadow-lg rounded-lg p-6 text-black">
        <button
          className="absolute top-2 left-2 bg-blue-500 text-white px-3 py-1 rounded"
          onClick={() => router.push('/')}
        >
          Back
        </button>
        <img
          className="mx-auto mb-4"
          src={pokemonDetails?.sprites?.front_default}
          alt={pokemonDetails?.name}
        />
        <h1 className="text-2xl font-bold mb-4 capitalize">
          {pokemonDetails?.name}
        </h1>
        <p className="mb-2">
          <b>Base Experience:</b> {pokemonDetails?.base_experience}
        </p>
        <p className="mb-2 capitalize">
          <b>Stats:</b> {pokemonDetails?.stats.map((stat: any) => stat.stat.name).join(', ')}
        </p>
        <p className="mb-2 capitalize">
          <b>Abilities:</b> {pokemonDetails?.abilities.map((ability: any) => ability.ability.name).join(', ')}
        </p>
        <p className="mb-2 capitalize">
          <b>Moves:</b> {pokemonDetails?.moves.slice(0, 5).map((move: any) => move.move.name).join(', ')}
        </p>
      </div>
    </div>
  );
};

export default PokemonDetail;
