<script>
import { supabase } from "../supabase.js"
import Nav from "../components/nav.svelte";
import "../styles/tailwind-output.css"
</script>
<svelte:head>
    <title>
        Pokedex
    </title>
</svelte:head>
<div class="p-8 max-w-6xl mx-auto">
    <Nav />
    <slot />
</div>