<script>
    export let data;


    function mixup(){
        let mixwords = ['empty','empty','empty','empty','empty'];
        for (var i=0 ; i<= 4 ; i++)
        {
            let pose = Math.floor(Math.random()* 5);
            while(mixwords[pose] != 'empty')
            {
                pose = Math.floor(Math.random()* 5);
            }

            mixwords[pose] = data.words[i][1];
        }
        return mixwords;
    }

    var Mixwords = mixup();



    function handleBack() {
        window.location.reload(); // Reload the page
    }

    function handleNext() {
        window.location.reload(); // Reload the page
    }



    let zoomed1 = false;
    let zoomed2 = false;
    let zoomed3 = false;
    let zoomed4 = false;
    let zoomed5 = false;
    let zoomed6 = false;
    let zoomed7 = false;
    let zoomed8 = false;
    let zoomed9 = false;
    let zoomed10 = false;
    var selected = ['nothing','nothing'];
    var position = [0,0];

    function toggleZoom1_First() {
        selected[0] = data.words[0][0]
        position[0] = 1
        zoomed1 = !zoomed1;
        zoomed2 = false;
        zoomed3 = false;
        zoomed4 = false;
        zoomed5 = false;
    }

    function toggleZoom2_First() {
        selected[0] = data.words[1][0]
        position[0] = 2
        zoomed2 = !zoomed2;
        zoomed1 = false;
        zoomed3 = false;
        zoomed4 = false;
        zoomed5 = false;
    }

    function toggleZoom3_First() {
        selected[0] = data.words[2][0]
        position[0] = 3
        zoomed3 = !zoomed3;
        zoomed1 = false;
        zoomed2 = false;
        zoomed4 = false;
        zoomed5 = false;
    }

    function toggleZoom4_First() {
        selected[0] = data.words[3][0]
        position[0]= 4
        zoomed4 = !zoomed4;
        zoomed1 = false;
        zoomed2 = false;
        zoomed3 = false;
        zoomed5 = false;
    }

    function toggleZoom5_First() {
        selected[0] = data.words[4][0]
        position[0]= 5
        zoomed5 = !zoomed5;
        zoomed1 = false;
        zoomed2 = false;
        zoomed3 = false;
        zoomed4 = false;  
    }  
    
    function toggleZoom6_First(){
        selected[1] = Mixwords[0]
        position[1]=1
        zoomed6 = !zoomed6;
        zoomed7 = false
        zoomed8 = false
        zoomed9 = false
        zoomed10 = false

    }    

    function toggleZoom7_First(){
        selected[1] = Mixwords[1]
        position[1]=2
        zoomed7 = !zoomed7;
        zoomed6 = false
        zoomed8 = false
        zoomed9 = false
        zoomed10 = false
    }

    function toggleZoom8_First(){
        selected[1] = Mixwords[2]
        position[1]=3
        zoomed8 = !zoomed8;
        zoomed6 = false
        zoomed7 = false
        zoomed9 = false
        zoomed10 = false
    }

    function toggleZoom9_First(){
        selected[1] = Mixwords[3]
        position[1]=4
        zoomed9 = !zoomed9;
        zoomed6 = false
        zoomed7 = false
        zoomed8 = false
        zoomed10 = false
    }

    function toggleZoom10_First(){
        selected[1] = Mixwords[4]
        position[1]=5
        zoomed10 = !zoomed10;
        zoomed6 = false
        zoomed7 = false
        zoomed8 = false
        zoomed9 = false
    }



    function handleSubmit() {
        window.location.reload(); // Reload the page
    }

</script>



<style>
    .zoomable {
        transition: transform 0.3s ease;
    }

    .zoomed1, .zoomed2, .zoomed3, .zoomed4, .zoomed5, .zoomed6, .zoomed7, .zoomed8, .zoomed9, .zoomed10 {
        transform: scale(1.1); /* Adjust the scale value as needed */
        background-color: rgb(238, 244, 49)
    }
  
</style>




<h1 class="font-extrabold text-3xl">Match 5</h1>

<!--The Flash Card-->
<div class="flex items-center justify-center min-h-screen">
    <div class="flex flex-col items-center bg-gray-100 rounded-lg shadow-md">
        <div class="flex">
            <div class="flex flex-col mr-20">

                <button class="zoomable w-40 h-20 p-4 border border-gray-300 bg-white m-5 mb-0"
                class:zoomed1
                on:click={toggleZoom1_First}>
                    <p class="w-full h-full p-2 text-center border border-gray-300 resize-none">{ data.words[0][0] }</p>
                </button>

                <button class="zoomable w-40 h-20 p-4 border border-gray-300 bg-white m-5 mb-0"
                class:zoomed2
                on:click={toggleZoom2_First}>
                    <p class="w-full h-full p-2 text-center border border-gray-300 resize-none">{ data.words[1][0] }</p>
                </button>

                <button class="zoomable w-40 h-20 p-4 border border-gray-300 bg-white m-5 mb-0"
                class:zoomed3
                on:click={toggleZoom3_First}>
                    <p class="w-full h-full p-2 text-center border border-gray-300 resize-none">{ data.words[2][0] }</p>
                </button>

                <button class="zoomable w-40 h-20 p-4 border border-gray-300 bg-white m-5 mb-0"
                class:zoomed4
                on:click={toggleZoom4_First}>
                    <p class="w-full h-full p-2 text-center border border-gray-300 resize-none">{ data.words[3][0] }</p>
                </button>

                <button class="zoomable w-40 h-20 p-4 border border-gray-300 bg-white m-5 mb-0"
                class:zoomed5
                on:click={toggleZoom5_First}>
                    <p class="w-full h-full p-2 text-center border border-gray-300 resize-none">{ data.words[4][0] }</p>
                </button>

            </div>

            <div class="flex flex-col">
                <button class="zoomable w-40 h-20 p-4 border border-gray-300 bg-white m-5 mb-0"
                class:zoomed6
                on:click={toggleZoom6_First}>

                    <p class="w-full h-full p-2 text-center border border-gray-300 resize-none">{ Mixwords[0] }</p>
                </button>
                <button class="zoomable w-40 h-20 p-4 border border-gray-300 bg-white m-5 mb-0"
                class:zoomed7
                on:click={toggleZoom7_First}>
                    <p class="w-full h-full p-2 text-center border border-gray-300 resize-none">{ Mixwords[1] }</p>
                </button>

                <button class="zoomable w-40 h-20 p-4 border border-gray-300 bg-white m-5 mb-0"
                class:zoomed8
                on:click={toggleZoom8_First}>

                    <p class="w-full h-full p-2 text-center border border-gray-300 resize-none">{ Mixwords[2] }</p>
                </button>

                <button class="zoomable w-40 h-20 p-4 border border-gray-300 bg-white m-5 mb-0"
                class:zoomed9
                on:click={toggleZoom9_First}>
                    <p class="w-full h-full p-2 text-center border border-gray-300 resize-none">{ Mixwords[3] }</p>
                </button>
                <button class="zoomable w-40 h-20 p-4 border border-gray-300 bg-white m-5 mb-0"
                class:zoomed10
                on:click={toggleZoom10_First}>

                    <p class="w-full h-full p-2 text-center border border-gray-300 resize-none">{ Mixwords[4] }</p>
                </button>
            </div>

        </div>

        <div>
            <button on:click={ handleBack } class="bg-yellow-400 rounded-lg p-1 px-3 shadow-md text-white font-bold m-5 mx-2 mb-0">Back</button>
            <button on:click={ handleSubmit } class="bg-blue-400 rounded-lg p-1 mx-24 shadow-md text-white font-bold m-5">Submit</button>
            <button on:click={ handleNext } class="bg-yellow-400 rounded-lg p-1 px-3 shadow-md text-white font-bold m-5 mx-2 mb-0">Next</button>
        </div>

        <div>
            {selected}
            {position}
        </div>

    </div>
</div>