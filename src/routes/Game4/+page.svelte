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
    let zoomed11 = false;
    let zoomed12 = false;

    function toggleZoom1(){
        if(selected[0] == 'null')
        {
            selected[0] = Mixwords[0]
            position[0] = 0
            zoomed1 = true;
        }
        else if(selected[1] == 'null')
        {
            selected[1] = Mixwords[0]
            position[1] = 0
            zoomed1 = true;
        }
        else
        {
            selected = ['null','null']
            position = ['null','null']
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
            zoomed12 = false;
        }
    }

    function toggleZoom2(){
        if(selected[0] == 'null')
        {
            selected[0] = Mixwords[1]
            position[0] = 1
            zoomed2 = true;
        }
        else if(selected[1] == 'null')
        {
            selected[1] = Mixwords[1]
            position[1] = 1
            zoomed2 = true;
        }
        else
        {
            selected = ['null','null']
            position = ['null','null']
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
            zoomed12 = false;
        }
    }

    function toggleZoom3(){
        if(selected[0] == 'null')
        {
            selected[0] = Mixwords[2]
            position[0] = 2
            zoomed3 = true;
        }
        else if(selected[1] == 'null')
        {
            selected[1] = Mixwords[2]
            position[1] = 2
            zoomed3 = true;
        }
        else
        {
            selected = ['null','null']
            position = ['null','null']
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
            zoomed12 = false;
        }
    }

    function toggleZoom4(){
        if(selected[0] == 'null')
        {
            selected[0] = Mixwords[3]
            position[0] = 3
            zoomed4 = true;
        }
        else if(selected[1] == 'null')
        {
            selected[1] = Mixwords[3]
            position[1] = 3
            zoomed4 = true;
        }
        else
        {
            selected = ['null','null']
            position = ['null','null']
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
            zoomed12 = false;
        }
    }

    function toggleZoom5(){
        if(selected[0] == 'null')
        {
            selected[0] = Mixwords[4]
            position[0] = 4
            zoomed5 = true;
        }
        else if(selected[1] == 'null')
        {
            selected[1] = Mixwords[4]
            position[1] = 4
            zoomed5 = true;
        }
        else
        {
            selected = ['null','null']
            position = ['null','null']
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
            zoomed12 = false;
        }
    }

    function toggleZoom6(){
        if(selected[0] == 'null')
        {
            selected[0] = Mixwords[5]
            position[0] = 5
            zoomed6 = true;
        }
        else if(selected[1] == 'null')
        {
            selected[1] = Mixwords[5]
            position[1] = 5
            zoomed6 = true;
        }
        else
        {
            selected = ['null','null']
            position = ['null','null']
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
            zoomed12 = false;
        }
    }

    function toggleZoom7(){
        if(selected[0] == 'null')
        {
            selected[0] = Mixwords[6]
            position[0] = 6
            zoomed7 = true;
        }
        else if(selected[1] == 'null')
        {
            selected[1] = Mixwords[6]
            position[1] = 6
            zoomed7 = true;
        }
        else
        {
            selected = ['null','null']
            position = ['null','null']
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
            zoomed12 = false;
        }
    }

    function toggleZoom8(){
        if(selected[0] == 'null')
        {
            selected[0] = Mixwords[7]
            position[0] = 7
            zoomed8 = true;
        }
        else if(selected[1] == 'null')
        {
            selected[1] = Mixwords[7]
            position[1] = 7
            zoomed8 = true;
        }
        else
        {
            selected = ['null','null']
            position = ['null','null']
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
            zoomed12 = false;
        }
    }

    function toggleZoom9(){
        if(selected[0] == 'null')
        {
            selected[0] = Mixwords[8]
            position[0] = 8
            zoomed9 = true;
        }
        else if(selected[1] == 'null')
        {
            selected[1] = Mixwords[8]
            position[1] = 8
            zoomed9 = true;
        }
        else
        {
            selected = ['null','null']
            position = ['null','null']
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
            zoomed12 = false;
        }
    }

    function toggleZoom10(){
        if(selected[0] == 'null')
        {
            selected[0] = Mixwords[9]
            position[0] = 9
            zoomed10 = true;
        }
        else if(selected[1] == 'null')
        {
            selected[1] = Mixwords[9]
            position[1] = 9
            zoomed10 = true;
        }
        else
        {
            selected = ['null','null']
            position = ['null','null']
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
            zoomed12 = false;
        }
    }

    function toggleZoom11(){
        if(selected[0] == 'null')
        {
            selected[0] = Mixwords[10]
            position[0] = 10
            zoomed11 = true;
        }
        else if(selected[1] == 'null')
        {
            selected[1] = Mixwords[10]
            position[1] = 10
            zoomed11 = true;
        }
        else
        {
            selected = ['null','null']
            position = ['null','null']
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
            zoomed12 = false;
        }
    }

    function toggleZoom12(){
        if(selected[0] == 'null')
        {
            selected[0] = Mixwords[11]
            position[0] = 11
            zoomed12 = true;
        }
        else if(selected[1] == 'null')
        {
            selected[1] = Mixwords[11]
            position[1] = 11
            zoomed12 = true;
        }
        else
        {
            selected = ['null','null']
            position = ['null','null']
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
            zoomed12 = false;
        }
    }

    function handleSubmit() {
        for ( i=0 ; i<=5 ; i++){
            for( j=0 ; j<=1 ; j++){

            }
        }
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

                <button class="zoomable w-40 h-20 p-4 border border-gray-300 bg-white m-5 mb-0"
                class:zoomed1
                on:click={toggleZoom1}>
                    <p class="w-full h-full p-2 text-center border border-gray-300 resize-none">{Mixwords[0]}</p>
                </button>

                <button class="zoomable w-40 h-20 p-4 border border-gray-300 bg-white m-5 mb-0"
                class:zoomed2
                on:click={toggleZoom2}>
                    <p class="w-full h-full p-2 text-center border border-gray-300 resize-none">{Mixwords[1]}</p>
                </button>
                
                <button class="zoomable w-40 h-20 p-4 border border-gray-300 bg-white m-5 mb-0"
                class:zoomed3
                on:click={toggleZoom3}>
                    <p class="w-full h-full p-2 text-center border border-gray-300 resize-none">{Mixwords[2]}</p>
                </button>

                <button class="zoomable w-40 h-20 p-4 border border-gray-300 bg-white m-5 mb-0"
                class:zoomed4
                on:click={toggleZoom4}>
                    <p class="w-full h-full p-2 text-center border border-gray-300 resize-none">{Mixwords[3]}</p>
                </button>

                <button class="zoomable w-40 h-20 p-4 border border-gray-300 bg-white m-5 mb-0"
                class:zoomed5
                on:click={toggleZoom5}>
                    <p class="w-full h-full p-2 text-center border border-gray-300 resize-none">{Mixwords[4]}</p>
                </button>

                <button class="zoomable w-40 h-20 p-4 border border-gray-300 bg-white m-5 mb-0"
                class:zoomed6
                on:click={toggleZoom6}>
                    <p class="w-full h-full p-2 text-center border border-gray-300 resize-none">{Mixwords[5]}</p>
                </button>

                <button class="zoomable w-40 h-20 p-4 border border-gray-300 bg-white m-5 mb-0"
                class:zoomed7
                on:click={toggleZoom7}>
                    <p class="w-full h-full p-2 text-center border border-gray-300 resize-none">{Mixwords[6]}</p>
                </button>

                <button class="zoomable w-40 h-20 p-4 border border-gray-300 bg-white m-5 mb-0"
                class:zoomed8
                on:click={toggleZoom8}>
                    <p class="w-full h-full p-2 text-center border border-gray-300 resize-none">{Mixwords[7]}</p>
                </button>

                <button class="zoomable w-40 h-20 p-4 border border-gray-300 bg-white m-5 mb-0"
                class:zoomed9
                on:click={toggleZoom9}>
                    <p class="w-full h-full p-2 text-center border border-gray-300 resize-none">{Mixwords[8]}</p>
                </button>

                <button class="zoomable w-40 h-20 p-4 border border-gray-300 bg-white m-5 mb-0"
                class:zoomed10
                on:click={toggleZoom10}>
                    <p class="w-full h-full p-2 text-center border border-gray-300 resize-none">{Mixwords[9]}</p>
                </button>

                <button class="zoomable w-40 h-20 p-4 border border-gray-300 bg-white m-5 mb-0"
                class:zoomed11
                on:click={toggleZoom11}>
                    <p class="w-full h-full p-2 text-center border border-gray-300 resize-none">{Mixwords[10]}</p>
                </button>

                <button class="zoomable w-40 h-20 p-4 border border-gray-300 bg-white m-5 mb-0"
                class:zoomed12
                on:click={toggleZoom12}>
                    <p class="w-full h-full p-2 text-center border border-gray-300 resize-none">{Mixwords[11]}</p>
                </button>
                
        </div>

        <div>
            <button on:click={handleSubmit} class="bg-blue-400 rounded-lg p-1 mx-24 shadow-md text-white font-bold m-5">Submit</button>
        </div>

        <div>
            {selected}
            {position}
        </div>
        
    </div>
</div>