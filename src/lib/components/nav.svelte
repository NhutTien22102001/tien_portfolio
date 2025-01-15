<script module lang="ts">
  export const items = [
    {
      label: "About",
      to: "about",
    },
    {
      label: "Skills",
      to: "skills",
    },
    {
      label: "Works",
      to: "works",
    },
    {
      label: "Contact",
      to: "contact",
    },
  ];
</script>

<script lang="ts">
  import bars from "../svgs/bars.svg?raw";
  import close from "../svgs/close.svg?raw";

  const {onclick, open, toggleMenu}: {onclick: (id: string) => void, open: boolean, toggleMenu: ()=> void} = $props()

</script>

<nav class="relative py-5 flex items-center justify-between">
  <a href="/" class="text-3xl font-bold lg:text-2xl">
    {"< TienLN />"}
  </a>
  <div class="flex gap-5 items-center lg:hidden">
    <div class="flex gap-5 pr-5 border-r-2 border-gray-38">
      {#each items as item}
        <div
          onclick={() => onclick(item.to)}
          class="cursor-pointer text-lg hover:text-blue-300"
        >
          {item.label}
        </div>
      {/each}
    </div>

    <a href="/Nhut_Tien_Resume.pdf" class="down-cv" download> Download CV </a>
  </div>
  <div class="hidden lg:block" onclick={toggleMenu}>
    {@html open ? close : bars}
  </div>

</nav>

<style module>
  .down-cv {
    @apply transition-all ease-in-out duration-300 bg-white text-black-12 py-1 px-4 rounded-xl hover:text-white hover:bg-transparent border;
  }
</style>
