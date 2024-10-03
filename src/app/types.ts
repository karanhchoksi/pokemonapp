export interface Pokemon {
    name: string;
    url: string;
    id?: number;
    imageUrl?: string;
    type?: string[];
  }
  
  export interface PokemonDetails {
    sprites: {
      front_default: string;
    };
    name: string;
    types: { type: { name: string } }[];
  }
  