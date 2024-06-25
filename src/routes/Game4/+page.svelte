<script>
    export let data;

    function mixup(){
        let mixwords = ['empty','empty','empty','empty','empty','empty','empty','empty','empty','empty','empty','empty'];
        for (var i=0 ; i<= 5 ; i++)
        {
        for (var j=0 ; j<=1 ; j++)
            {
                let pose = Math.floor(Math.random()* 12);
                while(mixwords[pose] != 'empty')
                {
                    pose = Math.floor(Math.random()* 12);
                }

                mixwords[pose] = data.words[i][j];
            }
        }
        return mixwords;
    }

    var Mixwords = mixup();

    var selected = ['null','null']
    var position = ['null','null']


    let zoomed1 = true;
    let zoomed2 = false;
    let zoomed3 = false;
    let zoomed4 = false;
    let zoomed5 = false;
    let zoomed6 = false;
    let zoomed7 = false;
    let zoomed8 = false;
    let zoomed9 = false;
    let zoomed10 = false;
    let zoomed11 = false;
    let zoomed12 = false;

    function toggleZoom1(){
        selected[0] = Mixwords[0]
        position[0] = 0
        zoomed1 = true;
        zoomed2 = false;
        zoomed3 = false;
        zoomed4 = false;
        zoomed5 = false;
        zoomed6 = false;
        zoomed7 = false;
        zoomed8 = false;
        zoomed9 = false;
        zoomed10 = false;
        zoomed11 = false;
        zoomed12 = false;
    }

    function toggleZoom2(){
        selected[0] = Mixwords[1]
        position[0] = 1
        zoomed1 = false;
        zoomed2 = true;
        zoomed3 = false;
        zoomed4 = false;
        zoomed5 = false;
        zoomed6 = false;
        zoomed7 = false;
        zoomed8 = false;
        zoomed9 = false;
        zoomed10 = false;
        zoomed11 = false;
        zoomed12 = false;
    }

    function toggleZoom3(){
        selected[0] = Mixwords[2]
        position[0] = 2
        zoomed1 = false;
        zoomed2 = false;
        zoomed3 = true;
        zoomed4 = false;
        zoomed5 = false;
        zoomed6 = false;
        zoomed7 = false;
        zoomed8 = false;
        zoomed9 = false;
        zoomed10 = false;
        zoomed11 = false;
        zoomed12 = false;
    }

    function toggleZoom4(){
        selected[0] = Mixwords[3]
        position[0] = 3
        zoomed1 = false;
        zoomed2 = false;
        zoomed3 = false;
        zoomed4 = true;
        zoomed5 = false;
        zoomed6 = false;
        zoomed7 = false;
        zoomed8 = false;
        zoomed9 = false;
        zoomed10 = false;
        zoomed11 = false;
        zoomed12 = false;
    }

    function toggleZoom5(){
        selected[0] = Mixwords[4]
        position[0] = 4
        zoomed1 = false;
        zoomed2 = false;
        zoomed3 = false;
        zoomed4 = false;
        zoomed5 = true;
        zoomed6 = false;
        zoomed7 = false;
        zoomed8 = false;
        zoomed9 = false;
        zoomed10 = false;
        zoomed11 = false;
        zoomed12 = false;
    }

    function toggleZoom6(){
        selected[0] = Mixwords[5]
        position[0] = 5
        zoomed1 = false;
        zoomed2 = false;
        zoomed3 = false;
        zoomed4 = false;
        zoomed5 = false;
        zoomed6 = true;
        zoomed7 = false;
        zoomed8 = false;
        zoomed9 = false;
        zoomed10 = false;
        zoomed11 = false;
        zoomed12 = false;
    }

    function toggleZoom7(){
        selected[0] = Mixwords[6]
        position[0] = 6
        zoomed1 = false;
        zoomed2 = false;
        zoomed3 = false;
        zoomed4 = false;
        zoomed5 = false;
        zoomed6 = false;
        zoomed7 = true;
        zoomed8 = false;
        zoomed9 = false;
        zoomed10 = false;
        zoomed11 = false;
        zoomed12 = false;
    }

    function toggleZoom8(){
        selected[0] = Mixwords[7]
        position[0] = 7
        zoomed1 = false;
        zoomed2 = false;
        zoomed3 = false;
        zoomed4 = false;
        zoomed5 = false;
        zoomed6 = false;
        zoomed7 = false;
        zoomed8 = true;
        zoomed9 = false;
        zoomed10 = false;
        zoomed11 = false;
        zoomed12 = false;
    }

    function toggleZoom9(){
        selected[0] = Mixwords[8]
        position[0] = 8
        zoomed1 = false;
        zoomed2 = false;
        zoomed3 = false;
        zoomed4 = false;
        zoomed5 = false;
        zoomed6 = false;
        zoomed7 = false;
        zoomed8 = false;
        zoomed9 = true;
        zoomed10 = false;
        zoomed11 = false;
        zoomed12 = false;
    }

    function toggleZoom10(){
        selected[0] = Mixwords[9]
        position[0] = 9
        zoomed1 = false;
        zoomed2 = false;
        zoomed3 = false;
        zoomed4 = false;
        zoomed5 = false;
        zoomed6 = false;
        zoomed7 = false;
        zoomed8 = false;
        zoomed9 = false;
        zoomed10 = true;
        zoomed11 = false;
        zoomed12 = false;
    }

    function toggleZoom11(){
        selected[0] = Mixwords[10]
        position[0] = 10
        zoomed1 = false;
        zoomed2 = false;
        zoomed3 = false;
        zoomed4 = false;
        zoomed5 = false;
        zoomed6 = false;
        zoomed7 = false;
        zoomed8 = false;
        zoomed9 = false;
        zoomed10 = false;
        zoomed11 = true;
        zoomed12 = false;
    }

    function toggleZoom12(){
        selected[0] = Mixwords[11]
        position[0] = 11
        zoomed1 = false;
        zoomed2 = false;
        zoomed3 = false;
        zoomed4 = false;
        zoomed5 = false;
        zoomed6 = false;
        zoomed7 = false;
        zoomed8 = false;
        zoomed9 = false;
        zoomed10 = false;
        zoomed11 = false;
        zoomed12 = true;
    }


</script>


<style>
    .zoomable {
        transition: transform 0.3s ease;
    }

    .zoomed1, .zoomed2, .zoomed3, .zoomed4, .zoomed5, .zoomed6, .zoomed7, .zoomed8, .zoomed9, .zoomed10, .zoomed11, .zoomed12 {
        transform: scale(1.1); /* Adjust the scale value as needed */
        background-color: rgb(238, 244, 49);
    }
  
</style>




<h1 class="font-extrabold text-3xl">Memory</h1>

<!--The Flash Card-->
<div class="flex items-center justify-center min-h-screen">
    <div class="flex flex-col items-center bg-gray-100 rounded-lg shadow-md">
        <div class="flex flex-wrap justify-center mb-5">

                <button class="w-40 h-20 p-4 border border-gray-300 bg-white m-5 mb-0"
                class:zoomed1
                on:click={toggleZoom1}>
                    <p class="w-full h-full p-2 text-center border border-gray-300 resize-none">{Mixwords[0]}</p>
                </button>

                <button class="w-40 h-20 p-4 border border-gray-300 bg-white m-5 mb-0"
                class:zoomed2
                on:click={toggleZoom2}>
                    <p class="w-full h-full p-2 text-center border border-gray-300 resize-none">{Mixwords[1]}</p>
                </button>
                
                <button class="w-40 h-20 p-4 border border-gray-300 bg-white m-5 mb-0"
                class:zoomed3
                on:click={toggleZoom3}>
                    <p class="w-full h-full p-2 text-center border border-gray-300 resize-none">{Mixwords[2]}</p>
                </button>

                <button class="w-40 h-20 p-4 border border-gray-300 bg-white m-5 mb-0"
                class:zoomed4
                on:click={toggleZoom4}>
                    <p class="w-full h-full p-2 text-center border border-gray-300 resize-none">{Mixwords[3]}</p>
                </button>

                <button class="w-40 h-20 p-4 border border-gray-300 bg-white m-5 mb-0"
                class:zoomed5
                on:click={toggleZoom5}>
                    <p class="w-full h-full p-2 text-center border border-gray-300 resize-none">{Mixwords[4]}</p>
                </button>

                <button class="w-40 h-20 p-4 border border-gray-300 bg-white m-5 mb-0"
                class:zoomed6
                on:click={toggleZoom6}>
                    <p class="w-full h-full p-2 text-center border border-gray-300 resize-none">{Mixwords[5]}</p>
                </button>

                <button class="w-40 h-20 p-4 border border-gray-300 bg-white m-5 mb-0"
                class:zoomed7
                on:click={toggleZoom7}>
                    <p class="w-full h-full p-2 text-center border border-gray-300 resize-none">{Mixwords[6]}</p>
                </button>

                <button class="w-40 h-20 p-4 border border-gray-300 bg-white m-5 mb-0"
                class:zoomed8
                on:click={toggleZoom8}>
                    <p class="w-full h-full p-2 text-center border border-gray-300 resize-none">{Mixwords[7]}</p>
                </button>

                <button class="w-40 h-20 p-4 border border-gray-300 bg-white m-5 mb-0"
                class:zoomed9
                on:click={toggleZoom9}>
                    <p class="w-full h-full p-2 text-center border border-gray-300 resize-none">{Mixwords[8]}</p>
                </button>

                <button class="w-40 h-20 p-4 border border-gray-300 bg-white m-5 mb-0"
                class:zoomed10
                on:click={toggleZoom10}>
                    <p class="w-full h-full p-2 text-center border border-gray-300 resize-none">{Mixwords[9]}</p>
                </button>

                <button class="w-40 h-20 p-4 border border-gray-300 bg-white m-5 mb-0"
                class:zoomed11
                on:click={toggleZoom11}>
                    <p class="w-full h-full p-2 text-center border border-gray-300 resize-none">{Mixwords[10]}</p>
                </button>

                <button class="w-40 h-20 p-4 border border-gray-300 bg-white m-5 mb-0"
                class:zoomed12
                on:click={toggleZoom12}>
                    <p class="w-full h-full p-2 text-center border border-gray-300 resize-none">{Mixwords[11]}</p>
                </button>
                
        </div>

        <div>
            {selected}
            {position}
        </div>
        
    </div>
</div>