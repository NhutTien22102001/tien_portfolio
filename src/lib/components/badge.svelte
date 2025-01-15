<script lang="ts" module>
  import type { HTMLAttributes } from "svelte/elements";
  type Props = HTMLAttributes<EventTarget>;
</script>

<script lang="ts">
  import { twMerge, type ClassNameValue } from "tailwind-merge";
  const { children, class: classes }: Props = $props();
</script>

<div>
    <div class={twMerge('w-fit bg-gray-51 py-1 px-6 text-sm rounded-xl', classes as ClassNameValue)}>
        {@render children?.()}
    </div>
</div>
