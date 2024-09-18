<script>

    export let data;

    let showButton = true;
    let showCard = false;
    let showDiv = false;

    let counter = 0;
    
    let L = data.word.length;
    let Q = 0;
    let A = 1;

    let Rand = 0;
    let question = data.word[Rand][Q];
    let answer = data.word[Rand][A];
    let correct = L - counter;
    let position_in_data = 0;
    let Left2learn_positions_in_data = [0];

    let Check = data.word[Rand][2]



    function PickOne(){

        showButton = false;
        showCard = true;
        showDiv = false;

        let count = 0;
        Left2learn_positions_in_data = [0];
        
        for(var i=0; i < L; i++){
            let position = data.word[i][2];
            if( position == false){
                Left2learn_positions_in_data[count] = i;
                count = Left2learn_positions_in_data.length;
            }
        }

        if(count == 0){
            correct = L - count;
            counter = count;
        }

        else{
            Rand = Math.floor(Math.random()* count);
            position_in_data = Left2learn_positions_in_data[Rand];
            question = data.word[position_in_data][Q];
            answer = data.word[position_in_data][A];
            correct = L - count;
            counter = count;
        }

        return [question, answer,Left2learn_positions_in_data, position_in_data, counter, correct]
    }

    function handleSubmit(){
        showDiv = true;
    }

    function Validate(){
        var P = position_in_data;
        data.word[P][2] = true;
        return [PickOne()]
    }

    function Reset(){
        for(var i=0; i < L; i++){
            data.word[i][2] = false;
        }
        return [PickOne()]
    }

    function Ch(){
        Q = 0;
        A = 1;
        return [Q,A]
    }

    function Trad(){
        Q = 1;
        A = 0;
        return [Q,A]
    }


</script>

<!--
<div>
    Check { Check } <br>
    L { L } <br>
    counter { counter } <br>
    Left to learn { Left2learn_positions_in_data } <br>
    position in data { position_in_data } <br>
    question { question } <br>
    answer { answer } <br>
    showButton { showButton } <br>
    showCard { showCard } <br>
    showDiv { showDiv } <br>
</div>
-->

<h1 class="font-extrabold text-3xl">Flash cards</h1>

<div>
    <button on:click={Ch} class="bg-white rounded-lg p-1 px-3 shadow-md text-black font-bold mx-2 mb-3
                                    hover:bg-orange-300 active:bg-orange-800 focus:bg-orange-600">
        文字
    </button>
    <button on:click={Trad} class="bg-white rounded-lg p-1 px-3 shadow-md text-black font-bold mx-2 mb-3
                                    hover:bg-orange-300 active:bg-orange-800 focus:bg-orange-600">
        Trad
    </button>
</div>

{#if showButton}
<div>
    <button on:click={PickOne} class="bg-white rounded-lg p-1 px-3 shadow-md text-black font-bold mx-2 mb-3
                                     hover:bg-yellow-300">
        Start !
    </button>
</div>
{/if}



{#if showCard}  

<div>
    <button on:click={Reset} class="bg-white rounded-lg p-1 px-3 shadow-md text-black font-bold mx-2 mb-3
                                    hover:bg-yellow-300">
        Start from top
    </button>
</div>


    <!--The Flash Card-->
    <div class="place-content-center flex items-start justify-center flex-wrap">



        <div class="flex flex-col items-center bg-gray-100 rounded-lg shadow-md">

            <div>
                <div class="mt-3 p-2 px-2 bg-white rounded-lg font-bold">
                    <div class="flex justify-center">

                        <div class="w-8 h-8 bg-red-500 mt-0 mx-1 mb-0 rounded-lg text-white text-center p-1">
                            <p class="font-extrabold">
                                { counter }
                            </p>
                        </div>

                        <div class="mt-0 mx-1 mb-0 rounded-lg text-center p-1">
                            TOTAL { data.word.length }
                        </div>

                        <div class="w-8 h-8 bg-green-500 mt-0 mx-1 mb-0 rounded-lg text-white text-center p-1">
                            <p class="font-extrabold">
                                { correct }
                            </p>
                        </div>
                        
                    </div>
                </div>
                
                    
            </div>



            <div class="flex items-center">
                
                <div class="w-56 h-32 p-4 border border-gray-300 bg-white m-3 mb-0">
                    <p class="w-full h-full p-2 text-lg font-bold text-center content-center border border-gray-300 resize-none">{ question }</p>
                </div>
            </div>


            
            <div class="flex justify-center">
                <button on:click={PickOne} class="w-10 h-10 bg-red-500 rounded-lg p-1 px-3 shadow-md text-white font-bold m-3 mx-2 mb-0">
                    <p>X</p>
                </button>
                
                <button on:click={handleSubmit} class="bg-blue-400 rounded-lg p-1 px-3 shadow-md text-white font-bold m-3 mx-7 mb-0">Submit</button>
                <button on:click={Validate} class="w-10 h-10 bg-green-500 rounded-lg p-1 px-3 shadow-md text-white font-bold m-3 mx-2 mb-0">
                    <p>V</p>
                </button>
            </div>


            
            <div class="w-56 h-32 p-4 border border-gray-300 bg-white m-5 mt-3">
                {#if showDiv}
                    <p class="w-full h-full p-2 text-lg font-bold text-center content-center border border-gray-300 resize-none">{ answer }</p>
                {/if}
            </div>

        </div>



    </div> 
{/if}

