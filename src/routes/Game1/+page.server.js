import { supabase } from "$lib/db.js";


export async function load() {

  // Fetching a random word from the HSK_3 table
  const { data, error } = await supabase.from('Simple_TABLE').select();

    if (error) {
    console.error('Error fetching data:', error);
    return {
        word: [null,null],
        error: error.message,
    };
    }

    

/*
    var question = 'Word_ENG';
    var answer = 'Word_FR'
    const {Qcolumn, error1} = await supabase.from('Simple_TABLE').select(question);
    const {Acolumn, error2} = await supabase.from('Simple_TABLE').select(answer);

    if (error1) {
      console.error('Error fetching data:', error1);
      return {
          word: [null,null],
          error: error1.message,
      };
    }
    if (error2) {
      console.error('Error fetching data:', error2);
      return {
          word: [null,null],
          error: error2.message,
      };
    }
*/

    const L = data.length;

    let Rand = Math.floor(Math.random()* L);

    return {
        word: data.length ? [data[Rand].Word_ENG,data[Rand].Word_FR] : [null,null]
    };

    
}