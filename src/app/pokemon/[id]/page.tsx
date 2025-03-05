import React from "react";
import Image from "next/image";
import { Pokemon } from "@/types";
import { notFound } from "next/navigation";
import { unstable_ViewTransition as ViewTransition } from "react";
import Header from "@/components/Header";

type Props = {
  params: Promise<{
    id: number | undefined;
  }>;
};

export async function generateStaticParams() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=5");
  const data = await response.json();
  const params = data.results.map((pokemon: Pokemon, index: number) => ({
    params: { id: (index + 1).toString() },
  }));

  return params;
}

export default async function PokemonPage({ params }: Props) {
  const { id } = await params;
  if (!id) {
    return notFound();
  }

  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const pokemon: Pokemon = await response.json();
  if (!pokemon) {
    return notFound();
  }

  return (
    <div className="min-h-screen p-8 pb-20 flex flex-col items-center relative bg-background text-foreground">
      <Header />
      <ViewTransition name={`card-${pokemon.id}`}>
        <main className="flex flex-col gap-x-1 items-center w-full max-w-2xl p-2 md:px-8">
          <h1 className="text-5xl font-extrabold capitalize">{pokemon.name}</h1>
          <Image
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt={pokemon.name}
            width={200}
            height={200}
            priority
            className="w-full h-auto max-w-xs sm:max-w-sm md:max-w-md"
          />

          <div className="border-zinc-200 border-1 rounded-md p-2 w-full max-w-lg mb-5">
            <ul className="text-xl mb-2 list-none">
              <li className="mb-2 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M5.75 3a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5zm3.472 11.219a.75.75 0 0 1 .976-.073l.084.073l1.22 1.221v-3.07l-.002-.026V8.56l-1.22 1.221l-.084.073a.75.75 0 0 1-1.049-1.05l.073-.084l2.367-2.37a.77.77 0 0 1 .664-.35c.252 0 .475.109.611.276l.053.075l2.367 2.37l.073.084a.75.75 0 0 1 .007.882l-.08.094l-.084.073a.75.75 0 0 1-.883.007l-.094-.08L13 8.56v3.07l.002.026v3.784l1.221-1.221a.75.75 0 0 1 .977-.073l.084.073a.75.75 0 0 1 .072.976l-.072.085l-2.367 2.37a.77.77 0 0 1-.664.35a.77.77 0 0 1-.664-.35l-2.367-2.37a.75.75 0 0 1 0-1.061M5 20.25a.75.75 0 0 1 .75-.75h12.5a.75.75 0 0 1 0 1.5H5.75a.75.75 0 0 1-.75-.75"
                  />
                </svg>
                <span className="font-semibold mx-3 text-foreground">
                  Height:
                </span>
                <span className="font-normal rounded-sm p-1">
                  {pokemon.height}
                </span>
              </li>
              <li className="mb-2 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M6 19h12L16.575 9h-9.15zm6-12q.425 0 .713-.288T13 6t-.288-.712T12 5t-.712.288T11 6t.288.713T12 7M3.7 21l2-14h3.475q-.075-.25-.125-.488T9 6q0-1.25.875-2.125T12 3t2.125.875T15 6q0 .275-.05.513T14.825 7H18.3l2 14zM6 19h12z"
                  />
                </svg>
                <span className="font-semibold mx-3">Weight:</span>
                <span className="font-normal text:zink-600 dark:text-zinc-400 rounded-sm p-1">
                  {pokemon.weight}
                </span>
              </li>
              <li className="mb-2 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m4.635 14.415l1.039-2.203a.357.357 0 0 1 .652 0l1.04 2.203l2.323.356c.298.045.416.429.2.649l-1.68 1.713l.396 2.421c.051.311-.26.548-.527.401L6 18.812l-2.078 1.143c-.267.147-.578-.09-.527-.4l.396-2.422l-1.68-1.713c-.217-.22-.098-.604.2-.65zm12 0l1.039-2.203a.357.357 0 0 1 .652 0l1.04 2.203l2.323.356c.298.045.416.429.2.649l-1.68 1.713l.396 2.421c.051.311-.26.548-.527.401L18 18.812l-2.078 1.143c-.267.147-.578-.09-.527-.4l.396-2.422l-1.68-1.713c-.216-.22-.098-.604.2-.65zm-6-9l1.039-2.203a.357.357 0 0 1 .652 0l1.04 2.203l2.323.356c.298.045.416.429.2.649l-1.68 1.713l.396 2.421c.051.311-.26.548-.527.401L12 9.812l-2.078 1.143c-.267.147-.578-.09-.527-.4l.396-2.422l-1.68-1.713c-.217-.22-.098-.604.2-.65z"
                  />
                </svg>
                <span className="font-semibold mx-3">Experience:</span>
                <span className="font-normal text:zink-600 dark:text-zinc-400 rounded-sm p-1">
                  {pokemon.base_experience}
                </span>
              </li>
            </ul>
          </div>
        </main>
      </ViewTransition>
    </div>
  );
}
