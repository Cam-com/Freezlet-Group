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

    var Memo = []
    let REQUEST = []
    let ERROR = []

    for( var i=0 ; i < data.length ; i++){
        Memo[i] = i
        REQUEST[i] = [data[i].Word_ENG,data[i].Word_FR]
        ERROR[i] = [null,null]

    }


    return {
        word: data.length ? REQUEST : ERROR
    };

}