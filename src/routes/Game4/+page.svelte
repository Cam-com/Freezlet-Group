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
    var position = [100,100]


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
            position = [100,100]
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
            position = [100,100]
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
            position = [100,100]
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
            position = [100,100]
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
            position = [100,100]
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
            position = [100,100]
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
            position = [100,100]
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
            position = [100,100]
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
            position = [100,100]
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
            position = [100,100]
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
            position = [100,100]
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
            position = [100,100]
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


    let showDiv1 = false;
    let showDiv2 = false;
    let showDiv3 = false;
    let showDiv4 = false;
    let showDiv5 = false;
    let showDiv6 = false;
    let showDiv7 = false;
    let showDiv8 = false;
    let showDiv9 = false;
    let showDiv10 = false;
    let showDiv11 = false;
    let showDiv12 = false;






    function handleSubmit() {
        let Check = [[],[]]
        for (var k=0 ; k<= 1 ; k++){
            for (var i=0 ; i<=5 ; i++){
                for(var j=0 ; j<=1 ; j++){
                    if(Mixwords[position[k]] == data.words[i][j]){
                        Check[k] = [i,j];
                    };
                };
            };
        };

        alert(
            `We have ${ Check }`
            `And we also have ${ position }`
        );

        if(Check[0][0] == Check[1][0]){

            // && Check[0][1] != Check[1][1]


            if(position[0] == 0 || positon[1] == 0){
                showDiv1 = true;
            }
            if(position[0] == 1 || positon[1] == 1){
                showDiv2 = true;
            }
            if(position[0] == 2 || positon[1] == 2){
                showDiv3 = true;
            }
            if(position[0] == 3 || positon[1] == 3){
                showDiv4 = true;
            }
            if(position[0] == 4 || positon[1] == 4){
                showDiv5 = true;
            }
            if(position[0] == 5 || positon[1] == 5){
                showDiv6 = true;
            }
            if(position[0] == 6 || positon[1] == 6){
                showDiv7 = true;
            }
            if(position[0] == 7 || positon[1] == 7){
                showDiv8 = true;
            }
            if(position[0] == 8 || positon[1] == 8){
                showDiv9 = true;
            }
            if(position[0] == 9 || positon[1] == 9){
                showDiv10 = true;
            }
            if(position[0] == 10 || positon[1] == 10){
                showDiv11 = true;
            }
            if(position[0] == 11 || positon[1] == 11){
                showDiv12 = true;
            }
        };
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

    .showDiv1, .showDiv2, .showDiv3, .showDiv4, .showDiv5, .showDiv6, .showDiv7, .showDiv8, .showDiv9, .showDiv10, .showDiv11, .showDiv12 {
        transform: scale(0.9); /* Adjust the scale value as needed */
        background-color: rgb(88, 244, 49);
    }
  
</style>




<h1 class="font-extrabold text-3xl">Memory</h1>

<div>
    { data.words}

</div>

<!--The Flash Card-->
<div class="flex items-center justify-center min-h-screen">
    <div class="flex flex-col items-center bg-gray-100 rounded-lg shadow-md">
        <div class="flex flex-wrap justify-center mb-5">

                <button class="zoomable w-40 h-20 p-4 border border-gray-300 bg-white m-5 mb-0"
                class:zoomed1
                class:showDiv1
                on:click={toggleZoom1}>
                    <p class="w-full h-full p-2 text-center border border-gray-300 resize-none">{Mixwords[0]}</p>
                </button>

                <button class="zoomable w-40 h-20 p-4 border border-gray-300 bg-white m-5 mb-0"
                class:zoomed2
                class:showDiv2
                on:click={toggleZoom2}>
                    <p class="w-full h-full p-2 text-center border border-gray-300 resize-none">{Mixwords[1]}</p>
                </button>
                
                <button class="zoomable w-40 h-20 p-4 border border-gray-300 bg-white m-5 mb-0"
                class:zoomed3
                class:showDiv3
                on:click={toggleZoom3}>
                    <p class="w-full h-full p-2 text-center border border-gray-300 resize-none">{Mixwords[2]}</p>
                </button>

                <button class="zoomable w-40 h-20 p-4 border border-gray-300 bg-white m-5 mb-0"
                class:zoomed4
                class:showDiv4
                on:click={toggleZoom4}>
                    <p class="w-full h-full p-2 text-center border border-gray-300 resize-none">{Mixwords[3]}</p>
                </button>

                <button class="zoomable w-40 h-20 p-4 border border-gray-300 bg-white m-5 mb-0"
                class:zoomed5
                class:showDiv5
                on:click={toggleZoom5}>
                    <p class="w-full h-full p-2 text-center border border-gray-300 resize-none">{Mixwords[4]}</p>
                </button>

                <button class="zoomable w-40 h-20 p-4 border border-gray-300 bg-white m-5 mb-0"
                class:zoomed6
                class:showDiv6
                on:click={toggleZoom6}>
                    <p class="w-full h-full p-2 text-center border border-gray-300 resize-none">{Mixwords[5]}</p>
                </button>

                <button class="zoomable w-40 h-20 p-4 border border-gray-300 bg-white m-5 mb-0"
                class:zoomed7
                class:showDiv7
                on:click={toggleZoom7}>
                    <p class="w-full h-full p-2 text-center border border-gray-300 resize-none">{Mixwords[6]}</p>
                </button>

                <button class="zoomable w-40 h-20 p-4 border border-gray-300 bg-white m-5 mb-0"
                class:zoomed8
                class:showDiv8
                on:click={toggleZoom8}>
                    <p class="w-full h-full p-2 text-center border border-gray-300 resize-none">{Mixwords[7]}</p>
                </button>

                <button class="zoomable w-40 h-20 p-4 border border-gray-300 bg-white m-5 mb-0"
                class:zoomed9
                class:showDiv9
                on:click={toggleZoom9}>
                    <p class="w-full h-full p-2 text-center border border-gray-300 resize-none">{Mixwords[8]}</p>
                </button>

                <button class="zoomable w-40 h-20 p-4 border border-gray-300 bg-white m-5 mb-0"
                class:zoomed10
                class:showDiv10
                on:click={toggleZoom10}>
                    <p class="w-full h-full p-2 text-center border border-gray-300 resize-none">{Mixwords[9]}</p>
                </button>

                <button class="zoomable w-40 h-20 p-4 border border-gray-300 bg-white m-5 mb-0"
                class:zoomed11
                class:showDiv11
                on:click={toggleZoom11}>
                    <p class="w-full h-full p-2 text-center border border-gray-300 resize-none">{Mixwords[10]}</p>
                </button>

                <button class="zoomable w-40 h-20 p-4 border border-gray-300 bg-white m-5 mb-0"
                class:zoomed12
                class:showDiv12
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