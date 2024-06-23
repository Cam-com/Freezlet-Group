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

    // Function to handle the submit button click
    //function handleSubmit() {


    //}

    // Function to handle the "Next" button click
    function handleNext() {
        window.location.reload(); // Reload the page
    }

    let zoomed = false;

    function toggleZoom() {
        zoomed = !zoomed;
    }

</script>

<style>
    .zoomable {
        transition: transform 0.3s ease;
    }

    .zoomed {
        transform: scale(1.1); /* Adjust the scale value as needed */
        background-color: rgb(33, 194, 33)
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
            class:zoomed
            on:click={toggleZoom}>

                <p class="w-full h-full p-2 text-center border border-gray-300 resize-none">
                    { Mixwords[0] }
                </p>

            </button>

            <button class="zoomable w-40 h-20 p-4 border border-gray-300 bg-white m-5 mb-0 cursor-pointer"
            class:zoomed
            on:click={toggleZoom}>

                <p class="w-full h-full p-2 text-center border border-gray-300 resize-none">
                    { Mixwords[1] }
                </p>
            </button>

            <button class="zoomable w-40 h-20 p-4 border border-gray-300 bg-white m-5 mb-0 cursor-pointer"
            class:zoomed
            on:click={toggleZoom}>

                <p class="w-full h-full p-2 text-center border border-gray-300 resize-none">
                    { Mixwords[2] }
                </p>

            </button>

        </div>
        <div>
            <button class="bg-blue-400 rounded-lg p-1 mx-24 shadow-md text-white font-bold m-5">Submit</button>
            <button on:click={handleNext} class="bg-yellow-400 rounded-lg p-1 px-3 shadow-md text-white font-bold m-5 mx-2 mb-0">Next</button>
        </div>
    </div>
</div>