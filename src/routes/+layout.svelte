<script>
	import Header from './Header.svelte';
	import './styles.css';
	import '../app.css';
	import { goto } from "$app/navigation";
</script>


<div class="app">

	<Header />
<!--	
	<div class="fixed top-20 left-0 max-w-40">
		<button on:click={() => goto("/login")}>Login</button>
		<span class="text-lg ml-2">cooper@gmail.com</span>
		<button on:click={() => console.log("logging out")}>Logout</button>
	</div>
-->

	<main>
		<slot />
	</main>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

</style>
