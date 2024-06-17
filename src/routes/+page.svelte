<script>
	import Counter from './Counter.svelte';
	import First_Image from '$lib/images/ai-generated-homepage.jpeg';
	import Dropdown from './Dropdown.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="Welcome" content="Welcome" />
</svelte:head>




<div class="flex self-center text-3xl font-extrabold m-3">
	Welcome to Freezlet !
</div>


<section>
	<!--
	<h1>
		<span class="welcome">
			<picture>
				<source srcset={First_Image} type="image/jpeg"/>
				<img src={First_Image} alt="Welcome" />
			</picture>
		</span>

		<p class="text-blue-500">Try our new<br />Freezlet App test</p>
	</h1>
	-->
	
	<h2 class="mb-10">
		Select the <strong>language you want to learn</strong> and your <strong>origin language</strong>
	</h2>


	<Dropdown />

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
</style>

<sections class="flex-col self-center">
	<div class="flex self-center">
		<a href="/Game1">
		<div class="block border-2 border-black  m-5 p-10
		md:mx-10 md:my-5 md:p-15 lg:mx-15 lg:my-5 lg:p-20 xl:mx-20 xl:my-5 xl:p-25">
			Game 1
		</div></a>
		<a href="/Game2">
		<div class="block border-2 border-black m-5 p-10
		md:mx-10 md:my-5 md:p-15 lg:mx-15 lg:my-5 lg:p-20 xl:mx-20 xl:my-5 xl:p-25">
			Game 2
		</div></a>
	</div>
	<div class="flex self-center">
		<a href="/Game3">
		<div class="block border-2 border-black m-5 p-10
		md:mx-10 md:my-5 md:p-15 lg:mx-15 lg:my-5 lg:p-20 xl:mx-20 xl:my-5 xl:p-25">
			Game 3
		</div></a>
		<a href="/Game4">
		<div class="block border-2 border-black m-5 p-10
		md:mx-10 md:my-5 md:p-15 lg:mx-15 lg:my-5 lg:p-20 xl:mx-20 xl:my-5 xl:p-25">
			Game 4
		</div></a>
	</div>
</sections>
