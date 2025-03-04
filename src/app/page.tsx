import React from "react";
import { Pokemon } from "../types";
import Card from "../components/Card";

export default async function Home() {
  // Fetching data from an API
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=5");
  const data = await response.json();
  const pokemons: Pokemon[] = data.results.map(
    (pokemon: Pokemon, index: number) => {
      return {
        id: index + 1,
        name: pokemon.name,
        imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
          index + 1
        }.png`,
      };
    }
  );

  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="text-center mb-16">
        <h1 className="text-4xl font-bold">My Pokemons</h1>
        <p className="text-xl text-gray-600">
          Welcome To My Pokemon Collection
        </p>
      </header>
      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {pokemons.map((pokemon, index) => (
          <Card key={index} pokemon={pokemon} />
        ))}
      </main>
    </div>
  );
}
