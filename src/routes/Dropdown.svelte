<script>
	let languages = [
		{
			id: 1,
			text: `English`
		},
		{
			id: 2,
			text: `French`
		},
		{
			id: 3,
			text: `Spanish`
		},
		{
			id: 4,
			text: 'Chinese'
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

	
	let QUESTION;


	function handleSubmit() {
		//alert(
		//	`answered question (${selected_learn.id}) (${selected_learn.text}) with "${answer}"
		//	answered question (${selected_know.id}) (${selected_know.text}) with "${answer}"`
		//);

		QUESTION = [selected_learn.id, selected_know.id]; 
		alert(
			`You picked ${QUESTION}`
		);

		return QUESTION;

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

<button on:click={handleSubmit}>
	Submit
</button>


