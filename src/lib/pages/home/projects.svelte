<script lang="ts">
  import { projects } from "$lib/projects";
  import Badge from "$lib/components/badge.svelte";
  import Container from "$lib/components/container.svelte";
  import ProjectCard from "$lib/components/project-card.svelte";
</script>

<Container class="py-28 lg:py-14">
  <Badge class="m-auto">Recently Projects</Badge>
  {#each projects.slice(0, 3) as data, index}
    <ProjectCard class="mt-8" {data} {index} />
  {/each}
</Container>
