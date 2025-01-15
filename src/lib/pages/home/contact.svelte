<script lang="ts">
  import Badge from "$lib/components/badge.svelte";
  import Container from "$lib/components/container.svelte";

  import mail from "../../svgs/email.svg?raw";
  import phone from "../../svgs/phone.svg?raw";
  import copy from "../../svgs/copy.svg?raw";
  import { socials } from "./intro.svelte";
  import { copyText } from "$lib";

</script>

<div class="bg-black-27 py-8" id="contact">
  <Container>
    <Badge class="m-auto">Get in touch</Badge>
    <div class="text-center text-lg font-thin mt-8">
      What’s next? Feel free to reach out to me if you're looking for a
      developer, have a query, or simply want to connect.
    </div>

    <div class="flex justify-center items-center gap-4 mt-4">
        {@html mail}
        <span class="font-bold text-lg sm:text-sm">lamnhuttien2210@gmail.com</span>
        <span onclick={() => copyText('lamnhuttien2210@gmail.com')}>
          {@html copy}
        </span>
    </div>

    <div class="flex justify-center items-center gap-4 mt-4">
        {@html phone}
        <a href="tel:+84949814865" class="font-bold text-lg sm:text-sm">+84 949814865</a>
        <span onclick={() => copyText('+84 949814865')}>
          {@html copy}
        </span>
    </div>

    <div class="text-center text-lg font-thin mt-8">
        You may also find me on these platforms!
    </div>
    <div class="mt-4 flex justify-center items-center gap-4">
        {#each socials as { icon, url }}
          <a href={url} target="_blank">
            {@html icon}
          </a>
        {/each}
      </div>
  </Container>
</div>
<div class="py-4 text-center">
    2024 | <span class="underline">Coded</span> by Tien
</div>
