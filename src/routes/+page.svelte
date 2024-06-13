<script>
	import Counter from './Counter.svelte';
	import First_Image from '$lib/images/ai-generated-homepage.jpeg';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="Welcome" content="Welcome" />
</svelte:head>




<div class="bg-slate-500">
	Hello
</div>


<section>
	<h1>
		<span class="welcome">
			<picture>
				<source srcset={First_Image} type="image/jpeg"/>
				<img src={First_Image} alt="Welcome" />
			</picture>
		</span>

		<p class="text-blue-500">Try our new<br />Freezlet App test</p>
	</h1>

	<h2>
		Select the <strong>language you want to learn</strong> and your <strong>origin language</strong>
	</h2>

	<Counter />
</section>

<style>
	/**@import './app.css';**/

	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
