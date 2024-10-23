<script>
    export let data;

    const L = data.word.length;

    let counter = 0;
    let Selected = data.word;

    let Q = 0;
    let A = 1;
    let P = 2;
    let G = 3;
    let X = 4;

    function draw(){
        let Rand = Math.floor(Math.random()* L);
        var Alea1 = Rand
        var Alea2 = Rand

        while (Alea1 == Rand)
            {var Alea1 = Math.floor(Math.random()* L);}

        while (Alea2 == Rand || Alea2 == Alea1)
            {var Alea2 = Math.floor(Math.random()* L);}

        Words_drawn = [Selected[Rand][Q],Selected[Rand][A],Selected[Alea1][A],Selected[Alea2][A],Selected[Rand][P]];

        return[Words_drawn,Rand,Alea1,Alea2]
    }

    var Words_drawn = draw()[0];


    function mixup(){
        var correcte = Math.floor(Math.random()* 3);
        let mixwords = new Array(3);
        mixwords[correcte] = Words_drawn[1];
        
        if(correcte == 0)
        {
            mixwords[1] = Words_drawn[2];
            mixwords[2] = Words_drawn[3];
        }
        else if(correcte == 1)
        {
            mixwords[0] = Words_drawn[2];
            mixwords[2] = Words_drawn[3];
        }
        else
        {
            mixwords[0] = Words_drawn[2];
            mixwords[1] = Words_drawn[3];
        }

        return mixwords;
    }

    var Mixwords = mixup();

    let zoomed1 = false;
    let zoomed2 = false;
    let zoomed3 = false;
    var selected = false;
    var position = 0;

    let correct1 = false;
    let correct2 = false;
    let correct3 = false;
    let error1 = false;
    let error2 = false;
    let error3 = false;
    
    function handleBack() {
        draw();
        Mixwords = mixup();
        zoomed1 = false;
        zoomed2 = false;
        zoomed3 = false;
        selected = false;
        position = 0;
        correct1 = false;
        correct2 = false;
        correct3 = false;
        error1 = false;
        error2 = false;
        error3 = false;
        return[Mixwords, zoomed1, zoomed2, zoomed3, selected, position, correct1, correct2, correct3, error1, error2, error3]
    }

    function handleNext() {
        draw();
        Mixwords = mixup();
        zoomed1 = false;
        zoomed2 = false;
        zoomed3 = false;
        selected = false;
        position = 0;correct1 = false;
        correct2 = false;
        correct3 = false;
        error1 = false;
        error2 = false;
        error3 = false;
        return[Mixwords, zoomed1, zoomed2, zoomed3, selected, position, correct1, correct2, correct3, error1, error2, error3]
    }

    
    function toggleZoom1() {
        selected = Mixwords[0]
        position = 1
        zoomed1 = !zoomed1;
        zoomed2 = false;
        zoomed3 = false;
    }

    function toggleZoom2() {
        selected = Mixwords[1]
        position = 2
        zoomed2 = !zoomed2;
        zoomed1 = false;
        zoomed3 = false;
    }

    function toggleZoom3() {
        selected = Mixwords[2]
        position = 3
        zoomed3 = !zoomed3;
        zoomed2 = false;
        zoomed1 = false;
    }

    function handleSubmit(){
       // var i = 0;
        //let CCL = any;
        if(selected == Words_drawn[1]){
            if(position == 1){
                correct1 = !correct1;
            }
            else if(position == 2){
                correct2 = !correct2;
            }
            else{
                correct3 = !correct3;
            }
           // i+=1;

        }
        else{
            if(position == 1){
                error1 = !error1;
            }
            else if(position == 2){
                error2 = !error2;
            }
            else{
                error3 = !error3;
            }
        }
       // if(i==2){
         //       CCL = handleNext();
           // }
       // return[CCL]
    }

</script>

<style>

    .zoomable {
        transition: transform 0.3s ease;
    }

    .zoomed1, .zoomed2, .zoomed3 {
        background-color: rgb(238, 244, 49)
    }

    .correct1, .correct2, .correct3 {
        transform: scale(1.1); /* Adjust the scale value as needed */
        background-color: rgb(135, 233, 43)
    }

    .error1, .error2, .error3 {
        background-color: rgb(245, 81, 45)
    }

    .box {
        display: flex;
        justify-content: center;   /* Horizontally center the text */
        align-items: center;       /* Vertically center the text */
        /*overflow: hidden;          /* Hide any overflow */
        text-align: center;        /* Center text content inside the div */
    }

    .text {
        display: inline-block;
        max-width: 100%;           /* Ensure text breaks lines */
        overflow-wrap: break-word;  /* Break long words */
        font-size: calc(0.8vw + 0.8vh); /* Shrink font size dynamically */
    }
  
</style>


<h1 class="font-extrabold text-3xl">Pick one</h1>

<!--
<div>
    Check <br>
    Rand = {Rand} <br>
    Alea1 = {Alea1} <br>
    Alea2 = {Alea2} <br>
    Words_drawn = {Words_drawn} <br>

</div>
-->

<!--The Flash Card-->
<div class="flex items-center justify-center mt-10">
    <div class="flex flex-col items-center bg-gray-100 rounded-lg shadow-md">
        <div class="w-72 h-32 p-4 border border-gray-300 bg-white m-5 mb-0">
            <p class="w-full h-full p-2 text-lg font-bold text-center content-center border 
            border-gray-300 resize-none">{ Words_drawn[0] }</p>
        </div>
        <div class="flex">

            <button  class="box zoomable w-52 h-28 p-4 border border-gray-300
             bg-white m-5 mb-0 cursor-pointer" 
            class:zoomed1
            class:correct1
            class:error1
            on:click={toggleZoom1}>

                <p class="text w-full h-full p-2 text-center content-center border border-gray-300">
                    { Mixwords[0] }
                </p>

            </button>

            <button class="box zoomable w-52 h-28 p-4 border border-gray-300 
            bg-white m-5 mb-0 cursor-pointer"
            class:zoomed2
            class:correct2
            class:error2
            on:click={toggleZoom2}>

                <p class="text w-full h-full p-2 text-center content-center border border-gray-300">
                    { Mixwords[1] }
                </p>
            </button>

            <button class="box zoomable w-52 h-28 p-4 border border-gray-300 
            bg-white m-5 mb-0 cursor-pointer"
            class:zoomed3
            class:correct3
            class:error3
            on:click={toggleZoom3}>

                <p class="text w-full h-full p-2 text-center content-center border border-gray-300 resize-none">
                    { Mixwords[2] }
                </p>

            </button>

        </div>
        <div>
            <button on:click={handleBack} class="bg-yellow-400 rounded-lg p-1 px-3 shadow-md text-white font-bold m-5 mx-2 mb-0">Back</button>
            <button on:click={handleSubmit} class="bg-blue-400 rounded-lg p-1 mx-24 shadow-md text-white font-bold m-5">Submit</button>
            <button on:click={handleNext} class="bg-yellow-400 rounded-lg p-1 px-3 shadow-md text-white font-bold m-5 mx-2 mb-0">Next</button>
        </div>
    </div>
</div>