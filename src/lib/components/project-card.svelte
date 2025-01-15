<script lang="ts" module>
  import { projects } from "$lib/projects";
  import type { HTMLAttributes } from "svelte/elements";
  type Props = {
    data: (typeof projects)[0];
    index: number;
  } & HTMLAttributes<EventTarget>;
</script>

<script lang="ts">
  import { twMerge, type ClassNameValue } from "tailwind-merge";
  import Badge from "./badge.svelte";
  const { data, index, class: classes }: Props = $props();
</script>

<div
  class:flex-row-reverse={index % 2 === 0}
  class={twMerge(
    "flex gap-4 bg-gray-38 rounded-xl overflow-hidden lg:flex-col",
    classes as ClassNameValue
  )}
>
  <div class="max-w-[50%] w-full p-8 bg-gray-51 overflow-hidden lg:max-w-full lg:p-4">
    <div
      class="rounded-lg overflow-hidden hover:rotate-12 transition-all duration-300"
      class:hover:rotate-[-12deg]={index % 2 === 0}
    >
      <img src={data.img} alt="" />
    </div>
  </div>
  <div class="p-8 lg:p-4">
    <div class="text-2xl font-extrabold">{data.name}</div>
    <div class="mt-4">{data.des}</div>
    <div class="mt-4 text-sm">
      <span class="font-medium"> Responsibility: </span>
      <ul>
        {#each data.responsibility as d}
          <li class="mt-2">
            - {d}
          </li>
        {/each}
      </ul>
    </div>
    <div class="flex flex-wrap gap-4 gap-y-2 mt-8">
      {#each data.techs.split(",") as t}
        <Badge>{t}</Badge>
      {/each}
    </div>
  </div>
</div>
