<script>
    export let data;

    function mixup(){
        var correcte = Math.floor(Math.random()* 3);
        let mixwords = new Array(3);
        mixwords[correcte] = data.words[1];
        if(correcte == 0)
        {
            mixwords[1] = data.words[2];
            mixwords[2] = data.words[3];
        }
        else if(correcte == 1)
        {
            mixwords[0] = data.words[2];
            mixwords[2] = data.words[3];
        }
        else
        {
            mixwords[0] = data.words[2];
            mixwords[1] = data.words[3];
        }
        return mixwords;
    }

    var Mixwords = mixup();
    
    // Function to handle the "Next" button click
 //   function handleBack() {
  //      window.location.reload(); // Reload the page
 //   }

    // Function to handle the "Next" button click
    function handleNext() {
        window.location.reload(); // Reload the page
    }

    let zoomed1 = false;
    let zoomed2 = false;
    let zoomed3 = false;
    var selected = false;
    var position = 0;

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


    let correct1 = false;
    let correct2 = false;
    let correct3 = false;
    let error1 = false;
    let error2 = false;
    let error3 = false;

    function handleSubmit(){
        if(selected == data.words[1]){
            if(position == 1){
                correct1 = !correct1;
            }
            else if(position == 2){
                correct2 = !correct2;
            }
            else{
                correct3 = !correct3;
            }
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
  
</style>


<h1 class="font-extrabold text-3xl">Pick one</h1>

<!--The Flash Card-->
<div class="flex items-center justify-center min-h-screen">
    <div class="flex flex-col items-center bg-gray-100 rounded-lg shadow-md">
        <div class="w-72 h-32 p-4 border border-gray-300 bg-white m-5 mb-0">
            <p class="w-full h-full p-2 text-lg font-bold text-center content-center border border-gray-300 resize-none">{ data.words[0] }</p>
        </div>
        <div class="flex">

            <button  class="zoomable w-40 h-20 p-4 border border-gray-300 bg-white m-5 mb-0 cursor-pointer" 
            class:zoomed1
            class:correct1
            class:error1
            on:click={toggleZoom1}>

                <p class="w-full h-full p-2 text-center border border-gray-300 resize-none">
                    { Mixwords[0] }
                </p>

            </button>

            <button class="zoomable w-40 h-20 p-4 border border-gray-300 bg-white m-5 mb-0 cursor-pointer"
            class:zoomed2
            class:correct2
            class:error2
            on:click={toggleZoom2}>

                <p class="w-full h-full p-2 text-center border border-gray-300 resize-none">
                    { Mixwords[1] }
                </p>
            </button>

            <button class="zoomable w-40 h-20 p-4 border border-gray-300 bg-white m-5 mb-0 cursor-pointer"
            class:zoomed3
            class:correct3
            class:error3
            on:click={toggleZoom3}>

                <p class="w-full h-full p-2 text-center border border-gray-300 resize-none">
                    { Mixwords[2] }
                </p>

            </button>

        </div>
        <div>
            <button on:click={handleSubmit} class="bg-blue-400 rounded-lg p-1 mx-24 shadow-md text-white font-bold m-5">Submit</button>
            <button on:click={handleNext} class="bg-yellow-400 rounded-lg p-1 px-3 shadow-md text-white font-bold m-5 mx-2 mb-0">Next</button>
        </div>
        <div>{ selected }</div>
        <div>{ position }</div>
    </div>
</div>