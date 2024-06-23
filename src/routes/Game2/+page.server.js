import { supabase } from "$lib/db.js";

export async function load() {

  // Fetching a random word from the HSK_3 table
  const { data, error } = await supabase.from('Simple_ENG').select();

    if (error) {
    console.error('Error fetching data:', error);
    return {
        words: [null,null,null,null],
        error: error.message,
    };
    }

    let Rand = Math.floor(Math.random()* 8);

    var Alea1 = Rand
    var Alea2 = Rand 
    /*var Alea3 = Rand;*/

    while (Alea1 == Rand)
        {
            var Alea1 = Math.floor(Math.random()* 8);
        }

    while (Alea2 == Rand || Alea2 == Alea1)
        {
            var Alea2 = Math.floor(Math.random()* 8);
        }

    return {
        words: data.length ? [data[Rand].Word_ENG , data[Rand].Word_FR , data[Alea1].Word_FR , data[Alea2].Word_FR] : [null,null,null,null]
    };
}