<script>

    export let data;

    let question = data.word[0][0]
    let answer = data.word[0][1]

    var Memory = []
    let L = data.word.length

    function pickone(){

        let Rand = Math.floor(Math.random()* 16);

        Memory[Memory.length] = Rand

        question = data.word[Rand][0]
        answer = data.word[Rand][1]

        showDiv = false

        return [question,answer,L]
    }

    // Reactive variable to track the visibility of the div
    let showDiv = false;

    // Function to handle the "Next" button click
    function handleBack() {
        let ppp = Memory.length-1
        question = data.words[Memory[ppp]][0]
        answer = data.words[Memory[ppp]][1]

        return [question,answer]
    }

    // Function to handle the submit button click
    function handleSubmit() {
    showDiv = true; // Set the variable to true to show the div
    }

</script>


<h1 class="font-extrabold text-3xl">Flash cards</h1>

<!--The Flash Card-->
<div class="place-content-center flex items-center justify-center min-h-screen">
    <div class="flex flex-col items-center bg-gray-100 rounded-lg shadow-md">
        <div class="w-96 h-48 p-4 border border-gray-300 bg-white m-5 mb-0">
            <p class="w-full h-full p-2 text-lg font-bold text-center content-center border border-gray-300 resize-none">{ question }</p>
        </div>
        <!--<div class="w-72 h-20 p-4 border border-gray-300 bg-white m-5 mb-0">
            <textarea class="w-full h-full p-2 border border-gray-300 resize-none" placeholder="Enter traduction here..."></textarea>
        </div>-->
        <div class="flex justify-center">
            <button on:click={handleBack} class="bg-yellow-400 rounded-lg p-1 px-3 shadow-md text-white font-bold m-5 mx-2 mb-0">Back</button>
            <button on:click={handleSubmit} class="bg-blue-400 rounded-lg p-1 px-3 shadow-md text-white font-bold m-5 mx-7 mb-0">Submit</button>
            <button on:click={pickone} class="bg-yellow-400 rounded-lg p-1 px-3 shadow-md text-white font-bold m-5 mx-2 mb-0">Next</button>
        </div>
        
        <div class="w-96 h-48 p-4 border border-gray-300 bg-white m-5">
            {#if showDiv}
                <p class="w-full h-full p-2 text-lg font-bold text-center content-center border border-gray-300 resize-none">{ answer }</p>
            {/if}
        </div>

    </div>
</div>