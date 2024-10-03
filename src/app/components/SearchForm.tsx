"use client";

import React, { useState } from 'react';

interface SearchFormProps {
  onSearch: (searchTerm: string, selectedType: string) => void;
  pokemonTypes: { name: string; url: string }[];
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch, pokemonTypes }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm, selectedType);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center mb-4 md:space-x-4 m-5">
      <div className="w-full md:w-3/12 mb-2 md:mb-0">
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="w-full p-2 border rounded text-black"
        >
          <option value="">All Types</option>
          {pokemonTypes.map(type => (
            <option className='capitalize' key={type.name} value={type.name}>
              {type.name}
            </option>
          ))}
        </select>
      </div>
      <div className="w-full md:w-3/12 mb-2 md:mb-0">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search Pokémon"
          className="w-full p-2 border rounded text-black"
        />
      </div>
      <div className="w-full md:w-3/12 mb-2 md:mb-0 flex space-x-2">
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
          Search
        </button>
        <button
          type="button"
          onClick={() => {
            setSelectedType('');
            setSearchTerm('');
            onSearch('', ''); // Trigger the search with empty filters to reset the list
          }}
          className="w-full p-2 bg-gray-500 text-white rounded"
        >
          Clear
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
