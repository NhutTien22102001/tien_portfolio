<script lang="ts">
  import Badge from "../../components/badge.svelte";
  import Container from "../../components/container.svelte";

  const items = [
    `I'm a developer who specializes in front-end development. I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.`,
    `
                        I began my journey as a web developer since 10/2021, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. 3 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as React.js, Vuejs,  TypeScript, Tailwindcss and much more.
    `,
    `          I am very much a progressive thinker and enjoy working on products end
          to end`,
          `          One last thing, I'm available for freelance work or fulltime work, so
          feel free to reach out and say 'hi' to me!`
  ];
</script>

<div class="bg-black-27 py-28 z-1 relative lg:py-14" id="about">
  <Container>
    <Badge class="m-auto">About me</Badge>
    <div class="flex mt-12 gap-4 lg:flex-col lg:gap-16">
      <div class="w-full">
        <div
          class="transition-all duration-300 hover:-rotate-12 rotate-12 relative z-[5] w-full ml-5 max-w-[400px] h-[400px] border-4 border-black lg:m-auto"
        >
          <img src="/me.webp" alt="" class="h-full object-cover w-full" />
          <div
            class="w-full h-full bg-gray-51 absolute right-5 top-5 -z-[1]"
          >
          </div>
        </div>
      </div>

      <div class="w-full">
        <h2 class="text-2xl font-semibold">
          Curious about me? Here you have it:
        </h2>
        {#each items as item}
            <p class="mt-8 text-sm font-light leading-[1.8]">{item}</p>
        {/each}
      </div>
    </div>
  </Container>
</div>
