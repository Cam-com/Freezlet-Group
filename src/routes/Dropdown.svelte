<script>
	let languages = [
		{
			id: 1,
			text: `English`
		},
		{
			id: 2,
			text: `Chinese`
		},
		{
			id: 3,
			text: `French`
		}
	];

	/**
	 * @type {any}
	 */
	let selected_learn;
    /**
	 * @type {any}
	 */
    let selected_know;

	let answer = '';

	function handleSubmit() {
		alert(
			`answered question ${selected_learn.id} (${selected_learn.text}) with "${answer}"`
		);

	}
</script>

<p class="pb-2">
	Select language to <strong>learn</strong>:
</p>

<form class="border-2 mb-5">
	<select
		bind:value={selected_learn}
		on:change={() => (answer = '')}
	>
		{#each languages as learn}
			<option value={learn}>
				{learn.text}
			</option>
		{/each}
	</select>
</form>

<p class="pb-2">
	Select language you <strong>know</strong>:
</p>

<form class="border-2 mb-5">
	<select
		bind:value={selected_know}
		on:change={() => (answer = '')}
	>
		{#each languages as know}
			<option value={know}>
				{know.text}
			</option>
		{/each}
	</select>
</form>


