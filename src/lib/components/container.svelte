<script lang="ts" module>
    import type { HTMLAttributes } from "svelte/elements";
    type Props = HTMLAttributes<EventTarget>;
</script>

<script lang="ts">
    import { twMerge, type ClassNameValue } from 'tailwind-merge'
    const { children, class: classes, ...rest }: Props = $props();
</script>

<div class={twMerge("max-w-[1440px] m-auto px-5", classes as ClassNameValue)} {...rest}>
    {@render children?.()}
</div>