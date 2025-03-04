import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Pokemon } from "../types";
import { unstable_ViewTransition as ViewTransition } from "react";

type Props = {
  pokemon: Pokemon;
};

export default function Card({ pokemon }: Props) {
  return (
    <Link href={`/pokemon/${pokemon.id}`}>
      <ViewTransition name={`card-${pokemon.id}`}>
        <article className="p-4 border border-zinc-200 rounded shadow-sm flex flex-col transition-transform transform hover:scale-105 hover:shadow-lg">
          <Image
            src={pokemon.imageUrl}
            alt={pokemon.name}
            width={200}
            height={200}
            className="w-full h-48 object-cover mb-4 rounded"
            priority
          />

          <h2 className="text-2xl font-semibold capitalize">{pokemon.name}</h2>
          <p className="text-gray-700">{`This is ${pokemon.name}`}</p>
        </article>
      </ViewTransition>
    </Link>
  );
}
