<script>

    export let data;

    let showButton = true;
    let showCard = false;
    let showDiv = false;
    let showPinyin = false;

    let counter = 0;
    let selected = data.word;

    let K = data.word.length;
    let Q = 0;
    let A = 1;
    let P = 2;
    let G = 3;
    let X = 4;

    let Voc_pack = "Basic"

    function select(){
        selected = [];
        let j=0;


            for(var i=0 ; i<K ; i++){
                if(data.word[i][G] == Voc_pack){
                    selected[j] = data.word[i];
                    j += 1;
                }
            }      

            L = selected.length;
            question = selected[Rand][Q];
            answer = selected[Rand][A];
            Pinyin = selected[Rand][P];
            correct = L - counter;

            Reset();

        return[selected, L, question, answer, Pinyin, correct, PickOne()]
    } 

    function Basic(){
        Voc_pack = "Basic";
        return[Voc_pack, select()]
    }

    function Intermediary(){
        Voc_pack = "B-1";
        return[Voc_pack, select()]
    }

    function Advanced(){
        Voc_pack = "A-1";
        return[Voc_pack, select()]
    }

    function HSK3(){
        Voc_pack = "HSK3";
        return[Voc_pack, select()]
    }

    function Advanced2(){
        Voc_pack = "A-2";
        return[Voc_pack, select()]
    }

    function Basic2(){
        Voc_pack = "B-2";
        return[Voc_pack, select()]
    }

    function Basic3(){
        Voc_pack = "B-3";
        return[Voc_pack, select()]
    }

    function All_selected(){
        selected = data.word;
        L = selected.length;
        question = selected[Rand][Q];
        answer = selected[Rand][A];
        Pinyin = selected[Rand][P];
        correct = L - counter;

        Reset();

        return[selected, L, question, answer, Pinyin, correct, PickOne()]
    }

    let L = selected.length;
    let Rand = 0;
    let question = selected[Rand][Q];
    let answer = selected[Rand][A];
    let Pinyin = selected[Rand][P];
    let correct = L - counter;
    let position_in_data = 0;
    let Left2learn_positions_in_data = [0];


    function PickOne(){

        showButton = false;
        showCard = true;
        showDiv = false;
        showPinyin = false;

        let count = 0;
        Left2learn_positions_in_data = [0];
        
        for(var i=0; i < L; i++){
            let position = selected[i][X];
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
            question = selected[position_in_data][Q];
            answer = selected[position_in_data][A];
            Pinyin = selected[position_in_data][P];
            correct = L - count;
            counter = count;
        }

        return [question, answer, Pinyin, Left2learn_positions_in_data, position_in_data, counter, correct]
    }

    function handleSubmit(){
        showDiv = true;
    }

    function Validate(){
        var P = position_in_data;
        selected[P][X] = true;
        return [PickOne()]
    }

    function Reset(){
        for(var i=0; i < L; i++){
            selected[i][X] = false;
        }
        return [PickOne()]
    }

    function Ch(){
        Q = 0;
        A = 1;
        Reset()
        return [Q,A,PickOne()]
    }

    function Trad(){
        Q = 1;
        A = 0;
        Reset()
        return [Q,A,PickOne()]
    }

    function Clue(){
        showPinyin = true;
    }


</script>

<!--
<div>
    Check { Check } <br>
    Double check { selected[7] } <br>
    Selected { selected } <br>
    L { L } <br>
    K { K } <br>

    
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
                                    hover:bg-orange-300  focus:bg-orange-600">
        文字
    </button>
    <button on:click={Trad} class="bg-white rounded-lg p-1 px-3 shadow-md text-black font-bold mx-2 mb-3
                                    hover:bg-orange-300  focus:bg-orange-600">
        Trad
    </button>
    <button on:click={All_selected} class="bg-white rounded-lg p-1 px-3 shadow-md text-black font-bold mx-2 mb-3
                                    hover:bg-blue-300  focus:bg-blue-600">
        All
    </button>
    <button on:click={Basic} class="bg-gray-100 rounded-lg p-1 px-3 shadow-md text-black font-bold mx-2 mb-3
                                    hover:bg-gray-300  focus:bg-gray-600">
        Basic
    </button>
    <button on:click={HSK3} class="bg-white rounded-lg p-1 px-3 shadow-md text-black font-bold mx-2 mb-3
                                    hover:bg-orange-300  focus:bg-orange-600">
        HSK3
    </button>
    <button on:click={Intermediary} class="bg-green-100 rounded-lg p-1 px-3 shadow-md text-black font-bold mx-2 mb-3
                                    hover:bg-green-300  focus:bg-green-600">
        B-1
    </button>
    <button on:click={Basic2} class="bg-green-100 rounded-lg p-1 px-3 shadow-md text-black font-bold mx-2 mb-3
                                    hover:bg-green-300  focus:bg-green-600">
        B-2
    </button>
    <button on:click={Basic3} class="bg-green-100 rounded-lg p-1 px-3 shadow-md text-black font-bold mx-2 mb-3
                                    hover:bg-green-300  focus:bg-green-600">
        B-3
    </button>
    <button on:click={Advanced} class="bg-red-100 rounded-lg p-1 px-3 shadow-md text-black font-bold mx-2 mb-3
                                    hover:bg-red-300  focus:bg-red-600">
        A-1
    </button>
    <button on:click={Advanced2} class="bg-red-100 rounded-lg p-1 px-3 shadow-md text-black font-bold mx-2 mb-3
                                    hover:bg-red-300  focus:bg-red-600">
        A-2
    </button>
    
</div>

{#if showButton}
<div>
    <button on:click={PickOne} class="bg-yellow-200 rounded-lg p-1 px-3 shadow-md text-black font-bold mx-2 mb-3
                                     hover:bg-yellow-300">
        Start !
    </button>
</div>
{/if}



{#if showCard}  

    <div>
        <button on:click={Reset} class="bg-yellow-200 rounded-lg p-1 px-3 shadow-md text-black font-bold mx-2 mb-3
                                        hover:bg-yellow-300">
            Start from top
        </button>
    </div>

    <div class="flex self-center">

        <!--The Flash Card-->
        <div class="place-content-center flex items-start justify-center flex-wrap">



            <div class="flex flex-col items-center bg-gray-100 rounded-lg shadow-md">

                <div>
                    <div class="mt-3 p-2 px-2 bg-white rounded-lg font-bold">
                        <div class="flex justify-center">

                            <div class="w-10 h-8 bg-red-500 mt-0 mx-1 mb-0 rounded-lg text-white text-center p-1">
                                <p class="font-extrabold">
                                    { counter }
                                </p>
                            </div>

                            <div class="mt-0 mx-1 mb-0 rounded-lg text-center p-1">
                                TOTAL { L }
                            </div>

                            <div class="w-10 h-8 bg-green-500 mt-0 mx-1 mb-0 rounded-lg text-white text-center p-1">
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

        <div class="ml-3 mt-5">

            <button on:click={ Clue } class="rounded-lg p-1 px-3 shadow-md text-black font-bold mx-2 mb-3
                                        bg-green-300 hover:bg-green-600">
                Clue
            </button>

            {#if showPinyin}

            <div class="mx-2 mb-3">
               { Pinyin }
            </div>

            {/if}

        </div>


    </div>

{/if}

