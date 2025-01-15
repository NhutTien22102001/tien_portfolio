<script lang="ts">
  import Container from "$lib/components/container.svelte";
  import Nav, { items } from "$lib/components/nav.svelte";
  import "$lib/styles/tailwind.css";
  const { children } = $props();

  let open = $state<boolean>(false);

  const onclick = (id: string) => {
    const block = document.getElementById(id);
    const y = (block?.getBoundingClientRect().top || 0) + window.scrollY;
    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
    toggleMenu()
  };

  const toggleMenu = () => {
    open = !open;
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };
</script>

<div class="overflow-x-hidden">
  <div
    class="fixed h-[calc(100%-72px)] top-[72px] z-10 overflow-hidden w-full bg-black-12 left-0 translate-x-full transition-all duration-500 ease-in-out"
    class:active={open}
  >
    <div class="flex flex-col gap-5 p-5 border-t border-b border-gray-38">
      {#each items as item}
        <div
          onclick={() => onclick(item.to)}
          class="w-fit cursor-pointer text-lg hover:text-blue-300"
        >
          {item.label}
        </div>
      {/each}
    </div>
    <div class="mt-8 px-5">
      <a
        href="/Nhut_Tien_Resume.pdf"
        class="down-cv block text-center max-w-[300px] m-auto"
        download
      >
        Download CV
      </a>
    </div>
  </div>
</div>
<header class="sticky top-0 bg-black-12 z-20 ">
  <Container class="">
    <Nav {onclick} {open} {toggleMenu} />
  </Container>
</header>
<main class="overflow-hidden relative z-0">
  {@render children?.()}
</main>

<style module>
  .down-cv {
    @apply transition-all ease-in-out duration-300 bg-white text-black-12 py-1 px-4 rounded-xl hover:text-white hover:bg-transparent border;
  }
  .active {
    @apply translate-x-0;
  }
</style>
