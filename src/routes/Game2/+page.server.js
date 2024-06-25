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

    const L = data.length;

    let Rand = Math.floor(Math.random()* L);

    var Alea1 = Rand
    var Alea2 = Rand 
    /*var Alea3 = Rand;*/

    while (Alea1 == Rand)
        {
            var Alea1 = Math.floor(Math.random()* L);
        }

    while (Alea2 == Rand || Alea2 == Alea1)
        {
            var Alea2 = Math.floor(Math.random()* L);
        }

    return {
        words: data.length ? [data[Rand].Word_ENG , data[Rand].Word_FR , data[Alea1].Word_FR , data[Alea2].Word_FR] : [null,null,null,null]
    };
}


