<!-- localhost:5137/freezlet.com -->
<script lang="ts">
    import { page } from "$app/stores";

    $: email = $page.params.email;
</script>

<h1>Game 1 { email }</h1>

