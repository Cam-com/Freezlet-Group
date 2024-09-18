<script>

    export let data;

    let L = data.word.length;
    let Rand = Math.floor(Math.random()* L);
    let position = 1;

    let question = data.word[Rand][0];
    let answer = data.word[Rand][1];
    
    let Memory = [Rand];
    

    function handleNext(){
        position = position +1;

        if(position >= Memory.length){
            if(position > L){
                alert(
                    `You have seen all the Cards !`
                );
                position = L;
            }

            else{
                while(Memory.includes(Rand)){
                    Rand = Math.floor(Math.random()* L);
                }

                Memory[Memory.length] = Rand;
            }

            question = data.word[Rand][0];
            answer = data.word[Rand][1];
        }

        else{
            question = data.word[position][0];
            answer = data.word[position][1];
        }

        showDiv = false;

        return [question,answer,Memory,Rand];
    }

    // Reactive variable to track the visibility of the div
    let showDiv = false;

    /*
    // Function to handle the "Next" button click
    function handleBack() {
        position = position - 1

        if(position < 0){
            position = 0;
            alert(
                `You are already back at the first Card !`
            )
        }

        question = data.word[Memory[position]][0];
        answer = data.word[Memory[position]][1];

        showDiv = false;

        return [question,answer,position];
    }
    */

    // Function to handle the submit button click
    function handleSubmit() {
        showDiv = true; // Set the variable to true to show the div
    }

    let validated = [];
    let wronged = [];

    function Validate(){
        if( validated.length+wronged.length < L){
                validated[validated.length] = [position];
            }
        return [handleNext(),validated];
    }

    function Wrong(){
        if( validated.length+wronged.length < L){
                wronged[wronged.length] = [position];
            }
        return [handleNext(),wronged];
    }

    function Startfromtop(){
        
    }

</script>


<h1 class="font-extrabold text-3xl">Flash cards</h1>

<!--The Flash Card-->
<div class="place-content-center flex items-start justify-center flex-wrap">
    <div>
        L { L } <br>
        position { position } <br>
        question { question } <br>
        answer { answer } <br>
        Memory { Memory } <br>
        validated { validated } <br>
        wronged { wronged } <br>

    </div>
    
    
    <div class="flex flex-col items-center bg-gray-100 rounded-lg shadow-md">
        <div>
            <div class="mt-3 p-2 px-5 bg-white rounded-lg">
                Counter { L }
            </div>
            <div class="flex justify-center">
                <div class="w-8 h-8 bg-red-500 mt-2 mx-2 mb-0 rounded-lg text-white text-center p-1">
                    <p class="font-extrabold">
                        { wronged.length }
                    </p>
                </div>
                <div class="w-8 h-8 bg-green-500 mt-2 mx-2 mb-0 rounded-lg text-white text-center p-1">
                    <p class="font-extrabold">
                        { validated.length }
                    </p>
                </div>
                
            </div>
            
        </div>
        <div class="flex items-center">
            
            <div class="w-56 h-32 p-4 border border-gray-300 bg-white m-3 mb-0">
                <p class="w-full h-full p-2 text-lg font-bold text-center content-center border border-gray-300 resize-none">{ question }</p>
            </div>
        </div>
        
        <!--<div class="w-72 h-20 p-4 border border-gray-300 bg-white m-5 mb-0">
            <textarea class="w-full h-full p-2 border border-gray-300 resize-none" placeholder="Enter traduction here..."></textarea>
        </div>-->
        <div class="flex justify-center">
            <button on:click={Wrong} class="w-10 h-10 bg-red-500 rounded-lg p-1 px-3 shadow-md text-white font-bold m-5 mx-2 mb-0">
                <p>X</p>
            </button>
            
            <button on:click={handleSubmit} class="bg-blue-400 rounded-lg p-1 px-3 shadow-md text-white font-bold m-5 mx-7 mb-0">Submit</button>
            <button on:click={Validate} class="w-10 h-10 bg-green-500 rounded-lg p-1 px-3 shadow-md text-white font-bold m-5 mx-2 mb-0">
                <p>V</p>
            </button>
        </div>
        
        <div class="w-56 h-32 p-4 border border-gray-300 bg-white m-5">
            {#if showDiv}
                <p class="w-full h-full p-2 text-lg font-bold text-center content-center border border-gray-300 resize-none">{ answer }</p>
            {/if}
        </div>
        
        <!--
        <button on:click={handleBack} class="bg-yellow-400 rounded-lg p-1 px-3 shadow-md text-white font-bold m-5 mx-2 mb-0">Back</button>
        -->

        <div>
            <button on:click={Startfromtop} class="bg-white rounded-lg p-1 px-3 shadow-md text-black font-bold mx-2 mb-5">
                Start from top
            </button>
        </div>

    </div>
    
</div> 

<div class="fixed top-40 right-40">
    
</div>

<div class="place-content-center flex items-start justify-center flex-wrap">
    
</div>