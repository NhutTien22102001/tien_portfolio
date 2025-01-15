<script lang="ts">
  import Badge from "$lib/components/badge.svelte";
  import Container from "$lib/components/container.svelte";

  import js from "../../svgs/js.svg?raw";
  import ts from "../../svgs/ts.svg?raw";
  import react from "../../svgs/react.svg?raw";
  import next from "../../svgs/next.svg?raw";
  import reactNative from "../../svgs/react-native.svg?raw";
  import vue from "../../svgs/vue.svg?raw";
  import nuxt from "../../svgs/nuxt.svg?raw";
  import svelte from "../../svgs/svelte.svg?raw";
  import express from "../../svgs/express.svg?raw";
  import nest from "../../svgs/nest.svg?raw";

  import npm from "../../svgs/npm.svg?raw";
  import yarn from "../../svgs/yarn.svg?raw";
  import bun from "../../svgs/bun.svg?raw";
  import pnpm from "../../svgs/pnpm.svg?raw";
  import vite from "../../svgs/vite.svg?raw";
  import rsbuild from "../../svgs/rsbuild.svg?raw";
  import webpack from "../../svgs/webpack.svg?raw";
  import git from "../../svgs/git.svg?raw";

  const toolItems = [
    {
      icon: npm,
      label: "Npm",
    },
    {
      icon: yarn,
      label: "Yarn",
    },
    {
      icon: bun,
      label: "Bun.Js",
    },
    {
      icon: pnpm,
      label: "Pnpm",
    },
    {
      icon: vite,
      label: "Vite",
    },
    {
      icon: rsbuild,
      label: "RSbuild",
    },
    {
      icon: webpack,
      label: "Webpack",
    },
    {
      icon: git,
      label: "Git",
    },
  ];
  const langItems = [
    {
      icon: js,
      label: "Javascript (3yrs)",
    },
    {
      icon: ts,
      label: "Typescript (3yrs)",
    },
  ];

  const frItems = [
    {
      icon: react,
      label: "React.Js (3yrs)",
    },
    {
      icon: next,
      label: "Next.Js (3yrs)",
    },
    {
      icon: reactNative,
      label: "React Native (1yrs)",
    },
    {
      icon: vue,
      label: "Vue.Js (2yrs)",
    },
    {
      icon: nuxt,
      label: "Nuxt.Js (2yrs)",
    },
    {
      icon: svelte,
      label: "Svelte (1yrs)",
    },
    {
      icon: svelte,
      label: "Sveltekit (1yrs)",
    },
    {
      icon: express,
      label: "Express.Js (hobby)",
    },
    {
      icon: nest,
      label: "Nest.Js (hobby)",
    },
  ];
</script>

<Container class="py-28 lg:py-14" id="skills">
  <Badge class="m-auto">Programming langues</Badge>
  <div class="grid grid-cols-8 mt-8 gap-8 xl:grid-cols-5 md:!grid-cols-3">
    {#each langItems as { icon, label }}
      <div class="flex flex-col justify-center items-center text-center">
        <div
          class="max-w-16 h-16 transition-all duration-300 hover:-rotate-12 flex items-center"
        >
          {@html icon}
        </div>
        <span class="font-light text-sm mt-1">{label}</span>
      </div>
    {/each}
  </div>

  <Badge class="m-auto mt-12">Frameworks/libraries</Badge>
  <div class="grid grid-cols-8 mt-8 gap-8 xl:grid-cols-5 md:!grid-cols-3">
    {#each frItems as { icon, label }}
      <div class="flex flex-col justify-center items-center text-center">
        <div
          class="max-w-16 h-16 transition-all duration-300 hover:-rotate-12 flex items-center"
        >
          {@html icon}
        </div>
        <span class="font-light text-sm mt-1">{label}</span>
      </div>
    {/each}
  </div>

  <Badge class="m-auto mt-12">Tools</Badge>
  <div class="grid grid-cols-8 mt-8 gap-8 xl:grid-cols-5 md:!grid-cols-3">
    {#each toolItems as { icon, label }}
      <div class="flex flex-col justify-center items-center text-center">
        <div
          class="max-w-16 h-16 transition-all duration-300 hover:-rotate-12 flex items-center icon"
        >
          {@html icon}
        </div>
        <span class="font-light text-sm mt-1">{label}</span>
      </div>
    {/each}
  </div>
</Container>

<style module lang="css">
  .icon :global(svg) {
    @apply !w-full !h-full;
  }
</style>
