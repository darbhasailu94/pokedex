<script>
    import { pokemon } from "../stores/pokestore"
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<p class="text-4xl text-center my-8 uppercase">List of Pokemon</p>
<ul>
    {#each $pokemon as pokeman}
    <li>{pokeman.name}</li>
    {/each}
</ul>