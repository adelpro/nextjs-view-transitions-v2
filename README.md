# Next.js View Transitions v2

> Exploring Next.js viewTransition with Card Animations

I've been experimenting with the new Next.js beta feature:

```js
export const experimental = { viewTransition: true }
```

It integrates the browser's new View Transitions API, enabling smooth card-to-page animations without extra libraries.

In this demo, a card expands into a full page view — powered natively by the browser + Next.js.

## 🚀 Quick Start

```bash
# Clone & run
git clone https://github.com/adelpro/nextjs-view-transitions-v2.git
cd nextjs-view-transitions-v2
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to see it in action.

## 🎨 What it does

- **Smooth transitions**: Cards seamlessly expand into full pages
- **Zero dependencies**: Uses native browser View Transitions API
- **Effortless implementation**: Just add `experimental.viewTransition = true`
- **TypeScript + Tailwind**: Clean, modern stack

## 🔧 How it works

The magic happens in two places:

1. **Enable the feature** in your page/layout:
   ```js
   export const experimental = { viewTransition: true }
   ```

2. **Style your transitions** with CSS:
   ```css
   ::view-transition-old(root) {
     animation: fade-out 0.3s ease-out;
   }
   
   ::view-transition-new(root) {
     animation: fade-in 0.3s ease-in;
   }
   ```

That's it. The browser handles the rest.

## 🌐 Links

- **Live demo**: [nextjs-view-transitions-v2.vercel.app](https://nextjs-view-transitions-v2.vercel.app/)
- **Source code**: [github.com/adelpro/nextjs-view-transitions-v2](https://github.com/adelpro/nextjs-view-transitions-v2)

This experiment highlights how effortless UI transitions can become with built-in framework + browser support.

## 📦 Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- [PokéAPI](https://pokeapi.co/) for Pokémon data

## 📊 Data Source

This project uses [**PokéAPI**](https://pokeapi.co/) - the RESTful Pokémon API providing comprehensive data including:
- Pokémon stats, abilities, and types
- High-resolution official artwork
- Species information and evolution chains

**API Details:**
- **Provider**: [PokéAPI](https://pokeapi.co/)
- **Documentation**: [pokeapi.co/docs/v2](https://pokeapi.co/docs/v2)
- **License**: [MIT License](https://github.com/PokeAPI/pokeapi/blob/master/LICENSE.md)

---

*Built while exploring the future of web animations. No magic, just web standards.*
