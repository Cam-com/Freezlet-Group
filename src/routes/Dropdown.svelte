<script>
	let languages = [
		{
			id: 1,
			text: `English`
		},
		{
			id: 2,
			text: `Spanish`
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
			`answered question (${selected_learn.id}) (${selected_learn.text}) with "${answer}"
			answered question (${selected_know.id}) (${selected_know.text}) with "${answer}"`
		);

		if(selected_learn.id == 1 || selected_learn.id == 3){
			var TABLE = 'Simple_ENG'

			if(selected_know.id == 'English'){
				QUESTION = 'SECOND'
			}
			if(selected_know_know.id =  'French'){
				QUESTION = 'FIRST'
			}
		}
		if(selected_learn.id == 2){
			var TABLE = 'Simple_Span'
			QUESTION = 'FIRST'
		}


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


