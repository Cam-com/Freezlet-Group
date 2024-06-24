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



    let zoomed1 = false;
    let zoomed2 = false;
    let zoomed3 = false;
    var selected = ['nothing','nothing'];
    var position = [0,0];

    function toggleZoom1_First() {
        selected[0] = data.words[0][0]
        position[0] = 1
        zoomed1 = !zoomed1;
        zoomed2 = false;
        zoomed3 = false;
    }

    function toggleZoom2_First() {
        selected[0] = data.words[1][0]
        position[0] = 2
        zoomed2 = !zoomed2;
        zoomed1 = false;
        zoomed3 = false;
    }

    function toggleZoom3_First() {
        selected[0] = data.words[2][0]
        position[0] = 3
        zoomed3 = !zoomed3;
        zoomed1 = false;
        zoomed2 = false;
       // zoomed3 = false;
    }





    function handleSubmit() {
        window.location.reload(); // Reload the page
    }

</script>



<style>
    .zoomable {
        transition: transform 0.3s ease;
    }

    .zoomed1, .zoomed2 {
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

                <button class="zoomable w-40 h-20 p-4 border border-gray-300 bg-white m-5 mb-0">
                    <p class="w-full h-full p-2 text-center border border-gray-300 resize-none">{ data.words[2][0] }</p>
                </button>

                <button class="zoomable w-40 h-20 p-4 border border-gray-300 bg-white m-5 mb-0">
                    <p class="w-full h-full p-2 text-center border border-gray-300 resize-none">{ data.words[3][0] }</p>
                </button>

                <button class="zoomable w-40 h-20 p-4 border border-gray-300 bg-white m-5 mb-0">
                    <p class="w-full h-full p-2 text-center border border-gray-300 resize-none">{ data.words[4][0] }</p>
                </button>

            </div>

            <div class="flex flex-col">
                <button class="zoomable w-40 h-20 p-4 border border-gray-300 bg-white m-5 mb-0">
                    <p class="w-full h-full p-2 text-center border border-gray-300 resize-none">{ Mixwords[0] }</p>
                </button>
                <button class="zoomable w-40 h-20 p-4 border border-gray-300 bg-white m-5 mb-0">
                    <p class="w-full h-full p-2 text-center border border-gray-300 resize-none">{ Mixwords[1] }</p>
                </button>
                <button class="zoomable w-40 h-20 p-4 border border-gray-300 bg-white m-5 mb-0">
                    <p class="w-full h-full p-2 text-center border border-gray-300 resize-none">{ Mixwords[2] }</p>
                </button>
                <button class="zoomable w-40 h-20 p-4 border border-gray-300 bg-white m-5 mb-0">
                    <p class="w-full h-full p-2 text-center border border-gray-300 resize-none">{ Mixwords[3] }</p>
                </button>
                <button class="zoomable w-40 h-20 p-4 border border-gray-300 bg-white m-5 mb-0">
                    <p class="w-full h-full p-2 text-center border border-gray-300 resize-none">{ Mixwords[4] }</p>
                </button>
            </div>

        </div>

        <button on:click={handleSubmit} class="bg-blue-400 rounded-lg p-1 mx-24 shadow-md text-white font-bold m-5">Submit</button>
    </div>
</div>