<script lang="ts">
  import About from "$lib/pages/home/about.svelte";
  import Contact from "$lib/pages/home/contact.svelte";
  import Ex from "$lib/pages/home/ex.svelte";
  import Intro from "$lib/pages/home/intro.svelte";
  import Projects from "$lib/pages/home/projects.svelte";
  import Skills from "$lib/pages/home/skills.svelte";

  import type { Config } from '@sveltejs/adapter-vercel';

  export const config: Config = {
    runtime: 'edge'
  };

</script>


<Intro />
<About />
<Skills />
<Ex />
<Projects />
<Contact />