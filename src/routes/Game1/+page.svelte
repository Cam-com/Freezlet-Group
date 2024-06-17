<script>
    import { goto } from "$app/navigation";
</script>


<h1>Game 1</h1>

<!-- Navbar -->
<div class="bg-base-100 justify-between fixed top-20 left-0 right-0">
    <div class="navbar max-w-3xl mx-auto justify-between">
        <div>
            <a href="/" class="btn btn-ghost text-xl">Pokepage</a>
            <a href="/user" class="btn btn-ghost">My Page</a>
        </div>

        <div>
            <button on:click={() => goto("/login")}>Login</button>
            <span class="text-lg ml-2">cooper@gmail.com</span>
            <button on:click={() => console.log("logging out")}>Logout</button>
        </div>

    </div>

</div>

<!--The Flash Card-->
<div>

</div>