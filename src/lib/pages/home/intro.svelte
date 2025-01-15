<script lang="ts" module>
    export const socials = [
    {
      icon: telegram,
      url: "https://t.me/tien221001",
    },
    {
      icon: linkedin,
      url: "https://www.linkedin.com/in/tien-nhut-638a61231/",
    },
    {
      icon: skype,
      url: "https://join.skype.com/invite/yrMj3taQYkKG",
    },
    {
      icon: discord,
      url: "https://discord.com/users/1165852706049630214",
    },
  ];
</script>

<script lang="ts">
  import location from "../../svgs/location.svg?raw";
  import online from "../../svgs/icon-dot-emerald-500.svg?raw";
  import telegram from "../../svgs/telegram.svg?raw";
  import linkedin from "../../svgs/linkedin.svg?raw";
  import discord from "../../svgs/discord.svg?raw";
  import skype from "../../svgs/skype.svg?raw";
  import Container from "$lib/components/container.svelte";
</script>

<Container class="py-28 flex lg:flex-col-reverse lg:gap-16 lg:py-14">
  <div class="w-full max-w-[60%] lg:text-center lg:max-w-full">
    <h1 class="text-5xl font-bold">
      Hi, I’m Tien
      <div class="inline-block animate-wiggle-more animate-infinite">👋</div>
    </h1>
    <p class="font-light mt-2">
      I am a innovative Front End Engineer with more than
      <strong class="text-blue-500 font-extrabold text-xl underline"
        >3 years
      </strong> experience building and maintaining responsive website in the industry.
      Proficient in HTML, CSS, JavaScript, plus modern libraries and frameworks.
      And I’m ready to become a Fullstack Developer if I have the opportunity to
      develop it
    </p>
    <div class="mt-12 flex items-center gap-2 lg:justify-center">
      {@html location}
      Ho Chi Minh city, Viet Nam
    </div>
    <div class="mt-2 flex items-center gap-2 lg:justify-center">
      <div class="w-full max-w-6 flex items-center justify-center">
        {@html online}
      </div>
      Available for new challenges
    </div>
    <div class="mt-12 flex items-center gap-4 lg:justify-center">
      {#each socials as { icon, url }}
        <a href={url} target="_blank">
          {@html icon}
        </a>
      {/each}
    </div>
  </div>

  <div class="flex-grow flex lg:justify-center">
    <div
      class="transition-all duration-300 -rotate-12 hover:rotate-12 z-[5] relative w-full mr-5 m-auto max-w-[280px] h-[320px] border-4 border-black lg:m-0"
    >
      <img src="/me_2.webp" alt="" class="h-full object-cover w-full">
      <div
        class="w-full h-full bg-gray-51 absolute left-5 top-5 z-[-1]"
      ></div>
    </div>
  </div>
</Container>
