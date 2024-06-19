<!-- localhost:5137/coopercodes3@gmail.com -->
<!--
<script> 
    import supabase from '$lib/db'


    async function getData() {
        let { data: HSK_3, error } = await supabase
        .from('hsk_3')
        .select('Word')
  
        return data
    }

</script>
-->

<script context="module">
    /*
    import { supabase } from '../supabaseClient.js';
    */
   import supabase from '$lib/db'

  
    export async function load() {
      // Fetching a random word from the HSK_3 table
      const { data, error } = await supabase
        .from('HSK_3')
        .select('Word')
        .order('RANDOM()', { ascending: false })
        .limit(1);
  
      if (error) {
        console.error('Error fetching data:', error);
        return {
          props: {
            word: null,
            error: error.message,
          }
        };
      }
  
      return {
        props: {
          word: data.length ? data[0].Word : null
        }
      };
    }

    /**
	 * @type {any}
	 */
    export let word;
  </script>
  
  <main>
    {#if word}
      <p>Random Word: {word}</p>
    {:else}
      <p>No data found</p>
    {/if}
  </main>

<h1 class="font-extrabold text-3xl">Flash cards</h1>

<!--The Flash Card-->
<div class="flex items-center justify-center min-h-screen">
    <div class="flex flex-col items-center bg-gray-100 rounded-lg shadow-md">
        <div class="w-72 h-32 p-4 border border-gray-300 bg-white m-5 mb-0">
            <p class="w-full h-full p-2 text-lg font-bold text-center content-center border border-gray-300 resize-none">Question</p>
        </div>
        <div class="w-72 h-20 p-4 border border-gray-300 bg-white m-5 mb-0">
            <textarea class="w-full h-full p-2 border border-gray-300 resize-none" placeholder="Enter traduction here..."></textarea>
        </div>
        <div class="flex justify-center">
            <button class="bg-yellow-400 rounded-lg p-1 px-3 shadow-md text-white font-bold m-5 mx-2 mb-0">Back</button>
            <button class="bg-blue-400 rounded-lg p-1 px-3 shadow-md text-white font-bold m-5 mx-7 mb-0">Submit</button>
            <button class="bg-yellow-400 rounded-lg p-1 px-3 shadow-md text-white font-bold m-5 mx-2 mb-0">Next</button>
        </div>
        
        <div class="w-72 h-32 p-4 border border-gray-300 bg-white m-5">
            <p class="w-full h-full p-2 text-lg font-bold text-center content-center border border-gray-300 resize-none">Answer</p>
        </div>
    </div>
</div>